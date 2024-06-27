'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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

const CreatePatient = FormSchema.omit({});
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

export async function createPatient(prevState: State, formData: FormData) {

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

    try {
        await sql`
            INSERT INTO patients (name, birth_year, gender, phone, address)
            VALUES (${name}, ${birth_year}, ${gender}, ${phone}, ${address})
        `;
    }catch (error) {
        return {
            message: 'Database Error: Failed to Create Patient.',
        };
    }

    revalidatePath('/dashboard/patients');
    redirect('/dashboard/patients');

  }

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
  
  /*({
    id: formData.get('pid'),
    name: formData.get('name'),
    birth_year: formData.get('birth_year'),
    gender: formData.get('gender'),
    phone: formData.get('phone'),
    address: formData.get('address'),

  });*/

  console.log(`id=${id}, phone=${phone}`);

  if (id.trim() === '') { // create
    try {
        await sql`
            INSERT INTO patients (name, birth_year, gender, phone, address)
            VALUES (${name}, ${birth_year}, ${gender}, ${phone}, ${address})
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
            SET name = ${name}, birth_year = ${birth_year}, gender = ${gender}, phone = ${phone}, address = ${address}
            WHERE id = ${id}
        `;
    }catch (error) {
        return {
            message: 'Database error: Failed to Update Invoice',
        };
    }
  }
  
  revalidatePath('/dashboard/patients');
  redirect('/dashboard/patients');
}