import PatientsTableComponent from '@/app/ui/patients/table';
//import { fetchFilteredPatients } from "@/src/app/lib/data/queriesKysely";
import { fetchFilteredPatients } from "@/app/lib/data/queriesPrisma";

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