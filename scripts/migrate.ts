import { PrismaClient } from '@prisma/client';
import { oldpatients } from './oldDentistsData.js';
import { separateFullName, formatDateObjToLocal, checkAndConvertDate } from '@/app/lib/utils';

const prisma = new PrismaClient();
const ENV = process.env.NODE_ENV;

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

async function migratePatients() {
    const duplicatedRecords: any = [];


    try {
        for (let j=0; j<oldpatients.length; j++) {
            const oldP = oldpatients[j];
            const fName = `${oldP.fullname}`;

            const names = separateFullName(fName.toLowerCase());

            const insertPatient = {
                first_name: names[0],
                middle_name: names[1],
                last_name: names[2],
                birth_year: oldP.birthyear,
                gender: "female",
                phone: oldP.phone,
                address: ""
            }

            const resultWithIdOnly = await prisma.patient.create({
                data: insertPatient,
                select: {
                    id: true
                }
            });
            console.log(`Inserted 1 patient with id: ${resultWithIdOnly.id}`);
            const createdId = resultWithIdOnly.id;
    
            const oldTreatments = oldP.treatments; //diagnoses
            const treatmentRecords: any = [];
            for (let i=0; i< oldTreatments.length; i++) {
                const diagnose = oldTreatments[i];
                const sDate = formatDateObjToLocal(new Date(diagnose.date["$date"]), "vi");
                const [isD, eDate] = checkAndConvertDate(sDate);
    
                //console.log(`date: ${eDate}`);
                /*const task = {
                    cure: diagnose.cures,
                    cure_date: eDate,
                    status: true
                }*/
                //const tasks = [task];
                //const treatments = JSON.stringify(tasks);
                const treatmentRecord = {
                    pid: createdId,
                    exam_date: eDate,
                    diagnose: diagnose.diagnoses,
                    treatment: diagnose.cure,
                    amount: diagnose.bill,
                    paid: true
                };

                if (treatmentRecords.length > 0) {
                    const existedIndex = treatmentRecords.findIndex((record) => (record.exam_date == treatmentRecord.exam_date) );
                    if (existedIndex == -1) {
                        treatmentRecords.push(treatmentRecord);
                    }else {

                        //console.log(`----- Exam date is duplicated. It's from patient with pid=${createdId}, ${fName} ------`);
                        //console.log(`Let's handle the following treatment manually: `);
                        //console.log(treatmentRecord);

                        duplicatedRecords.push({
                            pid: createdId,
                            fullname: fName,
                            treatment: treatmentRecord
                        });
                    }    
                }else {
                    treatmentRecords.push(treatmentRecord);
                }
    
            }

            const saveTreatmentRecords = treatmentRecords.map((record) => {
                return {
                    ...record,
                    exam_date: new Date(record.exam_date)
                };
            });

            const treatmentResultWithIdOnly = await prisma.treatmentRecord.createManyAndReturn({
                data: saveTreatmentRecords,
                select: {
                    pid: true,
                    exam_date: true
                }
            });
            
            console.log('Saved treatment records: ');
            console.log(treatmentResultWithIdOnly);
        }        

        console.log('----------');
        console.log('Duplicated data must be handled manually: ');
        for (let dRecord of duplicatedRecords) {
            console.log(dRecord);
        }

    }catch (error) {
        console.error('Error with Database: ', error);
        throw error;
    }
}

async function main() {
    console.log(`env: ${ENV}`);

    await migratePatients();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        e,
    );
    await prisma.$disconnect();
    process.exit(1);
  })
