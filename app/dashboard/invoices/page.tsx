import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Search from '@/app/ui/search';
import InvoicesList from '@/app/ui/invoices/list';
import PagingInvoices from '@/app/dashboard/invoices/pagingInvoices';

export default function Page(
    { searchParams }:
    { searchParams? : {
        query?: string;
        page?: string;
        }; 
    }
) {
    const trans = useTranslations('Invoices');

    const query: string = searchParams?.query || '';
    const currentPage: number = Number(searchParams?.page || 1);

    return (

        <div className="w-full">
            <div className="flex w-full items-center justify-between md:mt-2">
                <h1 className={`${lusitana.className} text-2xl`}>{trans("title")}</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-6">
                <form name='searchInvoice_form' className="w-full">
                    <Search placeholder={trans("searchplaceholder")} />
                </form>
            </div>
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                <InvoicesList query={query} currentPage={currentPage} />                
            </Suspense>
            <PagingInvoices query={query}/>
        </div>
    );
}