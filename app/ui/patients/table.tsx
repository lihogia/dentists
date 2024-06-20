import Image from "next/image";
import PatientStatus from "@/app/ui/patients/status";
import { formatDateToLocal, formatPhoneNumber } from "@/app/lib/utils";
import { UpdatePatient, DeletePatient } from "@/app/ui/patients/buttons";

export default function PatientsTable() {
    const patients = [
        {
            id: 1234,
            name: 'Bo Hue Phuong',
            birth_year: 1956,
            phone: '0903068892',
            lastest_date: '05/14/2024',
            status: 'done'
        },
        {
            id: 1235,
            name: 'Tran Tue Lam',
            birth_year: 1964,
            phone: '0907967892',
            lastest_date: '06/11/2024',
            status: 'in_progress'
        },
    ];

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                    {patients?.map((patient) => (
                        <div key={patient.id} className="mb-2 w-full rounded-md bg-white p-4">
                            <div className="flex items-center justify-between border-b pb-4">
                            <div>
                                <div className="mb-2 flex items-center">
                                <p className="text-xl">{patient.name}</p>
                                </div>
                                <p className="text-sm text-gray-500">{patient.birth_year}</p>
                            </div>
                            <PatientStatus status={patient.status} />
                        </div>
                        <div className="flex w-full items-center justify-between pt-4">
                        <div>
                            <p>{formatDateToLocal(patient.lastest_date, 'vi-VN')}</p>
                            <p>{formatPhoneNumber(patient.phone)}</p>
                        </div>
                        <div className="flex justify-end gap-2">
                            <UpdatePatient id={`${patient.id}`} />
                            <DeletePatient id={`${patient.id}`} />                            
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
                            Status
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                            <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                            {patients?.map((patient) => (
                            <tr key={patient.id}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex items-center gap-3">
                                    <p>{patient.name}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {patient.birth_year}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {formatPhoneNumber(patient.phone)}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {formatDateToLocal(patient.lastest_date, 'vi-VN')}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    <PatientStatus status={patient.status} />
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        <UpdatePatient id={`${patient.id}`} />
                                        <DeletePatient id={`${patient.id}`} />                            
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