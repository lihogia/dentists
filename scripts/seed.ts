import { db } from '@/src/app/lib/data/database';
import { sql } from 'kysely';
import { users, patients } from '@/src/app/lib/data/placeholderData';
import { separateFullName } from '@/src/app/lib/utils';

const ENV = process.env.NODE_ENV;

/** Patients */
async function deletePatientsTable() {

    await db.schema
        .dropTable("patients")
        .ifExists()
        .execute();
    console.log('Drop patients table.');
}
async function createPatientsTable() {
    await db.schema
        .createTable("patients")
        .ifNotExists()
        .addColumn('id', 'serial', (col) => col.primaryKey())
        .addColumn('first_name', 'varchar(100)', (col) => col.notNull())
        .addColumn('middle_name', 'varchar(255)', (col) => col.notNull())
        .addColumn('last_name', 'varchar(100)', (col) => col.notNull())
        .addColumn('birth_year', 'integer', (col) => col.notNull())
        .addColumn('gender', 'varchar', (col) => col.notNull())
        .addColumn('phone', 'varchar')
        .addColumn('address', 'varchar')
        .execute();

    console.log(`Created "patients" table.`);
    //console.log(result);

}
async function insertPatientsData() {

    const insertPatients = patients.map((patient) => {
        const nNames = separateFullName(patient.name);
        return {
            first_name: nNames[0],
            middle_name: nNames[1],
            last_name: nNames[2],
            birth_year: patient.birth_year,
            gender: patient.gender,
            phone: patient.phone,
            address: patient.address
        }
    })
    const result = await db
                    .insertInto("patients")
                    .values(insertPatients)
                    .returning('id')
                    .execute();
    console.log(`Inserted ${insertPatients.length} patient`);
    console.log(result);
            
}
async function requestPatientsInfo() {

    let query = db.selectFrom('patients');
    const result = await query.selectAll().execute();
  
    let showRes = result;
    if (showRes.length > 10) {
      showRes = showRes.filter((value, index) => index < 11);
    }
    console.log(showRes);
}

/** Medical_Records */
async function deleteMedicalRecordsTable() {

    await db.schema
        .dropTable("medical_records")
        .ifExists()
        .execute();
    console.log('Drop medical_records table.');
}
async function createMedicalRecordsTable() {
    await db.schema
        .createTable("medical_records")
        .ifNotExists()
        .addColumn('pid', 'integer', (col) => col.primaryKey())
        .addForeignKeyConstraint('pid_foreign', ['pid'], 'patients', ['id'])
        .addColumn('height', 'numeric(3, 1)', (col) => col.notNull())
        .addColumn('weight', 'numeric(3, 1)', (col) => col.notNull())
        .addColumn('blood_pressure_sys', 'integer', (col) => col.notNull())
        .addColumn('blood_pressure_dia', 'integer', (col) => col.notNull())
        .addColumn('pulse', 'integer', (col) => col.notNull())
        .addColumn('hospitalized', 'boolean', (col) => col.notNull())
        .addColumn('hospitalized_declare', 'varchar')
        .addColumn('suffered', 'json', (col) => col.notNull())
        .execute();

    console.log(`Created "medical_records" table.`);
}
async function insertMedicalRecordsData() {

    const insertMRs = patients.map((patient) => {
        const mI = patient.medicalInfo;
        return {
            pid: patient.id,
            height: mI.height,
            weight: mI.weight,
            blood_pressure_sys: mI.blood_pressure_sys,
            blood_pressure_dia: mI.blood_pressure_dia,
            pulse: mI.pulse,
            hospitalized: mI.hospitalized,
            hospitalized_declare: mI.hospitalized_declare,
            suffered: JSON.stringify(mI.suffered)
        }
    })
    const result = await db
                    .insertInto("medical_records")
                    .values(insertMRs)
                    .returningAll()
                    .execute();
    console.log(`Inserted ${insertMRs.length} medical records`);
    console.log(result);
            
}
async function requestMedicalRecordsInfo() {

    let query = db.selectFrom('medical_records');
    const result = await query.selectAll().execute();
  
    let showRes = result;
    if (showRes.length > 10) {
      showRes = showRes.filter((value, index) => index < 11);
    }
    console.log(showRes);
}

/** Dental_Records */
async function deleteDentalRecordsTable() {

    await db.schema
        .dropTable("dental_records")
        .ifExists()
        .execute();
    console.log('Drop dental_records table.');        
}
async function createDentalRecordsTable() {
    await db.schema
        .createTable("dental_records")
        .ifNotExists()
        .addColumn('pid', 'integer', (col) => col.primaryKey())
        .addForeignKeyConstraint('pid_foreign', ['pid'], 'patients', ['id'])
        .addColumn('tooth_diagram', sql`text[][]`, (col) => col.notNull())
        .addColumn('description', 'varchar')
        .execute();

    console.log(`Created "dental_records" table.`);
}
async function insertDentalRecordsData() {

    const insertDRs = patients.map((patient) => {
        const dI = patient.dentalRecords;
        return {
            pid: patient.id,
            tooth_diagram: dI.tooth_diagram,
            description: dI.description,
            
        }
    })
    const result = await db
                    .insertInto("dental_records")
                    .values(insertDRs)
                    .returningAll()
                    .execute();
    console.log(`Inserted ${insertDRs.length} Dental records`);
    console.log(result);
            
}
async function requestDentalRecordsInfo() {

    let query = db.selectFrom('dental_records');
    const result = await query.selectAll().execute();
  
    let showRes = result;
    if (showRes.length > 10) {
      showRes = showRes.filter((value, index) => index < 11);
    }
    console.log(showRes);
}

/** Treatment_Records */
async function deleteTreatmentRecordsTable() {

    await db.schema
        .dropTable("treatment_records")
        .ifExists()
        .execute();
    console.log('Drop treatment_records table.');        
}
/**
 * exam_date DATE NOT NULL, 
            diagnoses VARCHAR NOT NULL,
            treatments JSONB,
            amount INT NOT NULL,
            paid BOOLEAN NOT NULL,
            PRIMARY KEY (pid, exam_date)
 * 
 */
async function createTreatmentRecordsTable() {
    await db.schema
        .createTable("treatment_records")
        .ifNotExists()
        .addColumn('pid', 'integer')
        .addForeignKeyConstraint('pid_foreign', ['pid'], 'patients', ['id'])
        .addColumn('exam_date', 'date', (col) => col.notNull())
        .addPrimaryKeyConstraint('primary_key', ['pid', 'exam_date'])
        .addColumn('diagnoses', 'varchar')
        .addColumn('amount', 'integer', (col) => col.notNull())
        .addColumn('paid', 'boolean', (col) => col.notNull())
        .addColumn('treatments', 'jsonb')
        .execute();

    console.log(`Created "treatment_records" table.`);
}
async function insertTreatmentRecordsData() {

    const insertTRs:any = [];

    for (let patient of patients) {
        const records = patient.treatmentRecords;
        for (let record of records) {
            const treatmentR = {
                pid: patient.id,
                exam_date: record.exam_date,
                diagnoses: record.diagnoses,
                amount: record.amount,
                paid: record.paid,
                treatments: JSON.stringify(record.treatments)
            }
            insertTRs.push(treatmentR);
        }
    }

    const result = await db
                    .insertInto("treatment_records")
                    .values(insertTRs)
                    .returningAll()
                    .execute();
    console.log(`Inserted ${insertTRs.length} treatment records`);
    console.log(result);
            
}
async function requestTreatmentRecordsInfo() {

    let query = db.selectFrom('treatment_records');
    const result = await query.selectAll().execute();
  
    let showRes = result;
    if (showRes.length > 10) {
      showRes = showRes.filter((value, index) => index < 11);
    }
    console.log(showRes);
}

async function main() {
    console.log(`env: ${ENV}`);
    try {
        await deleteMedicalRecordsTable();
        await deleteDentalRecordsTable();
        await deleteTreatmentRecordsTable();

        await deletePatientsTable();
        await createPatientsTable();
        await insertPatientsData();
        await requestPatientsInfo();  

        
        await createMedicalRecordsTable();
        await insertMedicalRecordsData();
        await requestMedicalRecordsInfo();

        await createDentalRecordsTable();
        await insertDentalRecordsData();
        await requestDentalRecordsInfo();

        await createTreatmentRecordsTable();
        await insertTreatmentRecordsData();
        await requestTreatmentRecordsInfo();

    }catch(error) {
        console.error('Error with Database: ', error);
    }finally {
      db.destroy();
    }
  }
  

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});