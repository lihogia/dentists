import { PatientView } from "@/src/app/lib/data/definition";
import { fetchPatientById } from "@/src/app/lib/data/queriesPrisma";
import Breadcrumbs from '@/src/app/ui/patients/breadcrumbs';
import Tabs from '@/src/app/ui/patients/tabs';
import UpdatePatientForm from "@/src/app/ui/patients/updateForm";
import { 
    InformationCircleIcon,
    PlusCircleIcon,
    BookmarkSquareIcon,
    ArrowPathRoundedSquareIcon    
 } from '@heroicons/react/24/outline';

export default async function Page({ params }: { params : { id: string }}) {
    const id = params.id;
    const patient: PatientView = await fetchPatientById(id);

    return (
        <main>
            <Breadcrumbs
            breadcrumbs={[
            { label: 'title', href: '/dashboard/patients' },
            {
                label: 'editInfo.title',
                href: `/dashboard/patients/${id}/edit`,
                active: true,
            },
            ]}
            />
            <Tabs 
                tabs={[
                { label: 'tabs.info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/edit`, active: true},
                { label: 'tabs.medicalRecords', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/edit/medicalRecords`},
                { label: 'tabs.dentalRecords', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/edit/dentalRecords`},
                { label: 'tabs.treatmentRecords', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/edit/treatmentRecords`}
                ]}
            />
            <UpdatePatientForm strPatient={JSON.stringify(patient)} />
        </main>
    );

}