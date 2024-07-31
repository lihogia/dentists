import Link from "next/link";
import { useFormState } from 'react-dom';
import { useState } from "react";
import clsx from "clsx";
import { TreatmentRecordsForm, Task } from "@/src/app/lib/data/definition";
import { formatCurrency, formatDateToLocal, checkAndConvertDate } from "@/src/app/lib/utils";
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
import { Button } from "@/src/app/ui/buttons";
import { updateTreatmentRecords, TreatmentState } from '@/src/app/lib/data/actions';
import { CreateTreatmentTask, DeleteTreatmentTask } from "@/src/app/ui/patients/treatmentRecords/buttons";
import { stat } from "fs";

export default function UpdateTreatmentRecord(
    {record, handlesBoard}:
    {record: TreatmentRecordsForm, handlesBoard: Function[]}
) {

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

    function hideSubmitStateNotification() {
       // handleBoard(null, {status: 0, message: ''})
    }

    function disableSubmitButton(isDisabled: boolean) {
        const subBut = document.getElementById('submitButton') as HTMLInputElement;
        subBut.disabled = isDisabled;
        if (isDisabled) {
            subBut.className = 'flex h-10 items-center rounded-lg bg-blue-300 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50';
        }else {
            subBut.className = 'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50';
        }
        
    }

    function addNewTreatmentTask() {

        const today = new Date();
        const [iD, dateString] = checkAndConvertDate(today.toLocaleDateString('vi-VN'), false);
      
        const newTask: Task = {
            cure: "",
            cure_date: dateString,
            status: false
        
        }
        const newTreatments = [...workingRecord.treatments, newTask];
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

    return(
        <form id="update_form" action={dispatch}>
            <input type='hidden' name='status' defaultValue={record.isCreated ? "create" : "edit"} />
            <input type='hidden' name='id' defaultValue={record.pid} />
            <input type='hidden' id='old_exam_date' name='old_exam_date' defaultValue={record.exam_date} />
            <input type="hidden" id="hid_exam_date" name="hid_exam_date" defaultValue={workingRecord.exam_date}/>
            <input type="hidden" id="hid_amount" name="hid_amount" defaultValue={workingRecord.amount}/>
            <textarea 
                    key={`${workingRecord.exam_date}_treatments`}
                    id="hid_treatmentplan" 
                    name="hid_treatmentplan" 
                    defaultValue={JSON.stringify(workingRecord.treatments)} 
                    className="w-full hidden"/>

            <div className="mt-1 flow-root bg-gray-100">
                <fieldset className="mt-1" key={`${workingRecord.exam_date}`}>
                    <legend className="block text-sm font-bold bg-gray-100 w-full p-2 pb-0">
                        Treatment for the examination on {formatDateToLocal(workingRecord.exam_date)}
                    </legend>
                    <div className="border border-gray-100 w-full p-2 rounded-md">
                        <div className="p-2">
                            <label htmlFor="exam_date" className="mb-2 block text-sm font-medium">
                                Examination Date
                            </label>
                            <div className="relative">
                                <input
                                    id="exam_date"
                                    name="exam_date"
                                    type="text"
                                    className="peer block w-full rounded-md border border-gray-600 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"                                 
                                    placeholder="dd/mm/yyyy"
                                    defaultValue={formatDateToLocal(workingRecord.exam_date)}
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
                                            exam_date: newDate
                                        }
                                        setWorkingRecord(nRecord);
                                    }}
                                />
                                <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                        <div className="p-2">
                            <label htmlFor="diagnoses" className="mb-2 block text-sm font-medium">
                                Diagnoses
                            </label>
                            <div className="relative">
                                <textarea
                                    id="diagnoses"
                                    name="diagnoses"
                                    className="peer block w-full rounded-md border border-gray-600 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={workingRecord.diagnoses}
                                    onChange={(e) => {
                                        
                                        const nRecord = {
                                            ...workingRecord,
                                            diagnoses: e.currentTarget.value
                                        }
                                        setWorkingRecord(nRecord);                                        

                                    }}
                                />
                                <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                        <div className="p-2">
                            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                                Amount
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
                                        hideSubmitStateNotification();
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
                                Payment
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
                                    <Status status={workingRecord.paid} text="Paid" />
                                </label>
                            </div>
                        </div>
                        <div className="p-2 border border-gray-300 rounded-full rounded-md">
                            <div className="p-1 pb-1">
                                <span className="mb-2 block text-sm font-medium">
                                    Cure Plan
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-2 m-2 mt-1">
                                <CreateTreatmentTask handleRecord={addNewTreatmentTask}/>
                            </div>
                            <div className="md:hidden">
                                {workingRecord.treatments.map((treatment, index) => (
                                    <div 
                                        key={`m_treatment_${workingRecord.exam_date}_${index}`} 
                                        className="flex items-center justify-between border-b border-gray-300 p-2 bg-white rounded-md mb-4">
                                        <div className="w-full">
                                            <div className="mb-2 flex items-center w-full">
                                                <input 
                                                    id={`m_treatment_cure_${index}`}
                                                    name={`m_treatment_cure_${index}`}
                                                    type="text"
                                                    defaultValue={treatment.cure}
                                                    className="p-2 cursor-pointer border border-gray-600 bg-white rounded-md w-full"
                                                    onChange={(e) => {
                                                        //hideSubmitStateNotification();
                                                        const input_TreatmentPlan = document.getElementById("hid_treatmentplan") as HTMLTextAreaElement;
                                                        const newTreatment = {
                                                            ...treatment
                                                        }
                                                        newTreatment.cure = e.currentTarget.value;

                                                        const nTreatmentPlan = [...workingRecord.treatments];
                                                        nTreatmentPlan[index] = newTreatment;
                                                        input_TreatmentPlan.value = JSON.stringify(nTreatmentPlan);

                                                        const nRecord = {
                                                            ...workingRecord,
                                                            treatments: nTreatmentPlan
                                                        }
                                                        setWorkingRecord(nRecord);
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <input 
                                                    id={`m_treatment_cure_date_${index}`}
                                                    name={`m_treatment_cure_date_${index}`}
                                                    type="text"
                                                    defaultValue={formatDateToLocal(treatment.cure_date)}
                                                    className="p-2 cursor-pointer border border-gray-600 bg-white rounded-md w-full mr-2"
                                                    onChange={(e) => {
                                                        hideSubmitStateNotification();
                                                        const textValue = e.currentTarget.value;
                                                        if (textValue.length != 10) {
                                                            e.currentTarget.className = "p-2 cursor-pointer focus:bg-red-300 border-2 border-red-600 bg-white rounded-md w-full mr-2";
                                                            disableSubmitButton(true);
                                                            return false;
                                                        }
                    
                                                        const [isDate, newDate] = checkAndConvertDate(textValue);
                                                        if (isDate !== "true") {
                                                            e.currentTarget.className = "p-2 cursor-pointer focus:bg-red-300 border-2 border-red-600 bg-white rounded-md w-full mr-2";
                                                            disableSubmitButton(true);
                                                            return false;                                        
                                                        }
                                                        
                                                        e.currentTarget.className = "p-2 cursor-pointer border-2 border-gray-300 bg-white rounded-md w-full mr-2";

                                                        const input_TreatmentPlan = document.getElementById("hid_treatmentplan") as HTMLTextAreaElement;
                                                        const newTreatment = {
                                                            ...treatment
                                                        }
                                                        newTreatment.cure_date = newDate;
                                                        const nTreatmentPlan = [...workingRecord.treatments];
                                                        nTreatmentPlan[index] = newTreatment;
                                                        input_TreatmentPlan.value = JSON.stringify(nTreatmentPlan);
                                                        disableSubmitButton(false);

                                                        const nRecord = {
                                                            ...workingRecord,
                                                            treatments: nTreatmentPlan
                                                        }
                                                        setWorkingRecord(nRecord);                

                                                    }}
                                                />
                                            </div>
                                            <div className="text-sm text-gray-500 flex items-center mt-2 ">
                                                <input 
                                                    id={`m_treatment_status_${index}`}
                                                    name={`m_treatment_status_${index}`}
                                                    type="checkbox"
                                                    value="true"
                                                    defaultChecked={treatment.status}
                                                    className="cursor-pointer border border-gray-600 bg-white rounded-md"
                                                    onChange={(e) => {
                                                        hideSubmitStateNotification();
                                                        const input_TreatmentPlan = document.getElementById("hid_treatmentplan") as HTMLTextAreaElement;
                                                        const newTreatment = {
                                                            ...treatment
                                                        }
                                                        newTreatment.status = e.currentTarget.checked;
                                                        const nTreatmentPlan = [...workingRecord.treatments];
                                                        nTreatmentPlan[index] = newTreatment;
                                                        input_TreatmentPlan.value = JSON.stringify(nTreatmentPlan);

                                                        const nRecord = {
                                                            ...workingRecord,
                                                            treatments: nTreatmentPlan 
                                                        }
                                                        setWorkingRecord(nRecord);
                                                    }}
                                                /> 
                                                <label 
                                                    htmlFor={`treatment_status_${index}`} 
                                                    className="flex cursor-pointer items-center rounded-full px-2 font-medium text-gray-600">
                                                    <Status status={treatment.status} text="Done" />
                                                </label>
                                                {workingRecord.treatments.length > 1 && <DeleteTreatmentTask index={index} handleRemove={removeTreatmentTask} />}
                                            </div>
                                        </div>
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
                                        <td className="p-2">Delete</td>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {workingRecord.treatments.map((treatment, index) => {
                                        return (
                                            <tr key={`treatment_${workingRecord.exam_date}_${index}`} className="bg-white">
                                                <td className="p-2">
                                                    <input 
                                                        id={`treatment_cure_${index}`}
                                                        name={`treatment_cure_${index}`}
                                                        type="text"
                                                        defaultValue={treatment.cure}
                                                        className="p-2 cursor-pointer border border-gray-600 bg-white rounded-md w-full mr-2"
                                                        onChange={(e) => {
                                                            //hideSubmitStateNotification();
                                                            const input_TreatmentPlan = document.getElementById("hid_treatmentplan") as HTMLTextAreaElement;
                                                            //const treatmentsObjs = JSON.parse(input_TreatmentPlan.value);

                                                            const newTreatment = {
                                                                ...treatment
                                                            }
                                                            newTreatment.cure = e.currentTarget.value;

                                                            const nTreatmentPlan = [...workingRecord.treatments];
                                                            nTreatmentPlan[index] = newTreatment;
                                                            input_TreatmentPlan.value = JSON.stringify(nTreatmentPlan);

                                                            const nRecord = {
                                                                ...workingRecord,
                                                                treatments: nTreatmentPlan 
                                                            }
                                                            setWorkingRecord(nRecord);
    
                                                        }}
                                                    />    
                                                </td>
                                                <td className="p-2">
                                                    <input 
                                                        id={`treatment_cure_date_${index}`}
                                                        name={`treatment_cure_date_${index}`}
                                                        type="text"
                                                        defaultValue={formatDateToLocal(treatment.cure_date)}
                                                        className="p-2 cursor-pointer border border-gray-600 bg-white rounded-md w-full mr-2"
                                                        onChange={(e) => {
                                                            //hideSubmitStateNotification();
                                                            const textValue = e.currentTarget.value;
                        
                                                            const [isDate, newDate] = checkAndConvertDate(textValue);
                                                            if (isDate !== "true") {
                                                                e.currentTarget.className = "p-2 cursor-pointer focus:bg-red-300 border-2 border-red-600 bg-white rounded-md w-full mr-2";
                                                                return false;                                        
                                                            }
                                                            
                                                            e.currentTarget.className = "p-2 cursor-pointer border-2 border-gray-300 bg-white rounded-md w-full mr-2";

                                                            const input_TreatmentPlan = document.getElementById("hid_treatmentplan") as HTMLTextAreaElement;
                                                            const newTreatment = {
                                                                ...treatment
                                                            }
                                                            newTreatment.cure_date = newDate;
                                                            const nTreatmentPlan = [...workingRecord.treatments];
                                                            nTreatmentPlan[index] = newTreatment;
                                                            input_TreatmentPlan.value = JSON.stringify(nTreatmentPlan);

                                                            /*const nRecord = {
                                                                ...workingRecord,
                                                                treatments: nTreatmentPlan 
                                                            }
                                                            setWorkingRecord(nRecord);    */
                                                        }}
                                                    />    
                                                </td>
                                                <td className="p-2">
                                                    <div className="flex items-center px-3">
                                                    <input 
                                                        id={`treatment_status_${index}`}
                                                        name={`treatment_status_${index}`}
                                                        type="checkbox"
                                                        value="true"
                                                        defaultChecked={treatment.status}
                                                        className="cursor-pointer border-2 border-gray-300 bg-white rounded-md"
                                                        onChange={(e) => {
                                                            hideSubmitStateNotification();
                                                            const input_TreatmentPlan = document.getElementById("hid_treatmentplan") as HTMLTextAreaElement;
                                                            const newTreatment = {
                                                                ...treatment
                                                            }
                                                            newTreatment.status = e.currentTarget.checked;
                                                            const nTreatmentPlan = [...workingRecord.treatments];
                                                            nTreatmentPlan[index] = newTreatment;
                                                            input_TreatmentPlan.value = JSON.stringify(nTreatmentPlan);

                                                            const nRecord = {
                                                                ...workingRecord,
                                                                treatments: nTreatmentPlan 
                                                            }
                                                            setWorkingRecord(nRecord);
                                                        }}
                                                    /> 
                                                    <label 
                                                        htmlFor={`treatment_status_${index}`} 
                                                        className="flex cursor-pointer items-center rounded-full px-2 font-medium text-gray-600">
                                                        <Status status={treatment.status} text="Done" />
                                                    </label>
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    {workingRecord.treatments.length > 1 && <DeleteTreatmentTask index={index} handleRemove={removeTreatmentTask} />}
                                                </td>
                                            </tr>
                                        );
                                    })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </fieldset>
            </div>
            <div className="mt-4 mb-4 flex justify-start gap-4">
                <Link
                    href="/dashboard/patients"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                    Cancel
                </Link>
                <Button 
                    id="submitButton"
                    type="submit"
                    onClick={(e) => {
                        const hidExamDate = document.getElementById("hid_exam_date") as HTMLInputElement;
                        const input_TreatmentPlan = document.getElementById("hid_treatmentplan") as HTMLTextAreaElement;
                        //if (hidExamDate.value !== workingRecord.exam_date) {
                        //console.log(hidExamDate.value);
                            const nRecord = {
                                ...workingRecord,
                                exam_date: hidExamDate.value, 
                                treatments: JSON.parse(input_TreatmentPlan.value)
                            }
                            setWorkingRecord(nRecord);    
                        //}
                    }}
                    
                >Save Treatment</Button>
            </div>
        </form>
    );
}