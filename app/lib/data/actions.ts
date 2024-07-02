'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { separateFullName, toTitleCase } from '@/app/lib/utils';
import { Diseases } from "@/app/lib/data/definition";

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
/*
export async function createPatient_TBD(prevState: State, formData: FormData) {

    const validatedFields = CreatePatient.safeParse({
        name: formData.get('name'),
        birth_year: formData.get('birth_year'),
        gender: formData.get('gender'),
        phone: formData.get('phone'),
        address: formData.get('address')
      });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Error in Fields. Failed to Create Patient.',
      };
    }

    const { name, birth_year, gender, phone, address } = validatedFields.data;

    const names = separateFullName(name);

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

    revalidatePath('/dashboard/patients');
    redirect('/dashboard/patients');

  }
*/
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
  
  revalidatePath('/dashboard/patients');
  redirect('/dashboard/patients');
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

  

  console.log('here 1');

  if (!validatedFields.success) {
    console.log('here 3');
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error in Fields. Failed to Update Medical Records.',
    };
  }

  console.log('here 2');

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


/*
  const suffered = JSON.parse({
    high_blood: high_blood,
    ischemic_heart: ischemic_heart,
    diabetes: diabetes,
    bleeding_disorders: bleeding_disorders,
    allergies: allergies,
    asthma: asthma,
    epileptic: epileptic,
    hepatitisB: hepatitisB,
    pregnancy: pregnancy,
    other_diseases: other_diseases,
    other_declare: other_declare
  });
*/

  console.log('here');

  if (status.trim() === 'create') { // create
    console.log('1');
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
    console.log('2');
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
  
  revalidatePath('/dashboard/patients');
  redirect('/dashboard/patients');
}
