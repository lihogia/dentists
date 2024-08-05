import clsx from "clsx";
import { useTranslations } from 'next-intl';
import { TreatmentRecordsForm, TreatmentRecordsBoard } from "@/src/app/lib/data/definition";
import { formatCurrency, formatDateToLocal } from "@/src/app/lib/utils";
import Status from "@/src/app/ui/status";
import { DeleteTreatmentRecord } from "@/src/app/ui/patients/treatmentRecords/buttons";

export default function TreatmentRecordsTable({
    treatmentRecordsBoard, handleBoard, handleRemove
    }: { 
        treatmentRecordsBoard: TreatmentRecordsBoard,
        handleBoard: Function,
        handleRemove: Function
    }) {

    const trans = useTranslations('Patients');
    const numberOfItem = treatmentRecordsBoard.records.length;
    const treatmentRecords = treatmentRecordsBoard.records.filter((item, index) => index < numberOfItem - 1);
    const selectedRecords = treatmentRecordsBoard.records[treatmentRecordsBoard.selectedIndex];

    return (
        <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            <div className="md:hidden">
            {treatmentRecords?.map((record, index) => (
                <div 
                    key={`m_trecord_${record.exam_date}`} 
                    className={clsx(clsx(selectedRecords.exam_date === record.exam_date ? "bg-sky-100 text-blue-600" : "bg-white" , "mb-2 w-full rounded-md p-4"))}
                    onClick={(e) => {
                        const newBoard = {
                            ...treatmentRecordsBoard,
                            selectedIndex: index,
                            state: {
                                status: 0,
                                message: ''
                            }
                        }
                        handleBoard(newBoard);
                    }}>
                    <div className="flex items-center justify-between pb-2 ">
                        <div>
                        <div className="mb-2 flex items-center cursor-pointer">
                            <p className={clsx(selectedRecords.exam_date === record.exam_date ? "text-blue-600" : "", "text-lg")}>
                                {formatDateToLocal(record.exam_date)}
                            </p>
                        </div>
                        <p className={clsx(selectedRecords.exam_date === record.exam_date ? "text-blue-600" : "text-gray-500", "text-sm")}>
                            {formatCurrency(record.amount)}
                        </p>
                        </div>
                        <Status status={record.paid} text={trans("checkboxes.paid")} />
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                        <div>
                            <p>{record.diagnoses}</p>
                        </div>
                        <div className="flex justify-end gap-2">
                            <DeleteTreatmentRecord record={record} index={index} handleRemove={handleRemove}/>
                        </div>

                    </div>
                </div>
            ))}
            </div>
            <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                    <th scope="col" className="px-3 py-5 font-medium">
                    {trans("viewTreatment.examinationdate")}
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                    {trans("viewTreatment.diagnoses")}
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                    {trans("viewTreatment.amount")}
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                    {trans("viewTreatment.payment")}
                    </th>
                    <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody className="bg-white">
                    {treatmentRecords?.map((record, index) => (
                    <tr 
                        key={`trecord_${record.exam_date}`}
                        className={clsx(selectedRecords.exam_date === record.exam_date ? "bg-sky-100 text-blue-600" : " cursor-pointer", 
                            "w-full border-b py-3 text-sm last-of-type:border-none")}
                        onClick={(e) => {
                            const newBoard = {
                                ...treatmentRecordsBoard,
                                selectedIndex: index,
                                state: {
                                    status: 0,
                                    message: ''
                                }                                    
                            }
                            handleBoard(newBoard);
                        }}
                        >
                        <td className="whitespace-nowrap px-3 py-3">
                            {formatDateToLocal(record.exam_date)}
                        </td>
                        <td className="whitespace-nowrap py-3 pl-3 pr-3 cursor-pointer">
                            <div className={clsx(selectedRecords.exam_date === record.exam_date ? "text-blue-600" : "","flex items-center gap-3")}>
                            <p>{record.diagnoses}</p>
                            </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                            {formatCurrency(record.amount)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-3">
                            <Status status={record.paid} text={trans("checkboxes.paid")} />
                        </td>
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                            <div className="flex justify-start gap-3">
                                <DeleteTreatmentRecord record={record} index={index} handleRemove={handleRemove}/>
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
    );
}