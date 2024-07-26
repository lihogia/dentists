'use client';
import { formatDateToLocal, formatPhoneNumber, toTitleCase, mergeToFullName, formatCurrency } from "@/app/lib/utils";
import Link from "next/link";
import Status from "@/app/ui/status";
import { InvoicesTable } from "@/app/lib/data/definition";

export default function InvoicesTableComponent(
    {invoices}:
    {invoices: InvoicesTable[]}
) {

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                    {invoices.map((invoice) => (
                        <div key={`${invoice.id}_${invoice.exam_date}`} className="mb-2 w-full rounded-md bg-white p-4 hover:bg-sky-100 hover:text-blue-600">
                            <div 
                                className="flex items-center justify-between border-b pb-4"
                                onClick={(e) => {
                                    document.location.href = `/dashboard/patients/${invoice.id}/view/treatmentRecords`;
                                }}
                                >
                                <div>
                                    <div className="mb-2 flex items-center">
                                        <p className="text-md"><Link href={`/dashboard/patients/${invoice.id}/view/treatmentRecords`}>{invoice.exam_date}</Link></p>
                                    </div>
                                    <p className="text-sm text-gray-500">{invoice.name}</p>
                                </div>
                            </div>
                            <div className="flex w-full items-center justify-between pt-4">
                                <div>
                                    <p>{invoice.amount}</p>
                                </div>
                                <Status status={invoice.paid} text="Paid" />
                            </div>                            
                    </div>
                    ))}
                    </div>
                    <table className="hidden min-w-full text-black md:table">
                        <thead className="rounded-lg text-left text-md font-black">
                        <tr>
                            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Exam Date
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Amount
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Patient
                            </th>
                            <th scope="col" className="px-3 py-5 font-medium">
                            Paid
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white">
                            {invoices.map((invoice) => (
                            <tr 
                                key={`${invoice.id}_${invoice.exam_date}`}
                                className="w-full border-b py-3 text-md last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg hover:bg-sky-100 hover:text-blue-600 hover:font-bold"
                                onClick={(e) => {
                                    document.location.href = `/dashboard/patients/${invoice.id}/view/treatmentRecords`;
                                }}
                            >
                                <td 
                                    className="whitespace-nowrap py-3 pl-6 pr-3 cursor-pointer"
                                    >
                                    <div className="flex items-center gap-3">
                                        <p><Link href={`/dashboard/patients/${invoice.id}/view/treatmentRecords`}>{invoice.exam_date}</Link></p>
                                    </div>
                                </td>
                                <td 
                                    className="whitespace-nowrap px-3 py-3 cursor-pointer"
                                    >
                                    {invoice.amount}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3 cursor-pointer"
                                    >
                                    {invoice.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-3 cursor-pointer"
                                    >
                                    <Status status={invoice.paid} text="Paid" />
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