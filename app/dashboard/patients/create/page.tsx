import { PatientForm } from "@/app/lib/data/definition";
import { fetchPatientById } from "@/app/lib/data/queries";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import UpdatePatientForm from "@/app/ui/patients/updateForm";

export default async function Page({ params }: { params : { id: string }}) {
    const id = params.id;
    const patient: PatientForm = {
        id: '',
        name: '',
        birth_year: 1971,
        gender: 'female',
        phone: '',
        address: ''
    };

    return (
        <main>
            <Breadcrumbs
            breadcrumbs={[
            { label: 'Patients', href: '/dashboard/patients' },
            {
                label: 'Create Patient Info',
                href: `/dashboard/patients/create`,
                active: true,
            },
            ]}
            />
            <UpdatePatientForm patient={patient} />
        </main>
    );

}