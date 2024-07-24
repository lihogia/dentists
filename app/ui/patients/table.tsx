'use client';
import Image from "next/image";
import PatientStatus from "@/app/ui/patients/status";
import { formatDateToLocal, formatPhoneNumber, toTitleCase, mergeToFullName } from "@/app/lib/utils";
import { UpdatePatient } from "@/app/ui/patients/buttons";
import { DeletePatientComponent } from "@/app/ui/patients/buttonsDelete";
import Link from "next/link";
import { useState } from "react";
import { StatusBoard, PatientsTable } from "@/app/lib/data/definition";

export default function PatientsTableComponent(
    { patients } : 
    { patients: PatientsTable[] }
) {

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
                        <div key={patient.id} className="mb-2 w-full rounded-md bg-white p-4">
                            <div className="flex items-center justify-between border-b pb-4">
                            <div>
                                <div className="mb-2 flex items-center">
                                <p className="text-xl"><Link href={`/dashboard/patients/${patient.id}/view`} className="over:bg-sky-100 hover:text-blue-600">{mergeToFullName([patient.first_name,patient.middle_name, patient.last_name])}</Link></p>
                                </div>
                                <p className="text-sm text-gray-500">{patient.birth_year}, {patient.gender}</p>
                            </div>
                            {/*
                            <PatientStatus status={patient.status} />
                            */
                            }
                        </div>
                        <div className="flex w-full items-center justify-between pt-4">
                        <div>
                            <p>{/*formatDateToLocal(patient.lastest_date, 'vi-VN')*/}</p>
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
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Name
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Birth Year
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Phone
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Latest Date
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Gender
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                            <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                            {patientsBoard.list?.map((patient) => (
                            <tr key={patient.id}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">
                                    <p><Link href={`/dashboard/patients/${patient.id}/view`} className="over:bg-sky-100 hover:text-blue-600">{mergeToFullName([patient.first_name,patient.middle_name, patient.last_name])}</Link></p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {patient.birth_year}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {formatPhoneNumber(patient.phone)}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {/*formatDateToLocal(patient.lastest_date, 'vi-VN')*/}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    { (patient.gender == 'female' ? 'Female' : 'Male')
                                     /*
                                    <PatientStatus status={patient.status} />
                                    */
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