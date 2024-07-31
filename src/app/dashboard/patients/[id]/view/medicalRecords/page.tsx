import { MedicalRecordsForm } from "@/src/app/lib/data/definition";
import { fetchMedicalRecordsById } from "@/src/app/lib/data/queries";
import Breadcrumbs from '@/src/app/ui/patients/breadcrumbs';
import Tabs from '@/src/app/ui/patients/tabs';
import ViewMedicalForm from '@/src/app/ui/patients/viewMedicalForm';
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
                { label: 'Patients', href: '/dashboard/patients' },
                {
                    label: `View Medical Records`,
                    href: `/dashboard/patients/${id}/view/medicalRecords`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'Info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/view`},
                { label: 'Medical Records', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/view/medicalRecords`, active: true},
                { label: 'Dental Records', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/view/dentalRecords`},
                { label: 'Treatment Records', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/view/treatmentRecords`}
                ]}
            />
            <ViewMedicalForm medicalRecords={medicalRecords}/>
        </main>
    );

}