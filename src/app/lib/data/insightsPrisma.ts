import { db } from '@/src/app/lib/data/database';
import { unstable_noStore as noStore } from 'next/cache';
import { formatDateToLocal, formatCurrency, MAX_ITEMS_PER_PAGE } from '@/src/app/lib/utils';
import { Prisma } from '@prisma/client';
import { group } from 'console';

export async function fetchLatestInvoices() {
    noStore();

    const data = await db.treatmentRecord.findMany({
      relationLoadStrategy: 'join',
      select: {
        pid: true,
        Patient: {
          select: {
            fullname: true
          }
        },
        amount: true,
        examdate: true
      },
      orderBy: {
        exam_date: "desc"
      },
      take: MAX_ITEMS_PER_PAGE
    });
    
    const latestInvoices = data.map((invoice) => ({
        id: invoice.pid,
        name: invoice.Patient.fullname.toUpperCase(),
        amount: formatCurrency(invoice.amount == null ? 0 : invoice.amount),
        exam_date: formatDateToLocal(invoice.examdate)
        }));
    return latestInvoices;                          
}

export async function fetchTotalPatients() {
    noStore();

    const result = await db.patient.count({});
    return result;
}

export async function fetchRevenue(year = 2024) {
  noStore();


  const data = await db.$queryRaw(Prisma.sql`
        SELECT SUM(amount) as revenue, EXTRACT(MONTH from exam_date) as month
        FROM "TreatmentRecord"
        WHERE
            EXTRACT(YEAR from exam_date) = ${year} AND paid = true
        GROUP BY
            EXTRACT(MONTH from exam_date)            
        `);
        
  const monthsRevenue: any = [];
  for (let i=0; i<12; i++) {
      monthsRevenue.push({month: i+1, revenue: 0});
  }
  //console.log(monthsRevenue);
  //console.log(data);

  data.map((item) => {
      const index = item.month - 1;
      monthsRevenue[index].revenue = Number.parseInt(item.revenue);
  }) 

  //console.log(monthsRevenue);

  return monthsRevenue;
}
