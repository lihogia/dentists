import { fetchPatientById } from "@/app/lib/data/queries";
import Breadcrumbs from '@/app/ui/patients/breadcrumbs';
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
            <ViewPatientForm patient={patient}/>
        </main>
    );

}