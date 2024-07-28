import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
// noStore() here to prevent the response from being cached.
// This is equivalent to in fetch(..., {cache: 'no-store'}).
import {
    PatientsTable,
    PatientForm,
    MedicalRecordsForm,
    DentalRecordsForm,
    TreatmentRecordsForm,
    Task,
    InvoicesTable
} from "@/app/lib/data/definition";

import { formatCurrency, formatDateToLocal, formatDateObjToLocal, checkAndConvertDate, getNextDate, MAX_ITEMS_PER_PAGE } from '@/app/lib/utils';

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

export async function fetchFilteredPatientsPages(query: string) {
  noStore();

  try {
    const count = await sql`
      SELECT COUNT(*)
      FROM patients as p
      WHERE
        p.first_name ILIKE ${`%${query}%`} OR 
        p.middle_name ILIKE ${`%${query}%`} OR 
        p.last_name ILIKE ${`%${query}%`} OR 
        p.birth_year::text ILIKE ${`%${query}%`} OR
        p.gender ILIKE ${`%${query}%`} OR 
        p.phone ILIKE ${`%${query}%`}
    `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / MAX_ITEMS_PER_PAGE);
    return totalPages;

  }catch (error) {
    console.error('Database Error: ', error);
    throw new Error('Failed to fetch patients.');
  }
}

export async function fetchFilteredPatients(query: string, currentPage: number) {
  noStore();

  const offset = (currentPage - 1) * MAX_ITEMS_PER_PAGE;
  
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
      WHERE 
        p.first_name ILIKE ${`%${query}%`} OR 
        p.middle_name ILIKE ${`%${query}%`} OR 
        p.last_name ILIKE ${`%${query}%`} OR 
        p.birth_year::text ILIKE ${`%${query}%`} OR
        p.gender ILIKE ${`%${query}%`} OR 
        p.phone ILIKE ${`%${query}%`}
      ORDER BY p.last_name ASC
      LIMIT ${MAX_ITEMS_PER_PAGE} OFFSET ${offset}
      `;   

    return patients.rows;

  }catch (error) {
    console.error('Database Error: ', error);
    throw new Error('Failed to fetch patients.');
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

export async function fetchPatientFullname(id: string) {
  noStore();
  try {
    const data = await sql`
      SELECT
        concat(p.first_name, ' ' , p.middle_name, ' ', p.last_name) as fullname
      FROM patients as p
      WHERE p.id = ${id};
    `;

    const patient = data.rows[0];
    return patient.fullname;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch patient.');
  }
}

export async function isExistedMedicalRecord(id: string) {
  noStore();
  let foundItem: boolean = false;

  try {
    const data = await sql`
      SELECT * 
      FROM medical_records
      WHERE pid = ${id}
    `;
    foundItem = data.rows.length > 0 ? true : false;

  }catch (error) {
    console.error('Database Error:', error);
  }
  return foundItem;
}  
  
export async function fetchMedicalRecordsById(id: string) {
  noStore();
  try {
    const data = await sql<MedicalRecordsForm>`
      SELECT concat(p.first_name, ' ' , p.middle_name, ' ', p.last_name) as fullname, m.*
      FROM medical_records as m, patients as p
      WHERE m.pid = ${id} AND p.id = ${id}
    `;

    const medicalList = data.rows;
    let foundMedicalItem;

    if (medicalList.length == 0) {
      const name = fetchPatientFullname(id);

      foundMedicalItem = {
        pid: id,
        fullname: name,
        height: 0,
        weight: 0,
        blood_pressure_sys: 0,
        blood_pressure_dia:0,
        pulse: 0,
        hospitalized: false,
        hospitalized_declare: '',
        suffered: {
          high_blood: false,
          ischemic_heart: false,
          diabetes: false,
          bleeding_disorders: false,
          allergies: false,
          asthma: false,
          epileptic: false,
          hepatitisB: false,
          pregnancy: false,
          other_diseases: false,
          other_declare: ''
        }
      }
    }else {
      foundMedicalItem = medicalList[0];
    }

    //return convertToMedicalRecordsForm(medicalList[0]);
    //console.log(foundMedicalItem.fullname);
    
    return foundMedicalItem;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch medical records.');
  }
}

export async function isExistedDentalRecord(id: string) {
  noStore();
  let foundItem: boolean = false;

  try {
    const data = await sql`
      SELECT * 
      FROM dental_records
      WHERE pid = ${id}
    `;
    foundItem = data.rows.length > 0 ? true : false;

  }catch (error) {
    console.error('Database Error:', error);
  }
  return foundItem;
} 

export async function fetchDentalRecordsById(id: string) {
  noStore();
  try {
    const data = await sql<DentalRecordsForm>`
      SELECT concat(p.first_name, ' ' , p.middle_name, ' ', p.last_name) as fullname, d.*, false as isCreated
      FROM dental_records as d, patients as p
      WHERE d.pid = ${id} AND p.id = ${id}
    `;

    const dentalList = data.rows;
    let foundDentalItem;

    if (dentalList.length == 0) {
      const name = fetchPatientFullname(id);

      foundDentalItem = {
        pid: id,
        tooth_diagram: [
          ["good", "good", "good", "good", "good", "good", "good", "good",],
          ["good", "good", "good", "good", "good", "good", "good", "good",],
          ["good", "good", "good", "good", "good", "good", "good", "good",],
          ["good", "good", "good", "good", "good", "good", "good", "good",],
        ],
        description: "",
        isCreated: true,
        fullname: name
      }
    }else {
      foundDentalItem = dentalList[0];
    }  
    return foundDentalItem;

  }catch(error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch dental records.');
  }
}

export async function isExistedTreatmentRecord(id: string) {
  noStore();
  let foundItem: boolean = false;

  try {
    const data = await sql`
      SELECT * 
      FROM treatment_records
      WHERE pid = ${id}
    `;
    foundItem = data.rows.length > 0 ? true : false;

  }catch (error) {
    console.error('Database Error:', error);
  }
  return foundItem;
} 

export async function getEmptyTreatmentRecordsById(id: string) {
  noStore();
  try {
    const data = await sql`
    SELECT concat(p.first_name, ' ' , p.middle_name, ' ', p.last_name) as fullname
    FROM patients as p
    WHERE p.id = ${id}
  `;

  const patientName = data.rows[0].fullname;
  const today = new Date();
  
  const [iD, dateString] = checkAndConvertDate(formatDateObjToLocal(today, 'vi-VN'), false);

    //console.log(`today: ${dateString},today: ${today.toISOString()}, today 2: ${today.toLocaleDateString('vi-VN')}`);
  
  const aNewTask: Task = {
    cure: '',
    cure_date: dateString,
    status: false
  };

  const foundTreatmentRecords: TreatmentRecordsForm[] = [{
    pid: id,
    fullname: patientName,
    exam_date: dateString,
    diagnoses: '',
    treatments: [aNewTask],
    amount: 0,
    paid: false,
    isCreated: true
  }];

  return foundTreatmentRecords[0];

  }catch(error) {
    console.error('Database Error: ', error);
    throw new Error('Failed to fetch treatment records.');
  }
}

function createListOfTreatmenRecords(listOfRecords: TreatmentRecordsForm[], emptyRecord: TreatmentRecordsForm) {
  const dateToCheck = emptyRecord.exam_date;
  const arrExamDate: string[] = listOfRecords.map((record) => {
    //console.log(`-${record.exam_date}`);
    return record.exam_date;
  });

  if (arrExamDate.includes(dateToCheck)) { // create a new 
    const newDateStr: string = getNextDate(dateToCheck);

    const newTreatments = [...emptyRecord.treatments];
    newTreatments[0].cure_date = newDateStr;

    const newEmptyRecord: TreatmentRecordsForm = {
      ...emptyRecord,
      exam_date: newDateStr,
      treatments: newTreatments
    }
    return createListOfTreatmenRecords(listOfRecords, newEmptyRecord);
  }else {
    return [...listOfRecords, emptyRecord];
  }
}

export async function fetchTreatmentRecordsById(id: string) {
  noStore();

  try {
    const emptyItem: TreatmentRecordsForm = await getEmptyTreatmentRecordsById(id);

    const data = await sql<TreatmentRecordsForm>`
      SELECT ${emptyItem.fullname} as fullname, 
        to_char(t.exam_date, 'YYYY-MM-DD') as exam_date,
        t.pid, t.diagnoses, t.treatments, t.amount, t.paid, false as isCreated
      FROM treatment_records as t, patients as p
      WHERE t.pid = ${id} AND p.id = ${id}
      ORDER BY t.exam_date asc
    `;

    const treatmentRecordsList = data.rows;
    let foundTreatmentRecords: TreatmentRecordsForm[];
    
    if (treatmentRecordsList.length == 0) {
      foundTreatmentRecords = [emptyItem];
    }else {
      foundTreatmentRecords = createListOfTreatmenRecords(treatmentRecordsList, emptyItem);
    }
    return foundTreatmentRecords;

  }catch(error) {
    console.error('Database Error: ', error);
    throw new Error('Failed to fetch treatment records.');
  }
}

export async function fetchInvoices() {
  noStore();
  try {
    const data = await sql`
      SELECT t.pid, to_char(t.exam_date, 'YYYY-MM-DD') as exam_date, t.amount, concat(p.first_name, ' ' , p.middle_name, ' ', p.last_name) as fullname, t.paid
      FROM treatment_records as t
      JOIN patients as p ON p.id = t.pid
      ORDER BY t.exam_date DESC
    `;
    const invoices = data.rows.map((invoice) => ({
      exam_date: formatDateToLocal(invoice.exam_date),
      id: invoice.pid,
      name: invoice.fullname,
      amount: formatCurrency(invoice.amount),
      paid: invoice.paid
    }));
    return invoices;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchFilteredInvoicesPages(query: string) {
  noStore();

  try {
    const count = await sql`
      SELECT COUNT(*)
      FROM treatment_records as t
      JOIN patients as p ON p.id = t.pid
      WHERE 
          p.first_name ILIKE ${`%${query}%`} OR 
          p.middle_name ILIKE ${`%${query}%`} OR 
          p.last_name ILIKE ${`%${query}%`} OR 
          t.amount::text ILIKE ${`%${query}%`}
    `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / MAX_ITEMS_PER_PAGE);
    return totalPages;

  }catch (error) {
    console.error('Database Error: ', error);
    throw new Error('Failed to fetch invoices.');
  }

}

export async function fetchFilteredInvoices(query: string, currentPage: number) {
  noStore();

  const offset = (currentPage - 1) * MAX_ITEMS_PER_PAGE;
  
  try {
    const data = await sql`
      SELECT t.pid as id, to_char(t.exam_date, 'YYYY-MM-DD') as exam_date, t.amount, concat(p.first_name, ' ' , p.middle_name, ' ', p.last_name) as name, t.paid
      FROM treatment_records as t
      JOIN patients as p ON p.id = t.pid
      WHERE 
          p.first_name ILIKE ${`%${query}%`} OR 
          p.middle_name ILIKE ${`%${query}%`} OR 
          p.last_name ILIKE ${`%${query}%`} OR 
          t.amount::text ILIKE ${`%${query}%`} 
      ORDER BY t.exam_date DESC
      LIMIT ${MAX_ITEMS_PER_PAGE} OFFSET ${offset}
      `;   

    const invoices = data.rows.map((invoice) => ({
      exam_date: formatDateToLocal(invoice.exam_date),
      id: invoice.id,
      name: invoice.name,
      amount: formatCurrency(invoice.amount),
      paid: invoice.paid
    }));
    return invoices;

  }catch (error) {
    console.error('Database Error: ', error);
    throw new Error('Failed to fetch invoices.');
  }

}
