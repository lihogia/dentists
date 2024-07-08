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

/*    const dentalRecords: DentalRecordsForm = {
        pid: 'e248ef17-befd-473b-934a-d4ae0d0900e6',
        teeth_status: [["root_problem", "good", "good", "good", "good", "good", "outside_cavities", "good"],
                        ["good", "good", "good", "good", "good", "occlusal_incisal_cavities", "good", "good"],
                        ["good", "outside_cavities,occlusal_incisal_cavities", "good", "tooth_missing", "good", "good", "root_problem,outside_cavities,occlusal_incisal_cavities", "good"],
                        ["good", "good", "root_problem,outside_cavities", "good", "good", "good", "good", "good"]],
        description: "Rang khenh"
    }
*/
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: 'Patients', href: '/dashboard/patients' },
                {
                    label: 'View Dental Records',
                    href: `/dashboard/patients/${id}/view`,
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