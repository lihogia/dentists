const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const { oldpatients } = require('./oldDentistsData.js');
const { separateFullName, toTitleCase, formatDateObjToLocal, checkAndConvertDate } = require('../src/app/lib/utils-module.js');
const { describe } = require('node:test');
/*const { PatientForm,
    MedicalRecordsForm,
    DentalRecordsForm,
    TreatmentRecordsForm,
    Task,
    InvoicesTable
} = require('../src/app/lib/data/definition');
*/

const patients = [];

async function getMedicalRecords(client) {
    const medicalRecords = await client.sql`
        SELECT *
        FROM medical_records
    `;

    for (let item of medicalRecords.rows) {
        const mInfo = {
            medical: {
                height: item.height,
                weight: item.weight,
                blood_pressure_sys: item.blood_pressure_sys,
                blood_pressure_dia: item.blood_pressure_dia,
                pulse: item.pulse,
                hospitalized: item.hospitalized,
                hospitalized_declare: item.hospitalized_declare,
                suffered: JSON.parse(JSON.stringify(item.suffered))
            }
        }
        const index = patients.findIndex((patient) => patient.info.id == item.pid);
        if (index < 0) { //patient not existed.
            console.log(`Medical Info not existing in Patients: ${item.pid}`);
        }else {
            //console.log(`pid = ${item.pid},index = ${index}`);
            const uItem = {
                ...patients[index],
                medical_records: mInfo.medical
            }
            patients[index] = uItem;    
        }
    }
}

async function getDentalRecords(client) {
    const medicalRecords = await client.sql`
        SELECT *
        FROM dental_records
    `;

    for (let item of medicalRecords.rows) {
        const dInfo = {
            dental: {
                tooth_diagram: item.tooth_diagram,
                description: item.description
            }
        }
        const index = patients.findIndex((patient) => patient.info.id == item.pid);
        if (index < 0) { //patient not existed.
            console.log(`Dental Info not existing in Patients: ${item.pid}`);
        }else {
            //console.log(`pid = ${item.pid},index = ${index}`);
            const uItem = {
                ...patients[index],
                dental_records: dInfo.dental,
            }
            patients[index] = uItem;    
        }
    }
}

async function getTreatmentRecords(client) {
    const treatmentRecords = await client.sql`
        SELECT *
        FROM treatment_records
    `;

    for (let item of treatmentRecords.rows) {
        const tInfo = {
            treatment: {
                exam_date: item.exam_date,
                diagnoses: item.diagnoses,
                treatments: JSON.parse(JSON.stringify(item.treatments)),
                amount: item.amount,
                paid: item.paid
    
            }
        }
        const index = patients.findIndex((patient) => patient.info.id == item.pid);
        if (index < 0) { //patient not existed.
            console.log(`Treatment Info not existing in Patients: ${item.pid}`);
        }else {
            //console.log(`pid = ${item.pid},index = ${index}`);
            const uItem = {
                ...patients[index],
                treatment_records: tInfo.treatment
            }
            patients[index] = uItem;    
        }
    }
}

async function getPatients(client) {

    try {
        const infoPatients = await client.sql`
            SELECT 
                *
            FROM patients as p
            ORDER BY p.id ASC
        `;

/*        const infoPatients = await client.sql`
            SELECT 
                *
            FROM patients as p
            WHERE p.id = 268 OR p.id = 1
        `;
*/
        for (let item of infoPatients.rows) {
            const pInfo = {
                info: {
                    id: item.id,
                    first_name: item.first_name,
                    middle_name: item.middle_name,
                    last_name: item.last_name,
                    birth_year: item.birth_year,
                    gender: item.gender,
                    address: item.address,
                    phone: item.phone
                }
            };

            patients.push(pInfo);
        }

        //console.log(patients);
    
        //return infoPatients.rows;

    }catch (error) {
        console.error('Error with Database: ', error);
        throw error;
    }

}

async function saveToFile(dataToSave) {
    const fs = require('fs');
    const fsPromises = fs.promises;
     
    // Data for the new file
    const now = new Date();
    const today = formatDateObjToLocal(now);
    const [isD, dayline] = checkAndConvertDate(today);
    const time = `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

    const timeline = `${dayline}_${time}`;
     
    // Name of the file to be created
    let file = `./backup/patients_${timeline}.json`;

    //const buffer = Buffer.from(dataToSave)
     
    // Creating the new file 'books.txt'
    fs.writeFile(file, dataToSave, (err) => {
     
        // Catching error
        if (err) {
            console.log(err);
        }
    });    
}

async function main() {
    const client = await db.connect();

    //const allPatients = await getPatients(client);
    await getPatients(client); 
    await getMedicalRecords(client);
    await getDentalRecords(client);
    console.log(patients);
    await getTreatmentRecords(client);
    console.log(patients);


    //console.log(`Get all patients, total: ${patients.length}`);
    //console.log(patients);

    //const blobToSave = new Blob([JSON.stringify(allPatients)], {type: 'application/json'});
    const textToSave = JSON.stringify(patients);
    
    saveToFile(textToSave);


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

