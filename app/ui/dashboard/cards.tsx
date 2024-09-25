import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';
  import { lusitana } from '@/app/ui/fonts';
  //import { fetchCardData } from '@/src/app/lib/data/insights';
  //import { fetchTotalPatients } from '@/src/app/lib/data/insightsKysely';
  import { 
    fetchTotalPatients, 
    fetchNumberOfInvoices,
    fetchTotalPaidInvoices,
    fetchTotalPendingInvoices } 
    from '@/app/lib/data/insightsPrisma';

  import { formatCurrency } from '@/app/lib/utils';
  import {getTranslations} from 'next-intl/server';
  
  import { auth } from "@/auth";
  
  const iconMap = {
    collected: BanknotesIcon,
    patients: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
  };
  
  export default async function CardWrapper() {
    const session = await auth();
    const isAdmin = session?.user.role == "ADMIN";
    const trans = await getTranslations('Home');
    
    const numberOfPatients = await fetchTotalPatients();
    let numberOfInvoices = 0;
    let totalPaidInvoices = 0;
    let totalPendingInvoices = 0;

    if (isAdmin) {
      numberOfInvoices = await fetchNumberOfInvoices();
      totalPaidInvoices = await fetchTotalPaidInvoices();
      totalPendingInvoices = await fetchTotalPendingInvoices();
    }     

    return (
      <>
        
        {isAdmin && <>          
          
          {/*
          <Card key='collected' title={trans("card.collected")} value={formatCurrency(Number.parseInt(totalPaidInvoices))} type="collected" />
          <Card key='Pending' title={trans("card.pending")} value={formatCurrency(Number.parseInt(totalPendingInvoices))} type="pending" />
          
          */}
          <Card key='collected' title={trans("card.collected")} value={formatCurrency(totalPaidInvoices)} type="collected" />
          <Card key='Pending' title={trans("card.pending")} value={formatCurrency(totalPendingInvoices)} type="pending" />
          <Card key='totalInvoices' title={trans("card.totalinvoices")} value={numberOfInvoices} type="invoices" />          
          </>}
        <Card key='totalPatients'
          title={trans("card.totalpatients")}
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
  