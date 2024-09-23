import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import Tabs from '@/app/ui/patients/tabs';
import { fetchTreatmentRecordsById } from "@/app/lib/data/queriesPrisma";
import UpdateTreatmentForm from '@/app/ui/patients/updateTreatmentForm';

import { TreatmentRecordsForm, Task } from "@/app/lib/data/definition";
import { 
    InformationCircleIcon,
    PlusCircleIcon,
    BookmarkSquareIcon,
    ArrowPathRoundedSquareIcon    
 } from '@heroicons/react/24/outline';

export default async function Page({ params }: { params : { id: string }}) {
    const id = params.id;

    const treatmentRecords: TreatmentRecordsForm[] = await fetchTreatmentRecordsById(id);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: 'title', href: '/dashboard/patients' },
                {
                    label: `editTreatment.title`,
                    href: `/dashboard/patients/${id}/edit/treatmentRecords`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'tabs.info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/edit`},
                { label: 'tabs.medicalRecords', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/edit/medicalRecords`},
                { label: 'tabs.dentalRecords', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/edit/dentalRecords`},
                { label: 'tabs.treatmentRecords', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/edit/treatmentRecords`, active: true}
                ]}
            />
            <UpdateTreatmentForm treatmentRecords={treatmentRecords}/>
        </main>
    );

}