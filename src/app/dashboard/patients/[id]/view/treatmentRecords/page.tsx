import Breadcrumbs from '@/src/app/ui/patients/breadcrumbs';
import Tabs from '@/src/app/ui/patients/tabs';
import { fetchTreatmentRecordsById } from "@/src/app/lib/data/queriesKysely";
import ViewTreatmentForm from '@/src/app/ui/patients/viewTreatmentForm';

import { TreatmentRecordsForm, Task } from "@/src/app/lib/data/definition";
import { 
    InformationCircleIcon,
    PlusCircleIcon,
    BookmarkSquareIcon,
    ArrowPathRoundedSquareIcon    
 } from '@heroicons/react/24/outline';

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
                { label: 'title', href: '/dashboard/patients' },
                {
                    label: 'viewTreatment.title',
                    href: `/dashboard/patients/${id}/view/treatmentRecords`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'tabs.info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/view`},
                { label: 'tabs.medicalRecords', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/view/medicalRecords`},
                { label: 'tabs.dentalRecords', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/view/dentalRecords`},
                { label: 'tabs.treatmentRecords', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/view/treatmentRecords`, active: true}
                ]}
            />
            <ViewTreatmentForm pTreatmentRecords={arrTreatmentRecords}/>
        </main>
    );

}