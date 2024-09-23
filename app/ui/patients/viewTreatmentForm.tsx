'use client';
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";
import { TreatmentRecordsForm, Task } from "@/app/lib/data/definition";
import Status from "@/app/ui/status";
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
    pTreatmentRecords
}: {pTreatmentRecords: TreatmentRecordsForm[]}) {
    const trans = useTranslations('Patients');

    const numberOfItem = pTreatmentRecords.length;
    const treatmentRecords = numberOfItem == 1 ? pTreatmentRecords : pTreatmentRecords.filter((item, index) => index < numberOfItem - 1);
    
    const [selectedTreatment, setSelectedTreatment] = useState(treatmentRecords[0]);

    return (
        
        <div className="mt-6 flow-root">
            <div className="ml-5 mb-4 text-sm font-medium">
                <span>{trans("table.name")}: {treatmentRecords[0].fullname}</span>
            </div>
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                    {treatmentRecords?.map((record, index) => (
                        <div key={`m_trecord_${record.examdate}`} className="mb-2 w-full rounded-md bg-white p-4">
                            <div className="flex items-center justify-between pb-2">
                                <div>
                                    <div 
                                        className="mb-2 flex items-center cursor-pointer"
                                        onClick={(e) => {
                                            setSelectedTreatment(record);
                                        }}>
                                        <p className={clsx(selectedTreatment.examdate === record.examdate ? "text-blue-600" : "", "text-lg")}>
                                            {formatDateToLocal(record.examdate)}
                                        </p>
                                    </div>
                                    <p className={clsx(selectedTreatment.examdate === record.examdate ? "text-blue-600" : "text-gray-500", "text-sm")}>
                                        {formatCurrency(record.amount)}
                                    </p>
                                </div>
                                <Status status={record.paid} text={trans("checkboxes.paid")} />
                            </div>
                            <div className="flex w-full items-center justify-between pt-4">
                                <div>
                                    <p>{record.diagnose}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className="px-3 py-5 font-medium">
                                {trans("viewTreatment.diagnoses")}
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                {trans("viewTreatment.examinationdate")}
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                {trans("viewTreatment.amount")}
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                                {trans("checkboxes.paid")}
                            </th>
                            <th scope="col" className="relative py-3 pl-6 pr-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                            {treatmentRecords?.map((record) => (
                            <tr key={`trecord_${record.examdate}`}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                                <td 
                                    className="whitespace-nowrap py-3 pl-3 pr-3 cursor-pointer"
                                    onClick={(e) => {
                                        setSelectedTreatment(record);
                                    }}
                                >
                                    <div className={clsx(selectedTreatment.examdate === record.examdate ? "text-blue-600" : "","flex items-center gap-3")}>
                                    <p>{record.diagnose}</p>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {formatDateToLocal(record.examdate)}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    {formatCurrency(record.amount)}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3">
                                    <Status status={record.paid} text={trans("checkboxes.paid")} />
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
                    {trans("viewTreatment.treatmentforexamination", {date: formatDateToLocal(selectedTreatment.examdate, 'vi-VN')})}
                </legend>
                <div className="border border-gray-100 bg-white w-full">
                    <div className="bg-gray-200 p-2">
                        <label htmlFor="exam_date" className="mb-2 block text-sm font-medium">
                            {trans("viewTreatment.examinationdate")}
                        </label>
                        <div className="relative">
                            <input
                                id="exam_date"
                                name="exam_date"
                                type="text"
                                className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                readOnly
                                value={selectedTreatment.examdate}
                            />
                            <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    <div className="bg-gray-200 p-2">
                        <label htmlFor="diagnoses" className="mb-2 block text-sm font-medium">
                            {trans("viewTreatment.diagnoses")}
                        </label>
                        <div className="relative">
                            <textarea
                                id="diagnoses"
                                name="diagnoses"
                                className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                readOnly
                                value={selectedTreatment.diagnose}
                            />
                            <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>
                    <div className="bg-gray-200 p-2">
                        <label htmlFor="diagnoses" className="mb-2 block text-sm font-medium">
                            {trans("viewTreatment.treatment")}
                        </label>
                        <div className="relative">
                            <textarea
                                id="treatment"
                                name="treatment"
                                className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                readOnly
                                value={selectedTreatment.treatment}
                            />
                            <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>

                    <div className="bg-gray-200 p-2">
                        <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                            {trans("viewTreatment.amount")}
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
                            {trans("checkboxes.paid")}
                        </label>
                        <div className="relative">
                            <Status status={selectedTreatment.paid} text={trans("checkboxes.paid")} />
                        </div>
                    </div>

                </div>

            </fieldset>
            <div className="mt-6 flex justify-start gap-4">
                <Link
                href="/dashboard/patients"
                className="flex h-10 items-center rounded-lg bg-blue-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                {trans("buttons.back")}
                </Link>
                <Link
                href={`/dashboard/patients/${treatmentRecords[0].pid}/edit/treatmentRecords`}
                className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                {trans("buttons.edittreatmentrecords")}
                </Link>
            </div>

        </div>        
        
    );
}