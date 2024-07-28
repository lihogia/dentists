//import { fetchPatientById } from "@/app/lib/data/queries";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import Tabs from '@/app/ui/patients/tabs';
import { fetchTreatmentRecordsById } from "@/app/lib/data/queries";
import ViewTreatmentForm from '@/app/ui/patients/viewTreatmentForm';

import { TreatmentRecordsForm, Task } from "@/app/lib/data/definition";
import { 
    InformationCircleIcon,
    PlusCircleIcon,
    BookmarkSquareIcon,
    ArrowPathRoundedSquareIcon    
 } from '@heroicons/react/24/outline';

import { patients } from "@/app/lib/data/placeholderData";

export default async function Page({ params }: { params : { id: string }}) {
    const id = params.id;

    const [ arrTreatmentRecords ]: [ TreatmentRecordsForm[] ] = await Promise.all([
        fetchTreatmentRecordsById(id)
    ]);

    
/*    const arrTreatmentRecords : TreatmentRecordsForm[] = patients[0].treatmentRecords.map((record) => {

        const arrTreatments : Task[] = record.treatments.map(treatment => {
            return (
                {...treatment}
            );
        });
        return (
            { 
                pid: id,
                ...record,
                treatments: arrTreatments,
                fullname: patients[0].name,
                isCreated: false
            }
        );
    });
*/    

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: 'Patients', href: '/dashboard/patients' },
                {
                    label: `View Treatment Records`,
                    href: `/dashboard/patients/${id}/view/treatmentRecords`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'Info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/view`},
                { label: 'Medical Records', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/view/medicalRecords`},
                { label: 'Dental Records', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/view/dentalRecords`},
                { label: 'Treatment Records', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/view/treatmentRecords`, active: true}
                ]}
            />
            <ViewTreatmentForm treatmentRecords={arrTreatmentRecords}/>
        </main>
    );

}