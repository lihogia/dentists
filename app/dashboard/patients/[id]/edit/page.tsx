import { fetchPatientById } from "@/app/lib/data/queries";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import Tabs from '@/app/ui/patients/tabs';
import UpdatePatientForm from "@/app/ui/patients/updateForm";
import { 
    InformationCircleIcon,
    PlusCircleIcon,
    BookmarkSquareIcon,
    ArrowPathRoundedSquareIcon    
 } from '@heroicons/react/24/outline';

export default async function Page({ params }: { params : { id: string }}) {
    const id = params.id;
    const [ patient ] = await Promise.all([
        fetchPatientById(id)
    ]);

    return (
        <main>
            <Breadcrumbs
            breadcrumbs={[
            { label: 'Patients', href: '/dashboard/patients' },
            {
                label: 'Edit Patient Info',
                href: `/dashboard/patients/${id}/edit`,
                active: true,
            },
            ]}
            />
            <Tabs 
                tabs={[
                { label: 'Info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/edit`, active: true},
                { label: 'Medical Records', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/edit/medicalRecords`},
                { label: 'Dental Records', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/edit/dentalRecords`},
                { label: 'Treatment Records', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/edit/treatmentRecords`}
                ]}
            />
            <UpdatePatientForm patient={patient} />
        </main>
    );

}