'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { separateFullName, toTitleCase } from '@/app/lib/utils';

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