import Link from "next/link";
import { useFormState } from 'react-dom';
import { useState } from "react";
import { useTranslations } from 'next-intl';
import clsx from "clsx";
import { TreatmentRecordsForm, Task } from "@/src/app/lib/data/definition";
import { formatCurrency, formatDateToLocal, checkAndConvertDate } from "@/src/app/lib/utils";
import Status from "@/src/app/ui/status";
import {
    CalendarDaysIcon,
    MagnifyingGlassIcon,
    CurrencyDollarIcon,
  } from '@heroicons/react/24/outline';
import { Button } from "@/src/app/ui/buttons";
import { updateTreatmentRecords, TreatmentState } from '@/src/app/lib/data/actionsPrisma';
import { CreateTreatmentTask, DeleteTreatmentTask } from "@/src/app/ui/patients/treatmentRecords/buttons";
import { stat } from "fs";

export default function UpdateTreatmentRecord(
    {record, handlesBoard}:
    {record: TreatmentRecordsForm, handlesBoard: Function[]}
) {

    const trans = useTranslations('Patients');

    const initialState: TreatmentState = {
        errors: {},
        message: null,
        submitState: 0,
        id: "0"
      };
    const [state, dispatch] = useFormState(updateTreatmentRecords, initialState);
    const [workingRecord, setWorkingRecord] = useState(record);

    //console.log(`id timestamep: ${state.id}, param: ${timestamp}`);
    if (state.submitState != 0 && state.id != "0") {
        let updateRecord: TreatmentRecordsForm | null = workingRecord;
        if (state.submitState == 2) {
            updateRecord = null;
        }
        handlesBoard[0](updateRecord, {status: state.submitState, message: state.message});
        state.id = "0";
        //state = initialState;
    }
/*
    function hideSubmitStateNotification() {
       // handleBoard(null, {status: 0, message: ''})
    }
*/
    function disableSubmitButton(isDisabled: boolean) {
        const subBut = document.getElementById('submitButton') as HTMLInputElement;
        subBut.disabled = isDisabled;
        if (isDisabled) {
            subBut.className = 'flex h-10 items-center rounded-lg bg-blue-300 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50';
        }else {
            subBut.className = 'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50';
        }
        
    }
/*
    function addNewTreatmentTask() {

        const today = new Date();
        const [iD, dateString] = checkAndConvertDate(today.toLocaleDateString('vi-VN'), false);
      
        const newTask: Task = {
            cure: "",
            cure_date: dateString,
            status: false
        
        }
        const newTreatments = [...workingRecord.treatment, newTask];
        const newRecord = {
            ...workingRecord,
            treatments: newTreatments
        }
        const input_TreatmentPlan = document.getElementById("hid_treatmentplan") as HTMLTextAreaElement;
        input_TreatmentPlan.value = JSON.stringify(newTreatments);

        setWorkingRecord(newRecord);
    }

    function removeTreatmentTask(pIndex: number) {
        const newTreatments = workingRecord.treatments.filter((treatment, index) => index != pIndex);
        const newRecord = {
            ...workingRecord,
            treatments: newTreatments
        }
        const input_TreatmentPlan = document.getElementById("hid_treatmentplan") as HTMLTextAreaElement;
        input_TreatmentPlan.value = JSON.stringify(newTreatments);
        setWorkingRecord(newRecord);
    }
*/
    return(
        <form id="update_form" action={dispatch}>
            <input type='hidden' name='status' defaultValue={record.isCreated ? "create" : "edit"} />
            <input type='hidden' name='id' defaultValue={record.pid} />
            <input type='hidden' id='old_exam_date' name='old_exam_date' defaultValue={record.examdate} />
            <input type="hidden" id="hid_exam_date" name="hid_exam_date" defaultValue={workingRecord.examdate}/>
            <input type="hidden" id="hid_amount" name="hid_amount" defaultValue={workingRecord.amount}/>
            {/*}
            <textarea 
                    key={`${workingRecord.examdate}_treatments`}
                    id="hid_treatmentplan" 
                    name="hid_treatmentplan" 
                    defaultValue={JSON.stringify(workingRecord.treatments)} 
                    className="w-full hidden"/>
*/}
            <div className="mt-1 flow-root bg-gray-100">
                <fieldset className="mt-1" key={`${workingRecord.examdate}`}>
                    <legend className="block text-sm font-bold bg-gray-100 w-full p-2 pb-0">
                        {trans("viewTreatment.treatmentforexamination", {date: formatDateToLocal(workingRecord.examdate, 'vi-VN')})}
                    </legend>
                    <div className="border border-gray-100 w-full p-2 rounded-md">
                        <div className="p-2">
                            <label htmlFor="exam_date" className="mb-2 block text-sm font-medium">
                                {trans("viewTreatment.examinationdate")}
                            </label>
                            <div className="relative">
                                <input
                                    id="exam_date"
                                    name="exam_date"
                                    type="text"
                                    className="peer block w-full rounded-md border border-gray-600 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"                                 
                                    placeholder="dd/mm/yyyy"
                                    defaultValue={formatDateToLocal(workingRecord.examdate)}
                                    pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
                                    onChange={(e) => {
                                        const [isDate, newDate] = checkAndConvertDate(e.currentTarget.value);

                                       if (isDate !== "true") {
                                            e.currentTarget.className = "peer block w-full rounded-md border-2 focus:bg-red-300 border-red-600 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500";
                                            disableSubmitButton(true);
                                            return false;                                        
                                        } 
                                        if (handlesBoard[1](newDate)) {
                                            disableSubmitButton(true);
                                            return false;
                                        }
                                        
                                        e.currentTarget.className = "peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500";
                                        disableSubmitButton(false);

                                        //const oldHidExamDate = document.getElementById("old_exam_date") as HTMLInputElement;
                                        const hidExamDate = document.getElementById("hid_exam_date") as HTMLInputElement;
                                        hidExamDate.value = newDate;

                                        const nRecord = {
                                            ...workingRecord,
                                            examdate: newDate
                                        }
                                        setWorkingRecord(nRecord);
                                    }}
                                />
                                <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                        <div className="p-2">
                            <label htmlFor="diagnose" className="mb-2 block text-sm font-medium">
                                {trans("viewTreatment.diagnoses")}
                            </label>
                            <div className="relative">
                                <textarea
                                    id="diagnose"
                                    name="diagnose"
                                    className="peer block w-full rounded-md border border-gray-600 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 h-20"
                                    defaultValue={workingRecord.diagnose}
                                    onChange={(e) => {
                                        
                                        const nRecord = {
                                            ...workingRecord,
                                            diagnose: e.currentTarget.value
                                        }
                                        setWorkingRecord(nRecord);                                        

                                    }}
                                />
                                <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                        <div className="p-2">
                            <label htmlFor="treatment" className="mb-2 block text-sm font-medium">
                                {trans("viewTreatment.treatment")}
                            </label>
                            <div className="relative">
                                <textarea
                                    id="treatment"
                                    name="treatment"
                                    className="peer block w-full rounded-md border border-gray-600 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 h-40"
                                    defaultValue={workingRecord.treatment}
                                    onChange={(e) => {
                                        
                                        const nRecord = {
                                            ...workingRecord,
                                            treatment: e.currentTarget.value
                                        }
                                        setWorkingRecord(nRecord);                                        

                                    }}
                                />
                                <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>

                        <div className="p-2">
                            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                                {trans("viewTreatment.amount")}
                            </label>
                            <div className="relative">
                                <input
                                    id="amount"
                                    name="amount"
                                    type="text"
                                    inputMode="decimal"
                                    className="peer block w-full rounded-md border border-gray-600 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={workingRecord.amount}
                                    onChange={(e) => {
                                        //hideSubmitStateNotification();
                                        let textValue = e.currentTarget.value;

                                        let nValue = Number.parseInt(textValue);
                                        if (isNaN(nValue)) {
                                            //console.log('NaN');
                                            e.currentTarget.className = "peer block w-full rounded-md border-2 focus:bg-red-300 border-red-600 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500";
                                            disableSubmitButton(true);
                                            return false;
                                        }
                                        
                                        e.currentTarget.className = "peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500";
                                        const input_amount: HTMLInputElement = document.getElementById("hid_amount") as HTMLInputElement;                                    
                                        input_amount.value = `${nValue}`;
                                        
                                        const nRecord = {
                                            ...workingRecord,
                                            amount: nValue
                                        }

                                        disableSubmitButton(false);
                                        setWorkingRecord(nRecord);                                        

                                    }}
                                />
                                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                        <div className="p-2">
                            <label htmlFor="paid" className="mb-2 block text-sm font-medium">
                                {trans("checkboxes.paid")}
                            </label>
                            <div className="flex items-center px-3">
                                <input 
                                    id="paid" 
                                    name="paid" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={workingRecord.paid}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        //hideSubmitStateNotification();
                                        const nRecord = {
                                            ...workingRecord,
                                            paid: e.currentTarget.checked
                                        }
                                        setWorkingRecord(nRecord);
                                    }}
                                    />
                                <label 
                                    htmlFor="paid" 
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-medium text-gray-600">
                                    <Status status={workingRecord.paid} text={trans("checkboxes.paid")} />
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="mt-4 mb-4 flex justify-start gap-4">
                <Link
                    href="/dashboard/patients"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                    {trans("buttons.cancel")}
                </Link>
                <Button 
                    id="submitButton"
                    type="submit"
                    onClick={(e) => {
                        const hidExamDate = document.getElementById("hid_exam_date") as HTMLInputElement;
                        //const input_TreatmentPlan = document.getElementById("hid_treatmentplan") as HTMLTextAreaElement;
                        //if (hidExamDate.value !== workingRecord.exam_date) {
                        //console.log(hidExamDate.value);
                            const nRecord = {
                                ...workingRecord,
                                exam_date: hidExamDate.value, 
                                //treatment: JSON.parse(input_TreatmentPlan.value)
                            }
                            setWorkingRecord(nRecord);    
                        //}
                    }}
                    
                >{trans("buttons.savetreatment")}</Button>
            </div>
        </form>
    );
}