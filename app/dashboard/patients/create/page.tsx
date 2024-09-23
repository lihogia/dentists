import { useTranslations } from 'next-intl';
import { PatientView } from "@/app/lib/data/definition";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
import UpdatePatientForm from "@/app/ui/patients/updateForm";

export default function Page({ params }: { params : { id: string }}) {
    const trans = useTranslations('Patients');
    const patient: PatientView = {
        id: '',
        fullname: '',
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
            <UpdatePatientForm strPatient={JSON.stringify(patient)} />
        </main>
    );

}
