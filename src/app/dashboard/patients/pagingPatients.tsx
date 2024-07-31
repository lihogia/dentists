import { fetchFilteredPatientsPages } from "@/src/app/lib/data/queries";
import Pagination from '@/src/app/ui/patients/pagination';

export default async function PagingPatients(
    { searchParams }:
    { searchParams? : {
        query?: string;
        page?: string;
        }; 
    }    
) {
    const query: string = searchParams?.query || '';
    const totalPages = await fetchFilteredPatientsPages(query);

    return (
        <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
        </div>            

    );
}