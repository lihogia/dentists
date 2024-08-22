import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable,
  } from 'kysely';
import internal from 'stream';

export interface Database {
    patients: PatientsTable,
    medical_records: MedicalRecordsTable,
    dental_records: DentalRecordsTable,
    treatment_records: TreatmentRecordsTable
}

/*
id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,          
first_name VARCHAR(100) NOT NULL,
middle_name VARCHAR(255) NOT NULL,
last_name VARCHAR(100) NOT NULL,
birth_year INT NOT NULL,
gender VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
phone VARCHAR(255) NOT NULL
*/
export interface PatientsTable {
    id: Generated<number>
    first_name: string
    middle_name: string
    last_name: string
    birth_year: number
    gender: string//'male' | 'female'
    phone: string | null
    address: string | null
}
export type Patients = Selectable<PatientsTable>
export type NewPatient = Insertable<PatientsTable>
export type PatientUpdate = Updateable<PatientsTable>

/*
        CREATE TABLE IF NOT EXISTS medical_records (
            pid INT PRIMARY KEY,
            height NUMERIC(3, 1) NOT NULL,
            weight INT NOT NULL,
            blood_pressure_sys INT NOT NULL,
            blood_pressure_dia INT NOT NULL,
            pulse INT NOT NULL,
            hospitalized BOOLEAN NOT NULL,
            hospitalized_declare VARCHAR(255),
            suffered JSON NOT NULL

            high_blood: boolean; // 1
    ischemic_heart: boolean; // 2
    diabetes: boolean; // 3
    bleeding_disorders: boolean; // 4
    allergies: boolean; // both medication, food . 5
    asthma: boolean; // 6
    epileptic: boolean; // 7
    hepatitisB: boolean; // 8
    pregnancy: boolean; // 9
    other_diseases: boolean; // 10
    other_declare: string;
*/
export interface MedicalRecordsTable {
    pid: number
    height: number
    weight: number
    blood_pressure_sys: number
    blood_pressure_dia: number
    pulse: number
    hospitalized: boolean
    hospitalized_declare: string | null
    suffered: JSONColumnType<{
        high_blood: boolean
        ischemic_heart: boolean
        diabetes: boolean
        bleeding_disorders: boolean
        allergies: boolean
        asthma: boolean
        epileptic: boolean
        hepatitisB: boolean
        pregnancy: boolean
        other_diseases: boolean
        other_declare: string
      }>
}
export type MedicalRecords = Selectable<MedicalRecordsTable>
export type NewMedicalRecord = Insertable<MedicalRecordsTable>
export type MedicalRecordUpdate = Updateable<MedicalRecordsTable>

/*
    pid INT PRIMARY KEY,
    tooth_diagram text[][],
    description VARCHAR(255)
*/
export interface DentalRecordsTable {
    pid: number
    tooth_diagram: string[][]
    description: string
}
export type DentalRecords = Selectable<DentalRecordsTable>
export type NewDentalRecord = Insertable<DentalRecordsTable>
export type DentalRecordUpdate = Updateable<DentalRecordsTable>

/*
    pid INT NOT NULL,
    exam_date DATE NOT NULL, 
    diagnoses VARCHAR NOT NULL,
    treatments JSONB,
    amount INT NOT NULL,
    paid BOOLEAN NOT NULL,
    PRIMARY KEY (pid, exam_date)    
*/
export interface TreatmentRecordsTable {
    pid: number
    exam_date: Date
    diagnoses: string
    amount: number
    paid: boolean
    treatments: JSONColumnType<[{
        cure: string
        cure_date: string
        status: boolean
      }]>
}
export type TreatmentRecords = Selectable<TreatmentRecordsTable>
export type NewTreatmentRecord = Insertable<TreatmentRecordsTable>
export type TreatmentRecordUpdate = Updateable<TreatmentRecordsTable>