import { fetchPatientById } from "@/app/lib/data/queries";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
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
            <UpdatePatientForm patient={patient} />
            
        </main>
    );

}