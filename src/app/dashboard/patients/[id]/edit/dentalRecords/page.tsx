import { fetchDentalRecordsById } from "@/src/app/lib/data/queries";
import { DentalRecordsForm } from "@/src/app/lib/data/definition";
import Breadcrumbs from '@/src/app/ui/patients/breadcrumbs';
import Tabs from '@/src/app/ui/patients/tabs';
import UpdateDentalForm from '@/src/app/ui/patients/updateDentalForm';
import { 
    InformationCircleIcon,
    PlusCircleIcon,
    BookmarkSquareIcon,
    ArrowPathRoundedSquareIcon    
 } from '@heroicons/react/24/outline';

export default async function Page({ params }: { params : { id: string }}) {
    const id = params.id;
    const [dentalRecords] = await Promise.all([
        fetchDentalRecordsById(id)]
    ) as [DentalRecordsForm];

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
                { label: 'Medical Records', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/edit/medicalRecords`},
                { label: 'Dental Records', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/edit/dentalRecords`, active: true},
                { label: 'Treatment Records', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/edit/treatmentRecords`}
                ]}
            />
            <UpdateDentalForm dentalRecords={dentalRecords}/>
        </main>
    );

}