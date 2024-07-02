import { fetchPatientById } from "@/app/lib/data/queries";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import Tabs from '@/app/ui/patients/tabs';
import UpdatePatientForm from "@/app/ui/patients/updateForm";

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
                { label: 'Info', short: 'I', href: `/dashboard/patients/${id}/edit`, active: true},
                { label: 'Medical Records', short: 'M', href: `/dashboard/patients/${id}/edit/medicalRecords`},
                { label: 'Dental Records', short: 'D', href: `/dashboard/patients/${id}/edit/dentalRecords`},
                { label: 'Treatment Records', short: 'T', href: `/dashboard/patients/${id}/edit/treatmentRecords`}
                ]}
            />
            <UpdatePatientForm patient={patient} />
        </main>
    );

}