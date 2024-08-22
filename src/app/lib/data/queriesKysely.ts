import { db } from '@/src/app/lib/data/database';
import { sql } from 'kysely';
import { unstable_noStore as noStore } from 'next/cache';

import {
    PatientsTable,
    PatientForm,
    MedicalRecordsForm,
    DentalRecordsForm,
    TreatmentRecordsForm,
    Task,
    InvoicesTable
} from "@/src/app/lib/data/definition";

import { formatCurrency, formatDateToLocal, formatDateObjToLocal, checkAndConvertDate, getNextDate, MAX_ITEMS_PER_PAGE } from '@/src/app/lib/utils';

export async function fetchFilteredInvoicesPages(query: string) {
    noStore();
  
    const count = await db.selectFrom("treatment_records as t")
                    .fullJoin("patients as p", "p.id", "t.pid")
                    .select(({fn, val, ref}) => [
                      fn.count<number>('t.pid').as('number')])
                    .where((eb) => eb.or([
                      eb("p.first_name", 'ilike', `%${query}%`),
                      eb("p.middle_name", 'ilike', `%${query}%`),
                      eb("p.last_name", 'ilike', `%${query}%`),
                      eb(sql<string>`t.amount::text`, 'ilike', `%${query}%`)
                      ]))
                    .execute();
    
    const totalPages = Math.ceil(Number(count[0].number) / MAX_ITEMS_PER_PAGE);
    return totalPages;
}
  
export async function fetchFilteredInvoices(query: string, currentPage: number) {
    noStore();
  
    const offset = (currentPage - 1) * MAX_ITEMS_PER_PAGE;
    const data = await db.selectFrom("treatment_records as t")
                  .fullJoin("patients as p", "p.id", "t.pid")
                  .select(({fn, val, ref}) => [
                    "t.pid as id",
                    sql<string>`to_char(t.exam_date, 'YYYY-MM-DD')`.as("exam_date"),
                    "t.amount",
                    sql<string>`concat(
                      ${ref('first_name')},
                      ' ',
                      ${ref('middle_name')},
                      ' ',
                      ${ref('last_name')}
                    )`.as("name"),
                    "t.paid"
                  ])
                  .where((eb) => eb.or([
                    eb("p.first_name", 'ilike', `%${query}%`),
                    eb("p.middle_name", 'ilike', `%${query}%`),
                    eb("p.last_name", 'ilike', `%${query}%`),
                    eb(sql<string>`t.amount::text`, 'ilike', `%${query}%`)
                    ]))
                  .orderBy("t.exam_date desc")
                  .limit(MAX_ITEMS_PER_PAGE)
                  .offset(offset)
                  .execute();

    const invoices: any = data.map((invoice) => ({
      id: invoice.id,
      name: invoice.name.toUpperCase(),
      exam_date: formatDateToLocal(invoice.exam_date),
      amount: formatCurrency(invoice.amount == null ? 0 : invoice.amount),
      paid: invoice.paid
    }));
    
    return invoices;
}
  
export async function fetchFilteredPatientsPages(query: string) {
  noStore();

  const count = await db.selectFrom("patients as p")
                        .select(({fn, val, ref}) => [
                          fn.count<number>('p.id').as('total')])
                        .where((eb) => eb.or([
                          eb("p.first_name", 'ilike', `%${query}%`),
                          eb("p.middle_name", 'ilike', `%${query}%`),
                          eb("p.last_name", 'ilike', `%${query}%`),
                          eb(sql<string>`p.birth_year::text`, 'ilike', `%${query}%`),
                          eb("p.gender", 'ilike', `%${query}%`),
                          eb("p.phone", 'ilike', `%${query}%`),
                          ]))
                        .execute();

  const totalPages = Math.ceil(Number(count[0].total) / MAX_ITEMS_PER_PAGE);
  return totalPages;

}

export async function fetchFilteredPatients(query: string, currentPage: number) {
  noStore();

  const offset = (currentPage - 1) * MAX_ITEMS_PER_PAGE;
  
    const patients: any = await db.selectFrom("patients as p")
                  .select([
                    "p.id",
                    "p.first_name",
                    "p.middle_name",
                    "p.last_name",
                    "p.birth_year",
                    "p.gender",
                    "p.phone"
                  ])
                  .where((eb) => eb.or([
                      eb("p.first_name", 'ilike', `%${query}%`),
                      eb("p.middle_name", 'ilike', `%${query}%`),
                      eb("p.last_name", 'ilike', `%${query}%`),
                      eb(sql<string>`p.birth_year::text`, 'ilike', `%${query}%`),
                      eb("p.gender", 'ilike', `%${query}%`),
                      eb("p.phone", 'ilike', `%${query}%`),
                    ]))
                  .orderBy("p.last_name asc")
                  .limit(MAX_ITEMS_PER_PAGE)
                  .offset(offset)
                  .execute();
    
    return patients;
}

export async function fetchPatientById(id: string) {
  noStore();

  const patient: any = await db.selectFrom("patients")
                          .select([
                            "id",
                            "first_name",
                            "middle_name",
                            "last_name",
                            "birth_year",
                            "gender",
                            "address",
                            "phone"
                            ])
                          .where("id", "=", Number.parseInt(id))
                          .executeTakeFirst();
  return patient;
}

export async function fetchPatientFullname(id: string) {
  noStore();

  const patient: any = await db.selectFrom("patients as p")
                          .select(({fn, val, ref}) => [
                              sql<string>`concat(
                                ${ref('first_name')},
                                ' ',
                                ${ref('middle_name')},
                                ' ',
                                ${ref('last_name')}
                              )`.as("fullname")
                            ])
                          .where("p.id", "=", Number.parseInt(id))
                          .executeTakeFirst();
  return patient.fullname.toUpperCase();
}

export async function fetchMedicalRecordsById(id: string) {
  noStore();

  const mlist = await db.selectFrom("medical_records as m")
                        .fullJoin("patients as p", "p.id", "m.pid")
                        .select(({fn, val, ref}) => [
                          sql<string>`concat(
                                ${ref('first_name')},
                                ' ',
                                ${ref('middle_name')},
                                ' ',
                                ${ref('last_name')}
                              )`.as("fullname")
                          ])
                        .selectAll("m")
                        .where("m.pid", "=", Number.parseInt(id))
                        .where("p.id", "=", Number.parseInt(id))
                        .execute();

    let foundMedicalItem;

    if (mlist.length == 0) {
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
      mlist[0].fullname = mlist[0].fullname.toUpperCase();
      foundMedicalItem = mlist[0];
    }

    return foundMedicalItem;
}

export async function fetchDentalRecordsById(id: string) {
  noStore();

  const dlist = await db.selectFrom("dental_records as d")
                        .fullJoin("patients as p", "p.id", "d.pid")
                        .select(({fn, val, ref}) => [
                          sql<string>`concat(
                                ${ref('first_name')},
                                ' ',
                                ${ref('middle_name')},
                                ' ',
                                ${ref('last_name')}
                              )`.as("fullname"),
                          val(false).as("isCreated")
                          ])
                        .selectAll("d")
                        .where("d.pid", "=", Number.parseInt(id))
                        .where("p.id", "=", Number.parseInt(id))
                        .execute();

  let foundDentalItem;
  if (dlist.length == 0) {
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
      dlist[0].fullname = dlist[0].fullname.toUpperCase();
      foundDentalItem = dlist[0];
    }  
    return foundDentalItem;

}

export async function getEmptyTreatmentRecordsById(id: string) {
  noStore();

  const patientName = await fetchPatientFullname(id);
  const today = new Date();
  const [iD, dateString] = checkAndConvertDate(formatDateObjToLocal(today, 'vi-VN'), false);
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
/*  
  try {
    const data = await sql`
    SELECT concat(p.first_name, ' ' , p.middle_name, ' ', p.last_name) as fullname
    FROM patients as p
    WHERE p.id = ${id}
  `;

  const patientName = data.rows[0].fullname.toUpperCase();
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

  */
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

  const emptyItem: TreatmentRecordsForm = await getEmptyTreatmentRecordsById(id);
  const treatmentRecordsList: any = await db.selectFrom("treatment_records as t")
                                      .fullJoin("patients as p", "p.id", "t.pid")
                                      .select(({fn, val, ref}) => [
                                        val(emptyItem.fullname).as("fullname"),
                                        sql<string>`to_char(t.exam_date, 'YYYY-MM-DD')`.as("exam_date"),
                                        "t.pid", 
                                        "t.diagnoses",
                                        "t.treatments",
                                        "t.amount",
                                        "t.paid",
                                        val(false).as("isCreated")
                                        ])
                                      .where("t.pid", "=", Number.parseInt(id))
                                      .where("p.id", "=", Number.parseInt(id))
                                      .orderBy("t.exam_date asc")
                                      .execute();
  let foundTreatmentRecords: TreatmentRecordsForm[];
    
  if (treatmentRecordsList.length == 0) {
    foundTreatmentRecords = [emptyItem];
  }else {
    foundTreatmentRecords = createListOfTreatmenRecords(treatmentRecordsList, emptyItem);
  }
  return foundTreatmentRecords;

}

export async function isExistedMedicalRecord(id: string) {
  noStore();
  let foundItem: boolean = false;

  const result = await db
                  .selectFrom("medical_records")
                  .selectAll()
                  .where("pid", "=", Number.parseInt(id))
                  .execute();
  foundItem = result.length > 0;

/*  
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
*/
  return foundItem;
}  

export async function isExistedDentalRecord(id: string) {
  noStore();
  let foundItem: boolean = false;
  const result = await db
                  .selectFrom("dental_records")
                  .selectAll()
                  .where("pid", "=", Number.parseInt(id))
                  .execute();
  foundItem = result.length > 0;

  /*
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
    */
  return foundItem;
} 

export async function isExistedTreatmentRecord(id: string) {
  noStore();

  let foundItem: boolean = false;
  const result = await db
                  .selectFrom("treatment_records")
                  .selectAll()
                  .where("pid", "=", Number.parseInt(id))
                  .execute();
  foundItem = result.length > 0;

  /*
  try {
    const data = await sql`
      SELECT * 
      FROM treatment_records
      WHERE pid = ${id}
    `;
    foundItem = data.rows.length > 0 ? true : false;

  }catch (error) {
    console.error('Database Error:', error);
  }*/
  return foundItem;
}
