import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';
  import { lusitana } from '@/app/ui/fonts';
  import { fetchCardData } from '@/app/lib/data/insights';
  import { formatCurrency } from '@/app/lib/utils';
  
  const iconMap = {
    collected: BanknotesIcon,
    patients: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
  };
  
  export default async function CardWrapper() {

    const { 
      numberOfPatients,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices
     } = await fetchCardData();
  
    return (
      <>
        {/* NOTE: comment in this code when you get to this point in the course */}
  
        <Card title="Collected" value={formatCurrency(Number.parseInt(totalPaidInvoices))} type="collected" />
        <Card title="Pending" value={formatCurrency(Number.parseInt(totalPendingInvoices))} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Patients"
          value={numberOfPatients}
          type="patients"
        />
      </>
    );
  }
  
  export function Card({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: 'invoices' | 'patients' | 'pending' | 'collected';
  }) {
    const Icon = iconMap[type];
  
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <p
          className={`${lusitana.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {value}
        </p>
      </div>
    );
  }
  