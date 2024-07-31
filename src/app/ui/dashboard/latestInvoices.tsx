import clsx from 'clsx';
import { lusitana } from '@/src/app/ui/fonts';
import Link from "next/link";
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { fetchLatestInvoices } from '@/src/app/lib/data/insights'; 
import { useTranslations } from 'next-intl';

export default async function LatestInvoices() {
  const trans = useTranslations('Home');
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        {trans("latestinvoices.title")}
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        { <div className="bg-white px-6">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={`${invoice.id}_${invoice.exam_date}`}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm md:text-base hover:bg-sky-100 hover:text-blue-600">
                      <Link href={`/dashboard/patients/${invoice.id}/view`}>{invoice.name}</Link>
                    </p>
                    <p className="text-sm text-gray-500 sm:block">
                      {invoice.exam_date}
                    </p>                    
                  </div>
                  
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>}
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">{trans("latestinvoices.updatedjustnow")}</h3>
        </div>
      </div>
    </div>
  );
}
