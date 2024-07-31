import { PatientForm } from "@/src/app/lib/data/definition";
import { fetchPatientById } from "@/src/app/lib/data/queries";
import Breadcrumbs from '@/src/app/ui/patients/breadcrumbs';
import UpdatePatientForm from "@/src/app/ui/patients/updateForm";

export default async function Page({ params }: { params : { id: string }}) {
    const id = params.id;
    const patient: PatientForm = {
        id: '',
        first_name: '',
        middle_name: '',
        last_name: '',
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