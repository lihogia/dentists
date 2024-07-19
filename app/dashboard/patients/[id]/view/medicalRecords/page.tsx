import { fetchMedicalRecordsById } from "@/app/lib/data/queries";
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
    const [ medicalRecords ] = await Promise.all([
        fetchMedicalRecordsById(id)
    ]);

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
            <div className="mb-2">
                <span>Patient Name: {medicalRecords.fullname}</span>
            </div>
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