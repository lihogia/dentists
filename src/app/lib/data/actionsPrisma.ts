'use server';

import { z } from 'zod';
import { db } from '@/src/app/lib/data/database';
import { revalidatePath } from 'next/cache';
import { redirect, RedirectType, permanentRedirect } from 'next/navigation';
import { separateFullName, toTitleCase } from '@/src/app/lib/utils';
import { Diseases, TeethStatus } from "@/src/app/lib/data/definition";
import { 
    isExistedMedicalRecord, 
    isExistedDentalRecord,
    isExistedTreatmentRecord
   } from './queriesPrisma';  

const thisYear = (new Date()).getFullYear();

const FormSchema = z.object({
    id: z.string(),
    name: z.coerce.string().trim().min(1, {
      message: "Name is required."
    }),
    birth_year: z.coerce
      .number()
      .gt(1920, {
        message: "Please enter a year greater than 1920."
      })
      .lt(thisYear, {
        message: "Please enter a year less than 2024."
      }),
    gender: z.string(),
    phone: z.string(),
    address: z.string()
  });

//const CreatePatient = FormSchema.omit({});
const UpdatePatient = FormSchema.omit({});

export type State = {
    errors?: {
      id?: string[];
      name?: string[];
      birth_year?: string[];
      gender?: string[];
      phone?: string[];
      address?: string[];
    };
    message?: string | null;
  }; 

export async function updatePatient(prevState: State, formData: FormData) {

  const validatedFields = UpdatePatient.safeParse({
    id: formData.get('pid'),
    name: formData.get('name'),
    birth_year: formData.get('birth_year'),
    gender: formData.get('gender'),
    phone: formData.get('phone'),
    address: formData.get('address')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error in Fields. Failed to Update Patient.',
    };
  }


  const { id, name, birth_year, gender, phone, address } = validatedFields.data;
  const nNames = separateFullName(name.toLowerCase());

  const insertPatient = {
    first_name: nNames[0],
    middle_name: nNames[1],
    last_name: nNames[2],
    birth_year: birth_year,
    gender: gender,
    phone: phone,
    address: address
  };
  
  if (id.trim() === '') { // create
    const result = await db.patient.create({
      data: {
        ...insertPatient
      }
    });

    console.log(`Inserted 1 patient, id: ${result.id}`);

  }else { // edit
    const result = await db.patient.update({
      where: {
        id: Number.parseInt(id)
      },
      data: {
        ...insertPatient
      }
    });
    console.log(`Updated 1 patient, id: ${id}`);                
  }
  
  let url = '/dashboard/patients';
  if (id !== '') {
    url = `/dashboard/patients/${id}/edit/medicalRecords`;
  }
  revalidatePath(url);
  redirect(url);
}

/** Medical Records */

const MedicalFormSchema = z.object({
    status: z.string(),
    id: z.string(),
    height: z.coerce
      .number()
      .gt(0, {
        message: "Please enter a height number > 0 (m)."
      })
      .lt(2.5, {
        message: "Please enter a height number < 2.5 (m)."
      }),
    weight: z.coerce
      .number()
      .gt(0, {
        message: "Please enter a weight number > 0 (kg)."
      })
      .lt(200, {
        message: "Please enter a weight number < 200 (kg)."
      }),
    blood_pressure_sys: z.coerce
      .number()
      .gt(0, {
        message: "Please enter a number > 0."
      }),
    blood_pressure_dia: z.coerce
      .number()
      .gt(0, {
        message: "Please enter a number > 0."
      }),
    pulse: z.coerce
      .number()
      .gt(0, {
        message: "Please enter a number > 0."
      }),
    hospitalized: z.boolean(),
    hospitalized_declare: z.string(),
    high_blood: z.boolean(),
    ischemic_heart: z.boolean(),
    diabetes: z.boolean(),
    bleeding_disorders: z.boolean(),
    allergies: z.boolean(),
    asthma: z.boolean(),
    epileptic: z.boolean(),
    hepatitisB: z.boolean(),
    pregnancy: z.boolean(),
    other_diseases: z.boolean(),
    other_declare: z.string(),
});
  
  //const CreatePatient = FormSchema.omit({});
const UpdateMedicalRecords = MedicalFormSchema.omit({});
  
export type MedicalState = {
errors?: {
    status?: string[];
    id?: string[];
    height?: string[];
    weight?: string[];
    blood_pressure_sys?: string[];
    blood_pressure_dia?: string[];
    pulse?: string[];
    hospitalized?: string[];
    hospitalized_declare?: string[];
    high_blood?: string[];
    ischemic_heart?: string[];
    diabetes?: string[];
    bleeding_disorders?: string[];
    allergies?: string[];
    asthma?: string[];
    epileptic?: string[];
    hepatitisB?: string[];
    pregnancy?: string[];
    other_diseases?: string[];
    other_declare?: string[];  
};
message?: string | null;
};
  
export async function updateMedicalReords(prevState: MedicalState, formData: FormData) {
  
    const validatedFields = UpdateMedicalRecords.safeParse({
      status: formData.get('status'),
      id: formData.get('id'),
      height: formData.get('height'),
      weight: formData.get('weight'),
      blood_pressure_sys: formData.get('blood_pressure_sys'),
      blood_pressure_dia: formData.get('blood_pressure_dia'),
      pulse: formData.get('pulse'),
      hospitalized: formData.get('hospitalized') === "true",
      hospitalized_declare: formData.get('hospitalized_declare') || '',
      high_blood: formData.get('high_blood') === "true",
      ischemic_heart: formData.get('ischemic_heart') === "true",
      diabetes: formData.get('diabetes') === "true",
      bleeding_disorders: formData.get('bleeding_disorders') === "true",
      allergies: formData.get('allergies') === "true",
      asthma: formData.get('asthma') === "true",
      epileptic: formData.get('epileptic') === "true",
      hepatitisB: formData.get('hepatitisB') === "true",
      pregnancy: formData.get('pregnancy') === "true",
      other_diseases: formData.get('other_diseases') === "true",
      other_declare: formData.get('other_declare') || '',
  
    });
    
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Error in Fields. Failed to Update Medical Records.',
      };
    }
  
    const { status, id, height, weight, blood_pressure_sys, blood_pressure_dia, pulse, hospitalized, hospitalized_declare,
            high_blood, ischemic_heart, diabetes, bleeding_disorders, allergies, asthma, epileptic, hepatitisB, pregnancy,
            other_diseases, other_declare } = validatedFields.data;
  
    const hospitalized_dec = hospitalized ? hospitalized_declare : '';
    const other_dec = other_diseases ? other_declare : '';
  
    const suffered = JSON.parse(`{
      "high_blood": ${high_blood},
      "ischemic_heart": ${ischemic_heart},
      "diabetes": ${diabetes},
      "bleeding_disorders": ${bleeding_disorders},
      "allergies": ${allergies},
      "asthma": ${asthma},
      "epileptic": ${epileptic},
      "hepatitisB": ${hepatitisB},
      "pregnancy": ${pregnancy},
      "other_diseases": ${other_diseases},
      "other_declare": "${other_dec}"
    }`);

    const insertMedicalInfo = {
        pid: Number.parseInt(id),
        height: height,
        weight: weight,
        blood_pressure_sys: blood_pressure_sys,
        blood_pressure_dia: blood_pressure_dia,
        pulse: pulse,
        hospitalized: hospitalized,
        hospitalized_declare: hospitalized_dec,
        suffered: suffered
    };
    
    const result = await db.medicalRecord.upsert({
      where: {
        pid: Number.parseInt(id)
      },
      update: {
        ...insertMedicalInfo
      },
      create: {
        ...insertMedicalInfo
      }
    });

    console.log(`Updated or Inserted 1 medicalRecord, id: ${result.pid} - ${result.fullname}`);
    
    //const url = '/dashboard/patients';
    const url = `/dashboard/patients/${id}/edit/dentalRecords`;
    revalidatePath(url);
    redirect(url);
}

/** Dental Records */
const DentalFormSchema = z.object({
    status: z.string(),
    id: z.string(),
    description: z.string(),
    ur_tooth_diagram: z.string(),
    ul_tooth_diagram: z.string(),
    lr_tooth_diagram: z.string(),
    ll_tooth_diagram: z.string()
  });
  
  const UpdateDentalRecords = DentalFormSchema.omit({});
  
  export type DentalState = {
    errors?: {
      status?: string[];
      id?: string[];
      description?: string[];  
      ur_tooth_diagram?: string[];
      ul_tooth_diagram?: string[];
      lr_tooth_diagram?: string[];
      ll_tooth_diagram?: string[];
    };
    message?: string | null;
  }
  
  export async function updateDentalRecords(prevState: DentalState, formData: FormData) {
  
    const validatedFields = UpdateDentalRecords.safeParse({
      status: formData.get('status'),
      id: formData.get('id'),
      description: formData.get('description'),
      ur_tooth_diagram: formData.get('ur_tooth_diagram'),
      ul_tooth_diagram: formData.get('ul_tooth_diagram'),
      lr_tooth_diagram: formData.get('lr_tooth_diagram'),
      ll_tooth_diagram: formData.get('ll_tooth_diagram'),
    });
    
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Error in Fields. Failed to Update Dental Records.',
      };
    }
  
    const { status, id, description, ur_tooth_diagram, ul_tooth_diagram, lr_tooth_diagram, ll_tooth_diagram } = validatedFields.data;
  
    const tooth_diagram: TeethStatus = [
      ur_tooth_diagram.split(';') as [string, string, string, string, string, string, string, string],
      ul_tooth_diagram.split(';') as [string, string, string, string, string, string, string, string],
      lr_tooth_diagram.split(';') as [string, string, string, string, string, string, string, string],
      ll_tooth_diagram.split(';') as [string, string, string, string, string, string, string, string],
    ];
   

    const dentalItem = {
        pid: Number.parseInt(id),
        tooth_diagram: {
          upper_left: tooth_diagram[0],
          upper_right: tooth_diagram[1],
          lower_left: tooth_diagram[2],
          lower_right: tooth_diagram[3]
        },
        description: description
    };

    const result = await db.dentalRecord.upsert({
      where: {
        pid: Number.parseInt(id)
      },
      update: {
        ...dentalItem
      },
      create: {
        ...dentalItem
      }
    });
    console.log(`Updated or Created 1 dentalRecord with pid = ${result.pid}`);

    //const url = '/dashboard/patients';
    const url = `/dashboard/patients/${id}/edit/treatmentRecords`;
    revalidatePath(url);
    redirect(url);  
  }

/** Treatment Records */
const TreatmentFormSchema = z.object({
    status: z.string(),
    id: z.string(),
    diagnose: z.string(),
    old_exam_date: z.string(),
    exam_date: z.string(),
    amount: z.coerce.number(),
    paid: z.boolean(),
    treatment: z.string()
  });
  
const UpdateTreatmentsRecords = TreatmentFormSchema.omit({});
  
export type TreatmentState = {
    errors?: {
      status?: string[];
      id?: string[];
      diagnose?: string[];
      old_exam_date?: string[];
      exam_date?: string[];
      amount?: string[];
      paid?: string[];
      treatment?: string[];
    };
    message?: string | null;
    submitState?: number; // 0: new, 1: success, 2: fail
    id: string; // use for the notification
}
  
export async function updateTreatmentRecords(prevState: TreatmentState, formData: FormData) {
  
    const timestamp = new Date().getTime();
  
    const validatedFields = UpdateTreatmentsRecords.safeParse({
      status: formData.get('status'),
      id: formData.get('id'),
      diagnose: formData.get('diagnose'),
      old_exam_date: formData.get('old_exam_date'),
      exam_date: formData.get('hid_exam_date'),
      amount: formData.get('hid_amount'),
      paid: formData.get('paid') === "true",
      treatment: formData.get('treatment'),
    });
  
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Error in Fields. Failed to Get Input Fields from Treatment Records Form.',
        submitState: 2,
        id: `${timestamp}`
      };
    }

    const { status, id, diagnose, old_exam_date, exam_date, amount, paid, treatment } = validatedFields.data;
  
    const treatmentItem: any = {
        pid: Number.parseInt(id),
        exam_date: new Date(exam_date),
        diagnose: diagnose,
        amount: amount,
        paid: paid,
        treatment: treatment
    };
    
    if (status === 'create') { // create
        const result = await db.treatmentRecord.create({
          data: {
            ...treatmentItem
          }
        });
        console.log(`Inserted 1 treatment, id: ${result.pid}`);       
    } else {
        const result = await db.treatmentRecord.update({
          where: {
            uniqueID: {
              pid: Number.parseInt(id),
              exam_date: new Date(old_exam_date)
            }
          },
          data: {
            ...treatmentItem
          }
        });
        console.log(`Updated 1 treatment, id: ${result.pid}, ${result.exam_date}`);       
    }
  
    return {
      message: 'Save Database Successfully.',
      submitState: 1,
      id: `${timestamp}`
    }
  
    //const url = `/dashboard/patients/${id}/edit/treatmentRecords`;
    //revalidatePath(url, 'page');
    //redirect(url, RedirectType.replace);
    //permanentRedirect(url);
}
  
  const DeleteTreatmentsRecords = TreatmentFormSchema.omit({
    status: true, 
    diagnose: true,
    old_exam_date: true,
    amount: true,
    paid: true,
    treatment: true  
  });
  
  export type TreatmentDeleteState = {
    errors?: {
      id?: string[];
      exam_date?: string[];
    };
    message?: string | null;
    submitState?: number; // 0: new, 1: success, 2: fail
    id: string; // use for the notification
  }
  
  export async function deleteTreatmentRecords(prevState: TreatmentDeleteState, formData: FormData) {
    const timestamp = new Date().getTime();
  
    const validatedFields = DeleteTreatmentsRecords.safeParse({
      id: formData.get('id'),
      exam_date: formData.get('examDate')
    });
  
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Error in Fields. Failed to Get Input Fields from Treatment Records Form.',
        submitState: 2,
        id: `${timestamp}`
      };
    }
  
    const { id, exam_date } = validatedFields.data;
    const eExamDate = new Date(exam_date);
    //console.log(eExamDate);
    const result = await db.treatmentRecord.delete({
      where: {
        uniqueID: {
          pid: Number.parseInt(id),
          exam_date: eExamDate
        }
      }
    });
    console.log(`Deleted 1 treatmentRecord record, id: ${result.pid}, exam_date: ${result.exam_date}`)
 
    return {
      message: 'Delete Record Successfully.',
      submitState: 1,
      id: `${timestamp}`
    }
  }
  
  /** Delete Patient */
  const DeletePatient = FormSchema.omit({
    name: true,
    birth_year: true,
    gender: true,
    phone: true,
    address: true
  });
  
  export type DeletePatientState = {
    errors?: {
      id?: string[];
    };
    message?: string | null;
    submitState?: number; // 0: new, 1: success, 2: fail
    timestamp: string; // use for notification
  }
  
export async function deletePatient(prevState: DeletePatientState, formData: FormData) {
    const timestamp = `${new Date().getTime()}`;
  
    const validatedFields = DeletePatient.safeParse({
      id: formData.get('id')
    });
  
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Error in Fields. Cannot get patient ID. Failed to Delete Patient.',
        submitState: 2,
        timestamp: timestamp
      };
    }
  
    const {id} = validatedFields.data;

    const isMR = await isExistedMedicalRecord(id);
    const isDR = await isExistedDentalRecord(id);
    const isTR = await isExistedTreatmentRecord(id);
    const resultTrans: any = [];

    if (isMR) {
        const result = db.medicalRecord.delete({
          where: {
            pid: Number.parseInt(id)
          }
        });
        resultTrans.push(result);
    }
    
    if (isDR) {
      const result = db.dentalRecord.delete({
          where: {
            pid: Number.parseInt(id)
          }
        });
        resultTrans.push(result);
    }

    if (isTR) {
      const result = db.treatmentRecord.deleteMany({
          where: {
            pid: Number.parseInt(id)
          }
        });
        resultTrans.push(result);
    }

    const result = db.patient.delete({
      where: {
        id: Number.parseInt(id)
      }
    });
    resultTrans.push(result);
    
    const transaction = await prisma.$transaction(resultTrans);

    //console.log(transaction);
    console.log(`Deleted 1 patient successfull, id = ${transaction.id}, name: ${transaction.fullname}`);
  
    return {
      message: 'Delete Patient Successfully.',
      submitState: 1,
      timestamp: timestamp
    }
  
  }
  