'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect, RedirectType, permanentRedirect } from 'next/navigation';
import { separateFullName, toTitleCase } from '@/app/lib/utils';
import { Diseases, TeethStatus } from "@/app/lib/data/definition";

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
  const names = separateFullName(toTitleCase(name));
  
  if (id.trim() === '') { // create
    try {
        await sql`
            INSERT INTO patients (first_name, middle_name, last_name, birth_year, gender, phone, address)
            VALUES (${names[0]}, ${names[1]}, ${names[2]}, ${birth_year}, ${gender}, ${phone}, ${address})
        `;
    }catch (error) {
        return {
            message: 'Database Error: Failed to Create Patient.',
        };
    }
  }else { // edit
    try {
        await sql`
            UPDATE patients
            SET first_name = ${names[0]}, middle_name = ${names[1]}, last_name = ${names[2]}, birth_year = ${birth_year}, gender = ${gender}, phone = ${phone}, address = ${address}
            WHERE id = ${id}
        `;
    }catch (error) {
        return {
            message: 'Database error: Failed to Update Patient',
        };
    }
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
  
  if (status.trim() === 'create') { // create

    try {
        await sql`
            INSERT INTO medical_records (pid, height, weight, blood_pressure_sys, blood_pressure_dia, pulse, hospitalized, hospitalized_declare, suffered)
            VALUES (${id}, ${height}, ${weight}, ${blood_pressure_sys}, ${blood_pressure_dia}, ${pulse}, 
                    ${hospitalized}, ${hospitalized_dec}, ${suffered});
        `;
    }catch (error) {
        return {
            message: 'Database Error: Failed to Create Medical Records.',
        };
    }
  }else { // edit

    try {
        await sql`
            UPDATE medical_records
            SET height = ${height}, weight = ${weight}, blood_pressure_sys = ${blood_pressure_sys}, blood_pressure_dia = ${blood_pressure_dia}, 
                pulse = ${pulse}, hospitalized = ${hospitalized}, hospitalized_declare = ${hospitalized_dec}, suffered = ${suffered}
            WHERE pid = ${id}
        `;
    }catch (error) {
        return {
            message: 'Database error: Failed to Update Medical Records',
        };
    }
  }
  
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
 
  if (status === 'create') { // create
    try {
        await sql`
            INSERT INTO dental_records (pid, tooth_diagram, description)
            VALUES (${id}, ${tooth_diagram as any}, ${description});
        `;
    }catch (error) {
        return {
            message: 'Database Error: Failed to Create Medical Records.',
        };
    }
  }else { // edit

    try {
        await sql`
            UPDATE dental_records
            SET tooth_diagram = ${tooth_diagram as any}, description = ${description}
            WHERE pid = ${id}
        `;
    }catch (error) {
        return {
            message: 'Database error: Failed to Update Medical Records',
        };
    }
  }
  
  //const url = '/dashboard/patients';
  const url = `/dashboard/patients/${id}/edit/treatmentRecords`;
  revalidatePath(url);
  redirect(url);  
}

/** Treatment Records */
const TreatmentFormSchema = z.object({
  status: z.string(),
  id: z.string(),
  diagnoses: z.string(),
  old_exam_date: z.string(),
  exam_date: z.string(),
  amount: z.coerce.number(),
  paid: z.boolean(),
  treatments: z.string()
});

const UpdateTreatmentsRecords = TreatmentFormSchema.omit({});

export type TreatmentState = {
  errors?: {
    status?: string[];
    id?: string[];
    diagnoses?: string[];
    old_exam_date?: string[];
    exam_date?: string[];
    amount?: string[];
    paid?: string[];
    treatments?: string[];
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
    diagnoses: formData.get('diagnoses'),
    old_exam_date: formData.get('old_exam_date'),
    exam_date: formData.get('hid_exam_date'),
    amount: formData.get('hid_amount'),
    paid: formData.get('paid') === "true",
    treatments: formData.get('hid_treatmentplan'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error in Fields. Failed to Get Input Fields from Treatment Records Form.',
      submitState: 2,
      id: `${timestamp}`
    };
  }

  const { status, id, diagnoses, old_exam_date, exam_date, amount, paid, treatments } = validatedFields.data;

  //console.log(`old:${old_exam_date}, new:${exam_date}`)

  if (status === 'create') { // create
    try {
      await sql`
        INSERT INTO treatment_records (pid, exam_date, diagnoses, amount, paid, treatments)
        VALUES (${id}, ${exam_date}, ${diagnoses}, ${amount}, ${paid}, ${JSON.stringify(JSON.parse(treatments))});
      `;

    }catch (error) {
      return {
        message: `Database Error: Failed to Create Treatment Records. ${error}`,
        submitState: 2,
        id: `${timestamp}`
      };
    }
  } else {
    try {
      await sql`
        UPDATE treatment_records 
        SET exam_date = ${exam_date} , diagnoses = ${diagnoses}, amount = ${amount}, paid = ${paid}, treatments = ${JSON.stringify(JSON.parse(treatments))}
        WHERE pid = ${id} AND exam_date = ${old_exam_date}
        ;
      `;

    }catch (error) {
      return {
        message: `Database Error: Failed to Update Treatment Records. ${error}`,
        submitState: 2,
        id: `${timestamp}`
      };
    }
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
  diagnoses: true,
  old_exam_date: true,
  amount: true,
  paid: true,
  treatments: true  
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
  try {
    await sql`
      DELETE FROM treatment_records 
      WHERE pid = ${id} AND exam_date = ${exam_date} 
    `;
  }catch (error) {
    return {
      message: `Database Error: Failed to Delete Treatment Records. ${error}`,
      submitState: 2,
      id: `${timestamp}`
    };
  }

  return {
    message: 'Delete Record Successfully.',
    submitState: 1,
    id: `${timestamp}`
  }

}
