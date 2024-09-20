import { db } from '@/src/app/lib/data/database';
import { unstable_noStore as noStore } from 'next/cache';
import { 
  formatCurrency, 
  formatDateToLocal, 
  formatDateObjToLocal, 
  checkAndConvertDate, 
  getNextDate, 
  MAX_ITEMS_PER_PAGE, 
  mergeToFullName } from '@/src/app/lib/utils';
import {
    PatientsTable,
    PatientForm,
    MedicalRecordsForm,
    DentalRecordsForm,
    TreatmentRecordsForm,
    Task,
    InvoicesTable
} from "@/src/app/lib/data/definition";

export async function fetchFilteredInvoicesPages(query: string) {
    noStore();

    const result = await db.treatmentRecord.findMany({
      relationLoadStrategy: 'join',
      where: {
        OR: [
          { amount: Number.isNaN(Number.parseInt(query)) ? 0 : Number.parseInt(query) },
          { 
            Patient: {
              OR: [
                { first_name: { contains: query } },
                { middle_name: { contains: query } },
                { last_name: { contains: query } },
              ]
            }  
          }
        ]
      },
    });
    const totalPages = Math.ceil(Number(result.length) / MAX_ITEMS_PER_PAGE);
    return totalPages;
}
  
export async function fetchFilteredInvoices(query: string, currentPage: number) {
    noStore();
  
    const offset = (currentPage - 1) * MAX_ITEMS_PER_PAGE;
    const result = await db.treatmentRecord.findMany({
      relationLoadStrategy: 'join',
      where: {
        OR: [
          { amount: Number.isNaN(Number.parseInt(query)) ? 0 : Number.parseInt(query) },
          { 
            Patient: {
              OR: [
                { first_name: { contains: query } },
                { middle_name: { contains: query } },
                { last_name: { contains: query } },
              ]
            }  
          }
        ]
      },
      skip: offset,
      take: MAX_ITEMS_PER_PAGE,  
      include: {
        Patient: true
      },
      orderBy: {
        exam_date: 'desc'
      }
    });

  //console.log(result);
  const invoices: any = result.map((invoice) => ({
    id: invoice.pid,
    name: invoice.Patient.fullname.toUpperCase(),
    exam_date: formatDateToLocal(invoice.examdate),
    amount: formatCurrency(invoice.amount == null ? 0 : invoice.amount),
    paid: invoice.paid
  }));
  
  return invoices;
 
}
    
  
export async function fetchFilteredPatientsPages(query: string) {
  noStore();

  const result = await db.patient.findMany({
    where: {
      OR: [
        { first_name: { contains: query } },
        { middle_name: { contains: query } },
        { last_name: { contains: query } },
        { gender: { contains: query } },
        { phone: { contains: query } },
        { birth_year: Number.isNaN(Number.parseInt(query)) ? 0 : Number.parseInt(query) }
      ],
    },
  });

  const totalPages = Math.ceil(Number(result.length) / MAX_ITEMS_PER_PAGE);
  return totalPages;
}

export async function fetchFilteredPatients(paraQuery: string, currentPage: number) {
  const query = paraQuery.toLowerCase();
  noStore();

  const offset = (currentPage - 1) * MAX_ITEMS_PER_PAGE;
  
  const patients: any = await db.patient.findMany({
    select: {
      id: true,
      first_name: true,
      middle_name: true,
      last_name: true,
      birth_year: true,
      gender: true,
      phone: true
    },
    skip: offset,
    take: MAX_ITEMS_PER_PAGE,
    where: {
      OR: [
        { first_name: { contains: query } },
        { middle_name: { contains: query } },
        { last_name: { contains: query } },
        { gender: { contains: query } },
        { phone: { contains: query } },
        { birth_year: Number.isNaN(Number.parseInt(query)) ? 0 : Number.parseInt(query) }
      ],
    },
    orderBy: {
        last_name: 'asc'
    },
  });

  return patients;
}

export async function fetchPatientById(id: string) {
  noStore();

  const patient: any = await db.patient.findUnique({
    select: {
      id: true,
      fullname: true,
      birth_year: true,
      gender: true,
      address: true,
      phone: true
    },
    where: {
      id: Number.parseInt(id)
    }
  });
    
  return patient;
}


export async function fetchPatientFullname(id: string) {
  noStore();

  const result = await db.patient.findUnique({
    select: {
      fullname: true
    },
    where: {
      id: Number.parseInt(id)
    }
  });

  return result.fullname;
}

export async function fetchMedicalRecordsById(id: string) {
  noStore();

  const mRecord = await db.medicalRecord.findUnique({
    relationLoadStrategy: 'join',
    include: {
      Patient: {
        select: {
          fullname: true
        }
      }
    },
    where: {
      pid: Number.parseInt(id)
    }
  });
  
  let foundMedicalItem;

  if (mRecord == undefined) {
    const name = (await fetchPatientFullname(id)).toUpperCase();

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
    foundMedicalItem = {
      pid: mRecord.pid,
      height: mRecord.height,
      weight: mRecord.weight,
      blood_pressure_sys: mRecord.blood_pressure_sys,
      blood_pressure_dia: mRecord.blood_pressure_dia,
      pulse: mRecord.pulse,
      hospitalized: mRecord.hospitalized,
      hospitalized_declare: mRecord.hospitalized_declare,
      suffered: mRecord.suffered,
      fullname: mRecord.Patient.fullname.toUpperCase()
    }
  }

  return foundMedicalItem;
}

export async function fetchDentalRecordsById(id: string) {
  noStore();

  const dentalRecord = await db.dentalRecord.findUnique({
    relationLoadStrategy: 'join',
    include: {
      Patient: {
        select: {
          fullname: true
        }
      }
    },
    where: {
      pid: Number.parseInt(id)
    }
  });

  let foundDentalItem;
  if (dentalRecord == undefined) {
      const name = await fetchPatientFullname(id);

      foundDentalItem = {
        pid: id,
        tooth_diagram: {
          upper_left: ["good", "good", "good", "good", "good", "good", "good", "good",],
          upper_right: ["good", "good", "good", "good", "good", "good", "good", "good",],
          lower_left: ["good", "good", "good", "good", "good", "good", "good", "good",],
          lower_right: ["good", "good", "good", "good", "good", "good", "good", "good",],
        },
        description: "",
        isCreated: true,
        fullname: name.toUpperCase()
      }
    }else {
      foundDentalItem = {
        pid: dentalRecord.pid,
        tooth_diagram: dentalRecord.tooth_diagram,
        description: dentalRecord.description,
        isCreated: false,
        fullname: dentalRecord.Patient.fullname.toUpperCase()
      }
    }  
    return foundDentalItem;

}

export async function getEmptyTreatmentRecordById(id: string) {
  noStore();

  const patientName = await fetchPatientFullname(id);
  //const fName = `${patientName}`.toUpperCase();
  const today = new Date();
  const [iD, dateString] = checkAndConvertDate(formatDateObjToLocal(today, 'vi-VN'), false);

  const foundTreatmentRecord: TreatmentRecordsForm = {
    pid: id,
    fullname: patientName.toUpperCase(),
    examdate: dateString,
    diagnose: '',
    treatment: '',
    amount: 0,
    paid: false,
    isCreated: true
  };

  return foundTreatmentRecord;
  
}
/*
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
*/

export async function fetchTreatmentRecordsById(id: string) {
  noStore();

  const treatmentRecords = await db.treatmentRecord.findMany({
    relationLoadStrategy: 'join',
    select: {
      Patient: {
        select: {
          fullname: true
        }
      },
      exam_date: true,
      examdate: true,
      pid: true,
      diagnose: true,
      treatment: true,
      amount: true,
      paid: true,
      isCreated: true
    },
    where: {
      pid: Number.parseInt(id)
    },
    orderBy: {
      exam_date: "asc"
    }
  });

  const emptyTreatmentRecord: TreatmentRecordsForm = await getEmptyTreatmentRecordById(id);
  let foundTreatmentRecords: TreatmentRecordsForm[] = [];

  if (treatmentRecords != undefined && treatmentRecords.length > 0) {    
    //console.log(treatmentRecords);
    foundTreatmentRecords = treatmentRecords.map(record => {
      return {
        fullname: record.Patient.fullname.toUpperCase(),
        pid: record.pid,
        examdate: record.examdate,
        diagnose: record.diagnose,
        treatment: record.treatment,
        amount: record.amount,
        paid: record.paid,
        isCreated: false
      }
    });
    //foundTreatmentRecords.push(emptyTreatmentRecord);
  }
  foundTreatmentRecords.push(emptyTreatmentRecord);

  return foundTreatmentRecords;

}

export async function isExistedMedicalRecord(id: string) {
  noStore();
  let foundItem: boolean = false;

  const result = await db.medicalRecord.findUnique({
    where: {
      pid: Number.parseInt(id)
    }
  });

  foundItem = (result != null);

  return foundItem;
}  

export async function isExistedDentalRecord(id: string) {
  noStore();

  let foundItem: boolean = false;
  const result = await db.dentalRecord.findUnique({
    where: {
      pid: Number.parseInt(id)
    }
  });
  
  foundItem = (result != null);
  return foundItem;
} 

export async function isExistedTreatmentRecord(id: string) {
  noStore();

  let foundItem: boolean = false;
  const result = await db.treatmentRecord.findFirst({
    where: {
      pid: Number.parseInt(id)
    }
  });
                  
  foundItem = (result != null);
  return foundItem;
}