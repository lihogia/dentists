import Breadcrumbs from '@/src/app/ui/patients/breadcrumbs';
import Tabs from '@/src/app/ui/patients/tabs';
import { fetchTreatmentRecordsById } from "@/src/app/lib/data/queries";
import UpdateTreatmentForm from '@/src/app/ui/patients/updateTreatmentForm';

import { TreatmentRecordsForm, Task } from "@/src/app/lib/data/definition";
import { 
    InformationCircleIcon,
    PlusCircleIcon,
    BookmarkSquareIcon,
    ArrowPathRoundedSquareIcon    
 } from '@heroicons/react/24/outline';

export default async function Page({ params }: { params : { id: string }}) {
    const id = params.id;

    const [ arrTreatmentRecords ]: [ TreatmentRecordsForm[] ] = await Promise.all([
        fetchTreatmentRecordsById(id)
    ]);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: 'Patients', href: '/dashboard/patients' },
                {
                    label: `Edit Treatment Records`,
                    href: `/dashboard/patients/${id}/edit/treatmentRecords`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'Info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/edit`},
                { label: 'Medical Records', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/edit/medicalRecords`},
                { label: 'Dental Records', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/edit/dentalRecords`},
                { label: 'Treatment Records', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/edit/treatmentRecords`, active: true}
                ]}
            />
            <UpdateTreatmentForm treatmentRecords={arrTreatmentRecords}/>
        </main>
    );

}