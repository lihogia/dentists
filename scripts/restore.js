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

async function restorefromFile() {
    const fs = require('fs');
    const fsPromises = fs.promises;

    
     
    //const content = fs.readFile(filename);

    try {
        const filename = 'patients_2024-08-12.json';
        const contents = await fsPromises.readFile(filename, { encoding: 'utf8' });

        const jsonObj = JSON.parse(contents);
        console.log(jsonObj);
      } catch (err) {
        console.error(err.message);
      }


}

async function main() {
//    const client = await db.connect();

    restorefromFile();

//    await client.end();
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

