'use client';
import Link from "next/link";
import { useState } from "react";
import { formatCurrency, formatDateToLocal } from "@/src/app/lib/utils";
import { TreatmentRecordsForm, Task } from "@/src/app/lib/data/definition";
import Status from "@/src/app/ui/status";
import {
    CalendarDaysIcon,
    MagnifyingGlassIcon,
    CurrencyDollarIcon,
    MinusIcon,
    PlusIcon,
    InformationCircleIcon,
    PhoneIcon,
    HeartIcon,
    UserCircleIcon,
    ArrowUpIcon,
    ScaleIcon
  } from '@heroicons/react/24/outline';
import clsx from "clsx";

export default function ViewTreatmentForm({
    treatmentRecords
}: {treatmentRecords: TreatmentRecordsForm[]}) {
    
    const [selectedTreatment, setSelectedTreatment] = useState(treatmentRecords[0]);

    return (
        
        <div className="mt-6 flow-root">
            <div className="ml-5 mb-4 text-sm font-medium">
                <span>Name: {treatmentRecords[0].fullname}</span>
            </div>
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                    {treatmentRecords?.map((record, index) => (
                        <div key={`m_trecord_${record.exam_date}`} className="mb-2 w-full rounded-md bg-white p-4">
                            <div className="flex items-center justify-between pb-2">
                                <div>
                                    <div 
                                        className="mb-2 flex items-center cursor-pointer"
                                        onClick={(e) => {
                                            setSelectedTreatment(record);
                                        }}>
                                        <p className={clsx(selectedTreatment.exam_date === record.exam_date ? "text-blue-600" : "", "text-lg")}>
                                            {record.diagnoses}
                                        </p>
                                    </div>
                                    <p className={clsx(selectedTreatment.exam_date === record.exam_date ? "text-blue-600" : "text-gray-500", "text-sm")}>{formatDateToLocal(record.exam_date)}</p>
                                </div>
                                <Status status={record.paid} text="Paid" />
                            </div>
                        </div>
                    ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Diagnoses
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Examination Date
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Amount
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Paid
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                            {treatmentRecords?.map((record) => (
                            <tr key={`trecord_${record.exam_date}`}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                <td 
                                    className="whitespace-nowrap py-3 pl-3 pr-3 cursor-pointer"
                                    onClick={(e) => {
                                        setSelectedTreatment(record);
                                    }}
                                >
                                    <div className={clsx(selectedTreatment.exam_date === record.exam_date ? "text-blue-600" : "","flex items-center gap-3")}>
                                    <p>{record.diagnoses}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {formatDateToLocal(record.exam_date)}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {formatCurrency(record.amount)}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    <Status status={record.paid} text="Paid" />
                                </td>
                                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                    <div className="flex justify-end gap-3">
                                        {/*
                                        <UpdatePatient id={`${patient.id}`} />
                                        <DeletePatient id={`${patient.id}`} />                            
                                         */}
                                    </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <fieldset className="mb-4 mt-5">
                <legend className="mb-2 block text-sm font-medium">
                    Treatment for the examination on {formatDateToLocal(selectedTreatment.exam_date, 'vi-VN')}
                </legend>
                <div className="border border-gray-100 bg-white w-full">
                    <div className="bg-gray-200 p-2">
                        <label htmlFor="exam_date" className="mb-2 block text-sm font-medium">
                            Examination Date
                        </label>
                        <div className="relative">
                            <input
                                id="exam_date"
                                name="exam_date"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                readOnly
                                value={selectedTreatment.exam_date}
                            />
                            <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    <div className="bg-gray-200 p-2">
                        <label htmlFor="diagnoses" className="mb-2 block text-sm font-medium">
                            Diagnoses
                        </label>
                        <div className="relative">
                            <input
                                id="diagnoses"
                                name="diagnoses"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                readOnly
                                value={selectedTreatment.diagnoses}
                            />
                            <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    <div className="bg-gray-200 p-2">
                        <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                            Amount
                        </label>
                        <div className="relative">
                            <input
                                id="amount"
                                name="amount"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                readOnly
                                value={formatCurrency(selectedTreatment.amount)}
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    <div className="bg-gray-200 p-2">
                        <label htmlFor="paid" className="mb-2 block text-sm font-medium">
                            Paid
                        </label>
                        <div className="relative">
                            <input
                                id="paid"
                                name="paid"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                readOnly
                                value={selectedTreatment.paid? 'Yes': 'No'}
                            />
                            <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    <div className="bg-gray-200 p-2">
                        <div className="bg-gray-200 p-1 pb-1">
                            <span className="mb-2 block text-sm font-medium">
                                Treatment Plan
                            </span>
                        </div>
                        <div className="md:hidden">
                            {selectedTreatment.treatments.map((treatment, index) => (
                                <div key={`m_treatment_${index}`} className="flex items-center justify-between border-b pb-4 p-2 bg-white rounded-md mb-1">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p className="text-md">
                                                {treatment.cure}
                                            </p>
                                        </div>
                                        <p className="text-sm text-gray-500">{formatDateToLocal(treatment.cure_date)}</p>
                                    </div>
                                    {/*
                                    <PatientStatus status={patient.status} />
                                    */
                                    }
                                </div>
                            )
                            )}
                        </div>
                        <table className="hidden md:table min-w-full bg-gray-100 rounded-md">
                            <thead className="rounded-lg text-left text-sm font-normal">
                                <tr>
                                    <td className="p-2">Cure</td>
                                    <td className="p-2">Date</td>
                                    <td className="p-2">Status</td>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {selectedTreatment.treatments.map((treatment, index) => {
                                    return (
                                        <tr key={`treatment_${index}`} className="bg-white">
                                            <td className="p-2">{treatment.cure}</td>
                                            <td className="p-2">{formatDateToLocal(treatment.cure_date)}</td>
                                            <td className="p-2"><Status status={treatment.status} text="Done" /></td>
                                        </tr>
                                    );
                                })
                                }
                                
                            </tbody>
                        </table>

                    </div>

                </div>

            </fieldset>
            <div className="mt-6 flex justify-start gap-4">
                <Link
                href="/dashboard/patients"
                className="flex h-10 items-center rounded-lg bg-blue-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                Back
                </Link>
                <Link
                href={`/dashboard/patients/${treatmentRecords[0].pid}/edit/treatmentRecords`}
                className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                Edit Treatment Records
                </Link>
            </div>

        </div>        
        
    );
}