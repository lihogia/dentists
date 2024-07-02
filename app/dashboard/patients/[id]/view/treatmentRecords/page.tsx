import { fetchPatientById } from "@/app/lib/data/queries";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import Tabs from '@/app/ui/patients/tabs';
import ViewPatientForm from '@/app/ui/patients/viewForm';

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
                    label: 'View Patient Info',
                    href: `/dashboard/patients/${id}/view`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'Info', short: 'I', href: `/dashboard/patients/${id}/view`},
                { label: 'Medical Records', short: 'M', href: `/dashboard/patients/${id}/view/medicalRecords`},
                { label: 'Dental Records', short: 'D', href: `/dashboard/patients/${id}/view/dentalRecords`},
                { label: 'Treatment Records', short: 'T', href: `/dashboard/patients/${id}/view/treatmentRecords`, active: true}
                ]}
            />
            <ViewPatientForm patient={patient}/>
        </main>
    );

}