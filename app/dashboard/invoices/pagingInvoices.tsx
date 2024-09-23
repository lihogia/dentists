import { fetchFilteredInvoicesPages } from '@/app/lib/data/queriesPrisma';
import Pagination from '@/app/ui/patients/pagination';

export default async function PagingInvoices(
    { query }:
    { query : string
    }    

) {
    const totalPages = await fetchFilteredInvoicesPages(query);

    return (
        <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
        </div>            

    );
}