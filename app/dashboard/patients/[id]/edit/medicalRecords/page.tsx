import { MedicalRecordsForm } from "@/app/lib/data/definition";
import { fetchMedicalRecordsById } from "@/app/lib/data/queriesPrisma";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import Tabs from '@/app/ui/patients/tabs';
import UpdateMedicalForm from '@/app/ui/patients/updateMedicalForm';
import { 
    InformationCircleIcon,
    PlusCircleIcon,
    BookmarkSquareIcon,
    ArrowPathRoundedSquareIcon    
 } from '@heroicons/react/24/outline';

export default async function Page({ params }: { params : { id: string }}) {
    const id = params.id;
    const medicalRecords = await fetchMedicalRecordsById(id) as MedicalRecordsForm;

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: 'title', href: '/dashboard/patients' },
                {
                    label: 'editMedical.title',
                    href: `/dashboard/patients/${id}/edit/medicalRecords`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'tabs.info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/edit`},
                { label: 'tabs.medicalRecords', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/edit/medicalRecords`, active: true},
                { label: 'tabs.dentalRecords', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/edit/dentalRecords`},
                { label: 'tabs.treatmentRecords', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/edit/treatmentRecords`}
                ]}
            />
            <UpdateMedicalForm strMedicalRecord={JSON.stringify(medicalRecords)} status={medicalRecords.height == 0 ? "create" : "edit"}/>
        </main>
    );

}