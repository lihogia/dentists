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

export async function fetchRevenue(year = 2024) {
    noStore();

    try {
        const data = await sql`
            SELECT SUM(amount) as revenue, EXTRACT(MONTH from exam_date) as month
            FROM treatment_records
            WHERE
                EXTRACT(YEAR from exam_date) = ${year} AND paid = true
            GROUP BY
                EXTRACT(MONTH from exam_date)            
            `;

        const monthsRevenue = [];
        for (let i=0; i<12; i++) {
            monthsRevenue.push({month: i+1, revenue: 0});
        }
        console.log(monthsRevenue);

        data.rows.map((item) => {
            const index = item.month - 1;
            monthsRevenue[index].revenue = Number.parseInt(item.revenue);
        }) 

        console.log(monthsRevenue);

        return monthsRevenue;

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}

export async function fetchLatestInvoices() {
    noStore();
    try {
      const data = await sql`
        SELECT p.id as id, concat(p.first_name, ' ' , p.middle_name, ' ', p.last_name) as fullname, t.amount, to_char(t.exam_date, 'YYYY-MM-DD') as exam_date 
        FROM treatment_records as t
        JOIN patients as p ON p.id = t.pid
        ORDER BY t.exam_date DESC
        LIMIT 5;      
        `;
      const latestInvoices = data.rows.map((invoice) => ({
        id: invoice.pid,
        name: invoice.fullname,
        amount: formatCurrency(invoice.amount),
        exam_date: formatDateToLocal(invoice.exam_date)
      }));
      return latestInvoices;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest invoices.');
    }
  }
  