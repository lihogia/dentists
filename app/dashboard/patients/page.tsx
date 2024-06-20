import { lusitana } from '@/app/ui/fonts';
import PatientsTable from '@/app/ui/patients/table';

export default function Page() {

    return (

        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Patients</h1>
            </div>
            <PatientsTable />
        </div>
    );
}