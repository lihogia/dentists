import { fetchDentalRecordsById } from "@/app/lib/data/queries";
import { DentalRecordsForm } from "@/app/lib/data/definition";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import Tabs from '@/app/ui/patients/tabs';
import ViewDentalForm from '@/app/ui/patients/viewDentalForm';
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
                    label: `View Dental Records`,
                    href: `/dashboard/patients/${id}/view/dentalRecords`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'Info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/view`},
                { label: 'Medical Records', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/view/medicalRecords`},
                { label: 'Dental Records', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/view/dentalRecords`, active: true},
                { label: 'Treatment Records', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/view/treatmentRecords`}
                ]}
            />            
            <ViewDentalForm dentalRecords={dentalRecords}/>
        </main>
    );

}