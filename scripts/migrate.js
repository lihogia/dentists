const { db } = require('@vercel/postgres');
//import { sql } from '@vercel/postgres';
const bcrypt = require('bcrypt');
const { oldpatients } = require('./oldDentistsData.js');
const { separateFullName, toTitleCase, formatDateObjToLocal, checkAndConvertDate } = require('../src/app/lib/utils-module.js');

function migrateTreatmentRecords(oldTreatments) {
    const oldT = oldTreatments[0];

    const sDate = formatDateObjToLocal(new Date(oldT.date["$date"]), "vi");

    const [isD, eDate] = checkAndConvertDate(sDate);

    const task = {
        cure: oldT.cures,
        cure_date: eDate,
        status: true
    }

    const treatmentRecords = {
        exam_date: eDate,
        diagnoses: oldT.diagnoses,
        amount: oldT.bill,
        paid: true,
        treatments: [task]
    }

    console.log(treatmentRecords);


    /*
    fullname: string;
    exam_date: string; // YYYY-MM-DD
    diagnoses: string;
    treatments: Task[];
    amount: number;
    paid: boolean;
    isCreated: boolean;



    cure: string,
    cure_date: string,
    status: boolean // true: Done, false: Pending
*/

}

async function migratePatients(client) {
    try {
        for (let j=0; j<oldpatients.length; j++) {
            const oldP = oldpatients[j];

            const names = separateFullName(toTitleCase(oldP.fullname));

            const insertPatient = await client.sql`
                INSERT INTO patients (id, first_name, middle_name, last_name, birth_year, gender, phone, address)
                VALUES (DEFAULT, ${names[0]}, ${names[1]}, ${names[2]}, ${oldP.birthyear}, ${'female'}, ${oldP.phone}, ${""})
                RETURNING id
            `;
            const createdId = insertPatient.rows[0].id;
            console.log(`Patient inserted id : ${createdId}`);
    
            const diagnoses = oldP.treatments;
            const treatmentRecords = [];
            for (let i=0; i< diagnoses.length; i++) {
                const diagnose = diagnoses[i];
                const sDate = formatDateObjToLocal(new Date(diagnose.date["$date"]), "vi");
                const [isD, eDate] = checkAndConvertDate(sDate);
    
                console.log(`date: ${eDate}`);
                const task = {
                    cure: diagnose.cures,
                    cure_date: eDate,
                    status: true
                }
                const tasks = [task];
                const treatments = JSON.stringify(tasks);
                const treatmentRecord = {
                    pid: createdId,
                    exam_date: eDate,
                    diagnoses: diagnose.diagnoses,
                    treatments: treatments,
                    amount: diagnose.bill,
                    paid: true
                };
                
                if (treatmentRecords.length != 0) {
                    const prevDiagnose = treatmentRecords[treatmentRecords.length - 1];
                    const combinedDiagnose = `${prevDiagnose.diagnoses} - ${prevDiagnose.amount};; ${treatmentRecord.diagnoses} - ${treatmentRecord.amount}`;
                    prevDiagnose.diagnoses = combinedDiagnose;
                    const combinedTreatments = JSON.parse(prevDiagnose.treatments);
                    combinedTreatments.push(task);
                    prevDiagnose.treatments = JSON.stringify(combinedTreatments);
                    prevDiagnose.amount += treatmentRecord.amount;

                    const insertTreatment = await client.sql`
                        UPDATE treatment_records 
                        SET diagnoses = ${prevDiagnose.diagnoses}, amount = ${prevDiagnose.amount}, paid = ${prevDiagnose.paid}, treatments = ${JSON.stringify(JSON.parse(prevDiagnose.treatments))}
                        WHERE pid = ${createdId} AND exam_date = ${prevDiagnose.exam_date}
                    `;
                    console.log(`Treatment inserted for id "${createdId}": ${insertTreatment.rowCount} rows.`);
                }else {
                    treatmentRecords.push(treatmentRecord);
                    const insertTreatment = await client.sql`
                        INSERT INTO treatment_records (pid, exam_date, diagnoses, treatments, amount, paid)
                        VALUES (${createdId}, ${eDate}, ${diagnose.diagnoses}, 
                                ${treatments},
                                ${diagnose.bill}, true)
                    `;
                    console.log(`Treatment inserted for id "${createdId}": ${insertTreatment.rowCount} rows.`)                                    
                }
                
    
/*                const insertTreatment = await client.sql`
                INSERT INTO treatment_records (pid, exam_date, diagnoses, treatments, amount, paid)
                VALUES (${createdId}, ${eDate}, ${diagnose.diagnoses}, 
                        ${treatments},
                        ${diagnose.bill}, true)
                `;
                console.log(`Treatment inserted for id "${createdId}": ${insertTreatment.rowCount} rows.`)                
*/
            }
            console.log('Show treatmentRecords');
            console.log(treatmentRecords);

        }        

    }catch (error) {
        console.error('Error with Database: ', error);
        throw error;
    }
}


async function main() {
    const client = await db.connect();
//    console.log(`Old data: `);
//    console.log(oldpatients[0]);

    await migratePatients(client);

    //console.log(`New data: `);
    //console.log(retData);

    await client.end();
}

async function main1() {
    const client = await db.connect();
    

    await client.end();
}

main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });

