const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const { oldpatients } = require('./oldDentistsData.js');
const { separateFullName, toTitleCase, formatDateObjToLocal, checkAndConvertDate } = require('../src/app/lib/utils-module.js');
/*const { PatientForm,
    MedicalRecordsForm,
    DentalRecordsForm,
    TreatmentRecordsForm,
    Task,
    InvoicesTable
} = require('../src/app/lib/data/definition');
*/

async function getPatients(client) {

    try {
        const patients = await client.sql`
            SELECT 
                *
            FROM patients as p
            ORDER BY p.id ASC
        `;   

        return patients.rows;

    }catch (error) {
        console.error('Error with Database: ', error);
        throw error;
    }

}

async function main() {
    const client = await db.connect();

    const allPatients = await getPatients(client);

    console.log(`Get all patients, total: ${allPatients.length}`);
    console.log(allPatients);


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

