const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const { users, patients } = require('../app/lib/data/placeholderData.js');
const { separateFullName, toTitleCase } = require('../app/lib/utils-module.js');
 
async function createUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
        `;
        console.log(`Created "users" table`);
      
        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return client.sql`
            INSERT INTO users (name, email, password)
            VALUES (${user.name}, ${user.email}, ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
            `;
            }),
        );
    
        console.log(`Seeded ${insertedUsers.length} users`);
    
        return {
            createTable,
            users: insertedUsers,
        };        

    } catch(error) {
        console.error('Error with Database interaction:', error);
        throw error;
    }
}

async function createPatients(client) {
    try {
        // drop table patients;
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS patients (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          first_name VARCHAR(100) NOT NULL,
          middle_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(100) NOT NULL,
          birth_year INT NOT NULL,
          gender VARCHAR(255) NOT NULL,
          address VARCHAR(255) NOT NULL,
          phone VARCHAR(255) NOT NULL
        );
        `;
        console.log(`Created "patients" table`);

        // Insert data into the "patients" table
        const insertedPatients = await Promise.all(
            patients.map(
                (patient) => {
                    const nNames = separateFullName(patient.name);
                    console.log(nNames);
                    return client.sql`
                        INSERT INTO patients (id, first_name, middle_name, last_name, birth_year, gender, address, phone)
                        VALUES (${patient.id}, ${nNames[0]}, ${nNames[1]}, ${nNames[2]}, ${patient.birth_year}, ${patient.gender}, ${patient.address}, ${patient.phone});
                    `
                }
            ),
        );
        console.log(`Seeded ${insertedPatients.length} patients`);

        return {
            createTable,
            users: insertedPatients,
        };

    }catch (error) {
        console.error('Error with Database: ', error);
        throw error;
    }
}

async function createMedicalRecords(client) {
    try {
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS medical_records (
            pid UUID PRIMARY KEY,
            height NUMERIC(3, 1) NOT NULL,
            weight INT NOT NULL,
            blood_pressure_sys INT NOT NULL,
            blood_pressure_dia INT NOT NULL,
            pulse INT NOT NULL,
            hospitalized BOOLEAN NOT NULL,
            hospitalized_declare VARCHAR(255),
            suffered JSON NOT NULL
        );
        `;
        console.log(`Created "medical_records" table`);

        // Insert data into the "medical_records" table
        const insertedMedicalInfo = await Promise.all(
            patients.map(
                (patient) => client.sql`
                INSERT INTO medical_records (pid, height, weight, blood_pressure_sys, blood_pressure_dia, pulse, hospitalized, hospitalized_declare, suffered)
                VALUES (${patient.id}, ${patient.medicalInfo.height}, ${patient.medicalInfo.weight}, ${patient.medicalInfo.blood_pressure_sys}, 
                    ${patient.medicalInfo.blood_pressure_dia}, ${patient.medicalInfo.pulse}, ${patient.medicalInfo.hospitalized}, 
                    ${patient.medicalInfo.hospitalized_declare}, ${patient.medicalInfo.suffered});
            `,
            ),
        );
        console.log(`Seeded ${insertedMedicalInfo.length} patients`);

        return {
            createTable,
            users: insertedMedicalInfo,
        };

    }catch(error) {
        console.error('Error with Database: ', error);
        throw error;
    }
}

async function createDentalRecords(client) {
    try {
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS dental_records (
            pid UUID PRIMARY KEY,
            tooth_diagram text[][],
            description VARCHAR(255)
        );
        `;
        console.log(`Created "dental_records" table`);

        // Insert data into the "dental_records" table
        const insertedDentalRecords = await Promise.all(
            patients.map(
                (patient) => client.sql`
                INSERT INTO dental_records (pid, tooth_diagram, description)
                VALUES (${patient.id}, ${patient.dentalRecords.tooth_diagram}, ${patient.dentalRecords.description})
                `,
            ),
        );
        console.log(`Seeded ${insertedDentalRecords.length} patients`);

        return {
            createTable,
            info: insertedDentalRecords,
        };
    }catch (error) {
        console.error('Error with Database: ', error);
        throw error;
    }
}

function test() {
    const nNames = separateFullName("Tran Tue Lam");
    console.log(nNames);
    const [firstname, middlename, lastname] = [nNames[0], nNames[1], nNames[2]];    
}

function test1() {
    const strs = ['TRAN'];
    const strss = strs.filter((str) => str != '');
    console.log(toTitleCase(strss.join('')));
    console.log(toTitleCase("HONG gia lINH"));
}

async function main1() {
    //test();
    //test1();
}

async function main() {
    const client = await db.connect();
    
    //await createUsers(client);
    //await createPatients(client);
    //await createMedicalRecords(client);
    await createDentalRecords(client);
  
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });
  