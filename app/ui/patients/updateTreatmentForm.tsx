'use client';
import Link from "next/link";
import { useFormState } from 'react-dom';
import { useState } from "react";
import { formatCurrency, formatDateToLocal, getNextDate } from "@/app/lib/utils";
import { TreatmentRecordsForm, StatusBoard, TreatmentRecordsBoard } from "@/app/lib/data/definition";
import TreatmentRecordsTable from "@/app/ui/patients/treatmentRecords/table";
import UpdateTreatmentRecord from "@/app/ui/patients/treatmentRecords/update"
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
import { Button } from "@/app/ui/buttons";
import { updateTreatmentRecords, TreatmentState } from '@/app/lib/data/actions';
import { CreateTreatmentRecord } from "@/app/ui/patients/treatmentRecords/buttons";

export default function UpdateTreatmentForm({
    treatmentRecords
}: {treatmentRecords: TreatmentRecordsForm[]}) {

    const sIndex = treatmentRecords.length - 2;
    
    const initStatusBoard: StatusBoard = {
        status: 0,
        message: ''
    }
    const initTreatmentRecordsBoard: TreatmentRecordsBoard = {
        records: treatmentRecords,
        selectedIndex: sIndex < 0 ? 0 : sIndex,
        creatingNew: true,
        state: initStatusBoard
    }

    const [treatmentRecordsBoard, setTreatmentRecordsBoard] = useState(initTreatmentRecordsBoard);

    const selectedRecord = treatmentRecordsBoard.records[treatmentRecordsBoard.selectedIndex];

    function updateBoard(record: TreatmentRecordsForm, pState: StatusBoard = initStatusBoard) {
        const newTreamentRecordsBoard: TreatmentRecordsBoard = {
            ...treatmentRecordsBoard,
            state: pState
        }
        if (record != null) {
            if (record.isCreated) {
                const emptyRecord: TreatmentRecordsForm = {
                    ...treatmentRecordsBoard.records[treatmentRecordsBoard.records.length-1]
                }
                if (emptyRecord.exam_date === record.exam_date) {
                    emptyRecord.exam_date = getNextDate(emptyRecord.exam_date);
                    emptyRecord.treatments[0].cure_date = emptyRecord.exam_date;
                }

                const newRecords = [...newTreamentRecordsBoard.records, emptyRecord];
                record.isCreated = false;
                newRecords[treatmentRecordsBoard.selectedIndex] = record;
                newTreamentRecordsBoard.records = newRecords;
            }else {
                newTreamentRecordsBoard.records[treatmentRecordsBoard.selectedIndex] = record;
            }

            newTreamentRecordsBoard.records.sort((r1, r2) => {
                const d1 = new Date(r1.exam_date);
                const d2 = new Date(r2.exam_date);

                if (d1 === d2) return 0;
                else if (d1 > d2) return 1;
                else return -1;
            });
        }
        
        setTreatmentRecordsBoard(newTreamentRecordsBoard);
    }

    function removeBoard(pRecord: TreatmentRecordsForm, pState: StatusBoard) {
        const newTreamentRecordsBoard: TreatmentRecordsBoard = {
            ...treatmentRecordsBoard,
            state: pState
        }

        const newRecords = newTreamentRecordsBoard.records.filter((record) => record.exam_date !== pRecord.exam_date);
        newTreamentRecordsBoard.records = newRecords;

        setTreatmentRecordsBoard(newTreamentRecordsBoard);
    }

    function isDateExisting(dateToCheck: string) {
        const arrExamDate: string[] = treatmentRecordsBoard.records.filter((r, index) => index < treatmentRecordsBoard.records.length - 1).map((record) => {
            return record.exam_date;
        });

        return arrExamDate.includes(dateToCheck);
    }
    
    return (
        <div className="mt-4 flow-root">
            <div className="flex items-center justify-between gap-2 mb-3">
                <CreateTreatmentRecord treatmentRecordsBoard={treatmentRecordsBoard} handleBoard={setTreatmentRecordsBoard} />
            </div>
            
            <TreatmentRecordsTable treatmentRecordsBoard={treatmentRecordsBoard} handleBoard={setTreatmentRecordsBoard} handleRemove={removeBoard}/>
            <hr className="m-3"/>
            {treatmentRecordsBoard.state.status === 1 &&  <div className="mt-1 flow-root bg-gray-100 p-2 bg-green-200">
                <p className="text-sm">{treatmentRecordsBoard.state.message}</p>
            </div>}
            {treatmentRecordsBoard.state.status === 2 &&  <div className="mt-1 flow-root bg-gray-100 p-2 bg-red-200">
                <p className="text-sm">{treatmentRecordsBoard.state.message}</p>
            </div>}
            {(treatmentRecordsBoard.creatingNew || !selectedRecord.isCreated) && <>
                <UpdateTreatmentRecord key={`${selectedRecord.exam_date}_${treatmentRecordsBoard.selectedIndex}`} record={selectedRecord} handlesBoard={[updateBoard, isDateExisting]}/>
            </>}

        </div>
    );
}