import { db } from '@/src/app/lib/data/database';
import { sql } from 'kysely';
import { unstable_noStore as noStore } from 'next/cache';

import { formatDateToLocal, formatCurrency } from '@/src/app/lib/utils';

export async function fetchLatestInvoices() {
    noStore();

    const data = await db.selectFrom("treatment_records as t")
                        .fullJoin("patients as p", "p.id", "t.pid")
                        .select(({fn, val, ref}) => [
                            "p.id as id",
                            sql<string>`concat(
                                ${ref('first_name')},
                                ' ',
                                ${ref('middle_name')},
                                ' ',
                                ${ref('last_name')}
                              )`.as("fullname"),
                            "t.amount",
                            sql<string>`to_char(t.exam_date, 'YYYY-MM-DD')`.as("exam_date"),
                          ])
                        .orderBy("t.exam_date desc")
                        .limit(5)
                        .execute();
    const latestInvoices = data.map((invoice) => ({
        id: invoice.id,
        name: invoice.fullname,
        amount: formatCurrency(invoice.amount == null ? 0 : invoice.amount),
        exam_date: formatDateToLocal(invoice.exam_date)
        }));
    return latestInvoices;                          
}

export async function fetchTotalPatients() {
    noStore();

    const result = await db.selectFrom("patients as p")
                                .select(({fn, val, ref}) => [
                                    fn.count<number>('p.id').as('total')])
                                .execute();

    return result[0].total;
}