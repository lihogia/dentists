import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
// noStore() here to prevent the response from being cached.
// This is equivalent to in fetch(..., {cache: 'no-store'}).
import {
    PatientsTable,
    PatientForm
} from './definition';

export async function fetchPatients() {
    noStore();

    try {
        const patients = await sql<PatientsTable>`
            SELECT 
                p.id,
                p.name,
                p.birth_year,
                p.gender,
                p.phone
            FROM patients as p
            ORDER BY p.name ASC
        `;   

        return patients.rows;
    } catch(error) {
        console.error('Database Error: ', error);
        throw new Error('Failed to fetch Patients.')
    }
}

export async function fetchPatientById(id: string) {
    noStore();
    try {
      const data = await sql<PatientForm>`
        SELECT
          p.id,
          p.name,
          p.birth_year,
          p.gender,
          p.address,
          p.phone
        FROM patients as p
        WHERE p.id = ${id};
      `;
  
      const patients = data.rows;
      //console.log('query');
      //console.log(patients);
      return patients[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoice.');
    }
  }
  