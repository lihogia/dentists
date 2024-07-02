import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
// noStore() here to prevent the response from being cached.
// This is equivalent to in fetch(..., {cache: 'no-store'}).
import {
    PatientsTable,
    PatientForm, 
    MedicalRecordsDB,
    MedicalRecordsForm
} from './definition';
import { convertToMedicalRecordsForm } from '../utils';

export async function fetchPatients() {
    noStore();

    try {
        const patients = await sql<PatientsTable>`
            SELECT 
                p.id,
                p.first_name,
                p.middle_name,
                p.last_name,
                p.birth_year,
                p.gender,
                p.phone
            FROM patients as p
            ORDER BY p.last_name ASC
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
          p.first_name,
          p.middle_name,
          p.last_name,
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
      throw new Error('Failed to fetch patient.');
    }
  }
  
export async function fetchMedicalRecordsById(id: string) {
  noStore();
  try {
    const data = await sql<MedicalRecordsForm>`
      SELECT *
      FROM medical_info as m
      WHERE m.pid = ${id};
    `;

    const medicalList = data.rows;

    //return convertToMedicalRecordsForm(medicalList[0]);
    return medicalList[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch medical records.');
  }
}