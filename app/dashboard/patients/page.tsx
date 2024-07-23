import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import PatientsTableComponent from '@/app/ui/patients/table';
import Search from '@/app/ui/search';
import { CreatePatient } from '@/app/ui/patients/buttons';
import { PatientsTableSkeleton } from '@/app/ui/skeletons';
import { fetchPatients } from "@/app/lib/data/queries";

export default async function Page() {
    const patients = await fetchPatients();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between md:mt-2">
                <h1 className={`${lusitana.className} text-2xl`}>Patients</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-6">
                {/*<Search placeholder="Search patients..." />*/}
                <CreatePatient />
            </div>
            <Suspense fallback={<PatientsTableSkeleton />}>
                <PatientsTableComponent patients={patients}/>
            </Suspense>            
        </div>
    );
}