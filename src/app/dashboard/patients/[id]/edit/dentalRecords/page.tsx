import { fetchDentalRecordsById } from "@/src/app/lib/data/queriesPrisma";
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
    const dentalRecords: DentalRecordsForm = await fetchDentalRecordsById(id);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: 'title', href: '/dashboard/patients' },
                {
                    label: 'editDental.title',
                    href: `/dashboard/patients/${id}/edit/medicalRecords`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'tabs.info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/edit`},
                { label: 'tabs.medicalRecords', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/edit/medicalRecords`},
                { label: 'tabs.dentalRecords', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/edit/dentalRecords`, active: true},
                { label: 'tabs.treatmentRecords', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/edit/treatmentRecords`}
                ]}
            />
            <UpdateDentalForm strDentalRecord={JSON.stringify(dentalRecords)}/>
        </main>
    );

}