import { lusitana } from '@/app/ui/fonts';
import PatientsTable from '@/app/ui/patients/table';
import Search from '@/app/ui/search';
import { CreatePatient } from '@/app/ui/patients/buttons';

export default function Page() {

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Patients</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search patients..." />
                <CreatePatient />
            </div>
            <PatientsTable />
        </div>
    );
}