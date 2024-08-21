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

/*    
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
        name: invoice.name.toUpperCase(),
        amount: formatCurrency(invoice.amount),
        paid: invoice.paid
      }));
      return invoices;
  
    }catch (error) {
      console.error('Database Error: ', error);
      throw new Error('Failed to fetch invoices.');
    }
 */ 
}
  