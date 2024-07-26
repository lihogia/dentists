import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Search from '@/app/ui/search';
import InvoicesList from '@/app/ui/invoices/list';
import { fetchFilteredInvoicesPages } from '@/app/lib/data/queries';
import Pagination from '@/app/ui/patients/pagination';

export default async function Page(
    { searchParams }:
    { searchParams? : {
        query?: string;
        page?: string;
        }; 
    }
) {

    const query: string = searchParams?.query || '';
    const currentPage: number = Number(searchParams?.page || 1);

    const totalPages = await fetchFilteredInvoicesPages(query);

    return (

        <div className="w-full">
            <div className="flex w-full items-center justify-between md:mt-2">
                <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-6">
                <form name='searchInvoice_form' className="w-full">
                    <Search placeholder="Search invoices..." />
                </form>
            </div>
            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                <InvoicesList query={query} currentPage={currentPage} />                
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}