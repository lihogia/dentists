import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import PatientsList from '@/app/ui/patients/list';
import Search from '@/app/ui/search';
import { CreatePatient } from '@/app/ui/patients/buttons';
import { PatientsTableSkeleton } from '@/app/ui/skeletons';
import { fetchFilteredPatientsPages } from "@/app/lib/data/queries";
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

    const totalPages = await fetchFilteredPatientsPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between md:mt-2">
                <h1 className={`${lusitana.className} text-2xl`}>Patients</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-6">
                <Search placeholder="Search patients..." />
                <CreatePatient />
            </div>
            <Suspense key={query + currentPage} fallback={<PatientsTableSkeleton />}>
                <PatientsList query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>            
        </div>
    );
}