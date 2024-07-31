import { MedicalRecordsForm } from "@/src/app/lib/data/definition";
import { fetchMedicalRecordsById } from "@/src/app/lib/data/queries";
import Breadcrumbs from '@/src/app/ui/patients/breadcrumbs';
import Tabs from '@/src/app/ui/patients/tabs';
import UpdateMedicalForm from '@/src/app/ui/patients/updateMedicalForm';
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
                    label: 'Edit Medical Records',
                    href: `/dashboard/patients/${id}/edit/medicalRecords`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'Info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/edit`},
                { label: 'Medical Records', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/edit/medicalRecords`, active: true},
                { label: 'Dental Records', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/edit/dentalRecords`},
                { label: 'Treatment Records', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/edit/treatmentRecords`}
                ]}
            />
            <UpdateMedicalForm medicalRecords={medicalRecords} status={medicalRecords.height == 0 ? "create" : "edit"}/>
        </main>
    );

}