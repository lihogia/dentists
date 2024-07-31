'use client';
import Image from "next/image";
import PatientStatus from "@/src/app/ui/patients/status";
import { formatDateToLocal, formatPhoneNumber, toTitleCase, mergeToFullName } from "@/src/app/lib/utils";
import { UpdatePatient } from "@/src/app/ui/patients/buttons";
import { DeletePatientComponent } from "@/src/app/ui/patients/buttonsDelete";
import Link from "next/link";
import { useState } from "react";
import { StatusBoard, PatientsTable } from "@/src/app/lib/data/definition";
import { useTranslations } from 'next-intl';

export default function PatientsTableComponent(
    { patients } : 
    { patients: PatientsTable[] }
) {
    const trans = useTranslations('Patients');
    const initStatusBoard: StatusBoard = {
        status: 0,
        message: ''
    }

    const initPatientsBoard = {
        list: patients,
        state: initStatusBoard
    }

    const [patientsBoard, setPatientsBoard] = useState(initPatientsBoard);

    function removePatient(id: string, pState: StatusBoard) {
        const newPatients = patientsBoard.list.filter((patient) => patient.id != id);

        //console.log(`id=${id}`);

        const newBoard = {
            ...patientsBoard,
            list: newPatients,
            state: pState
        }
        setPatientsBoard(newBoard);
    }

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    {patientsBoard.state.status === 1 &&  <div className="mt-1 flow-root bg-gray-100 p-2 bg-green-200">
                        <p className="text-sm">{patientsBoard.state.message}</p>
                        </div>}
                    {patientsBoard.state.status === 2 &&  <div className="mt-1 flow-root bg-gray-100 p-2 bg-red-200">
                            <p className="text-sm">{patientsBoard.state.message}</p>
                        </div>}

                    <div className="md:hidden">
                    {patientsBoard.list?.map((patient) => (
                        <div key={patient.id} className="mb-2 w-full rounded-md bg-white p-4 hover:bg-sky-100 hover:text-blue-600">
                            <div 
                                className="flex items-center justify-between border-b pb-4"
                                onClick={(e) => {
                                    document.location.href = `/dashboard/patients/${patient.id}/view`;
                                }}
                                >
                                <div>
                                    <div className="mb-2 flex items-center">
                                        <p className="text-md"><Link href={`/dashboard/patients/${patient.id}/view`}>{mergeToFullName([patient.first_name,patient.middle_name, patient.last_name])}</Link></p>
                                    </div>
                                    <p className="text-sm text-gray-500">{patient.birth_year}, {(patient.gender == 'female' ? trans("table.female") : trans("table.male"))}</p>
                                </div>
                            </div>
                            <div className="flex w-full items-center justify-between pt-4">
                            <div>
                                <p>{formatPhoneNumber(patient.phone)}</p>
                            </div>
                            <div className="flex justify-end gap-2">
                                <UpdatePatient id={`${patient.id}`} />
                                <DeletePatientComponent id={`${patient.id}`} handlePatientRemove={removePatient}/>
                            </div>
                        </div>                            
                    </div>
                    ))}
                    </div>
                    <table className="hidden min-w-full text-black md:table">
                        <thead className="rounded-lg text-left text-md font-black">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            {trans("table.name")}
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            {trans("table.birthyear")}
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            {trans("table.phone")}
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            {trans("table.gender")}
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                            <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                            {patientsBoard.list?.map((patient) => (
                            <tr key={patient.id}
                            className="w-full border-b py-3 text-md last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg hover:bg-sky-100 hover:text-blue-600 hover:font-bold">
                                <td 
                                    className="whitespace-nowrap py-3 pl-6 pr-3 cursor-pointer"
                                    onClick={(e) => {
                                        document.location.href = `/dashboard/patients/${patient.id}/view`;
                                    }}
                                    >
                                    <div className="flex items-center gap-3">
                                    <p><Link href={`/dashboard/patients/${patient.id}/view`}>{mergeToFullName([patient.first_name,patient.middle_name, patient.last_name])}</Link></p>
                                    </div>
                                </td>
                                <td 
                                    className="whitespace-nowrap px-3 py-3 cursor-pointer"
                                    onClick={(e) => {
                                        document.location.href = `/dashboard/patients/${patient.id}/view`;
                                    }}
                                    >
                                    {patient.birth_year}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3 cursor-pointer"
                                    onClick={(e) => {
                                        document.location.href = `/dashboard/patients/${patient.id}/view`;
                                    }}
                                    >
                                    {formatPhoneNumber(patient.phone)}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3 cursor-pointer"
                                    onClick={(e) => {
                                        document.location.href = `/dashboard/patients/${patient.id}/view`;
                                    }}
                                    >
                                    { (patient.gender == 'female' ? trans("table.female") : trans("table.male"))
                                    }
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <UpdatePatient id={`${patient.id}`} />
                                        <DeletePatientComponent id={`${patient.id}`} handlePatientRemove={removePatient}/>
                                    </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}