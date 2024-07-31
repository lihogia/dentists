import PatientsTableComponent from '@/src/app/ui/patients/table';
import { fetchFilteredPatients } from "@/src/app/lib/data/queries";

export default async function PatientsList(
{ query, currentPage }: 
{
    query: string;
    currentPage: number;
}) {
    const patients = await fetchFilteredPatients(query, currentPage);

    return (
        <PatientsTableComponent patients={patients}/>
    );
}