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
    Task
} from "@/app/lib/data/definition";

import { formatDateToLocal, formatDateObjToLocal, checkAndConvertDate, getNextDate, MAX_ITEMS_PER_PAGE, formatCurrency } from '@/app/lib/utils';


export async function fetchCardData() {
    noStore();

    try {
        
        const patientsCountPromise = sql`SELECT COUNT(*) FROM patients`;
        const invoiceCountPromise = sql`SELECT COUNT(*) FROM treatment_records
            WHERE amount > 0`;
        const invoiceStatusPromise = sql`SELECT
            SUM(CASE WHEN paid = true AND amount > 0 THEN amount ELSE 0 END) AS "paid",
            SUM(CASE WHEN paid = false AND amount > 0 THEN amount ELSE 0 END) AS "pending"
            FROM treatment_records
            `;
        const data = await Promise.all([
            patientsCountPromise,
            invoiceCountPromise,
            invoiceStatusPromise,
        ]);
    
        const numberOfPatients = Number(data[0].rows[0].count ?? '0');
        const numberOfInvoices = Number(data[1].rows[0].count ?? '0');
        const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
        const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');
    
        return {
          numberOfPatients,
          numberOfInvoices,
          totalPaidInvoices,
          totalPendingInvoices,
        };
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch card data.');
    }
}