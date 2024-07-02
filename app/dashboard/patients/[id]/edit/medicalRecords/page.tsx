import { fetchMedicalRecordsById } from "@/app/lib/data/queries";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import Tabs from '@/app/ui/patients/tabs';
import UpdateMedicalForm from '@/app/ui/patients/updateMedicalForm';

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
                    label: 'Edit Medical Records',
                    href: `/dashboard/patients/${id}/edit/medicalRecords`,
                    active: true,
                },
                ]}
            />
            <Tabs 
                tabs={[
                { label: 'Info', short: 'I', href: `/dashboard/patients/${id}/edit`},
                { label: 'Medical Records', short: 'M', href: `/dashboard/patients/${id}/edit/medicalRecords`, active: true},
                { label: 'Dental Records', short: 'D', href: `/dashboard/patients/${id}/edit/dentalRecords`},
                { label: 'Treatment Records', short: 'T', href: `/dashboard/patients/${id}/edit/treatmentRecords`}
                ]}
            />
            <UpdateMedicalForm medicalRecords={medicalRecords} status={medicalRecords.height == 0 ? "create" : "edit"}/>
        </main>
    );

}