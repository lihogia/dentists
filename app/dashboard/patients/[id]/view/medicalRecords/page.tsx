import { MedicalRecordsForm } from "@/app/lib/data/definition";
import { fetchMedicalRecordsById } from "@/app/lib/data/queriesPrisma";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import Tabs from '@/app/ui/patients/tabs';
import ViewMedicalForm from '@/app/ui/patients/viewMedicalForm';
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
                    label: 'viewMedical.title',
                    href: `/dashboard/patients/${id}/view/medicalRecords`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'tabs.info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/view`},
                { label: 'tabs.medicalRecords', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/view/medicalRecords`, active: true},
                { label: 'tabs.dentalRecords', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/view/dentalRecords`},
                { label: 'tabs.treatmentRecords', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/view/treatmentRecords`}
                ]}
            />
            <ViewMedicalForm strMedicalRecords={JSON.stringify(medicalRecords)}/>
        </main>
    );

}