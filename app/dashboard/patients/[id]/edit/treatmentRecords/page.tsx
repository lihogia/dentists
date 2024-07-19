import { useState } from 'react';
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import Tabs from '@/app/ui/patients/tabs';
import { fetchTreatmentRecordsById } from "@/app/lib/data/queries";
import UpdateTreatmentForm from '@/app/ui/patients/updateTreatmentForm';

import { TreatmentRecordsForm, Task } from "@/app/lib/data/definition";
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

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                { label: 'Patients', href: '/dashboard/patients' },
                {
                    label: `Edit Treatment Records`,
                    href: `/dashboard/patients/${id}/edit/treatmentRecords`,
                    active: true,
                },
                ]}
            />
            <div className="mb-2">
                <span>Patient Name: {arrTreatmentRecords[0].fullname}</span>
            </div>                        
            <Tabs 
                tabs={[
                { label: 'Info', icon: InformationCircleIcon, href: `/dashboard/patients/${id}/edit`},
                { label: 'Medical Records', icon: PlusCircleIcon, href: `/dashboard/patients/${id}/edit/medicalRecords`},
                { label: 'Dental Records', icon: BookmarkSquareIcon, href: `/dashboard/patients/${id}/edit/dentalRecords`},
                { label: 'Treatment Records', icon: ArrowPathRoundedSquareIcon, href: `/dashboard/patients/${id}/edit/treatmentRecords`, active: true}
                ]}
            />
            <UpdateTreatmentForm treatmentRecords={arrTreatmentRecords}/>
        </main>
    );

}