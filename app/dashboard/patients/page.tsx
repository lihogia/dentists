import { Suspense } from 'react';
import { lusitana, opensans } from '@/app/ui/fonts';
import PatientsList from '@/app/ui/patients/list';
import Search from '@/app/ui/search';
import { CreatePatient } from '@/app/ui/patients/buttons';
import { PatientsTableSkeleton } from '@/app/ui/skeletons';
import PagingPatients from '@/app/dashboard/patients/pagingPatients';
import { useTranslations } from 'next-intl';

export default function Page(
    { searchParams }:
    { searchParams? : {
        query?: string;
        page?: string;
        }; 
    }
) {
    const trans = useTranslations('Patients');

    const query: string = searchParams?.query || '';
    const currentPage: number = Number(searchParams?.page || 1);
    const time = new Date();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between md:mt-2">
                <h1 className={`${lusitana.className} text-2xl`}>{trans("title")}</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-6">
                <Search placeholder={trans("searchplaceholder")} />
                <CreatePatient />
            </div>
            <Suspense key={query + currentPage} fallback={<PatientsTableSkeleton />}>
                <PatientsList query={query} currentPage={currentPage} />
            </Suspense>
            <PagingPatients query={query} />
        </div>
    );
}