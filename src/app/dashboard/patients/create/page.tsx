import { useTranslations } from 'next-intl';
import { PatientForm } from "@/src/app/lib/data/definition";
import Breadcrumbs from '@/src/app/ui/patients/breadcrumbs';
import UpdatePatientForm from "@/src/app/ui/patients/updateForm";

export default function Page({ params }: { params : { id: string }}) {
    const trans = useTranslations('Patients');
    const patient: PatientForm = {
        id: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        birth_year: 1971,
        gender: "female",
        phone: '',
        address: ''
    };

    return (
        <main>
            <Breadcrumbs
            breadcrumbs={[
            { label: "title", href: '/dashboard/patients' },
            {
                label: "create.createtitle",
                href: `/dashboard/patients/create`,
                active: true,
            },
            ]}
            />
            <UpdatePatientForm patient={patient} />
        </main>
    );

}