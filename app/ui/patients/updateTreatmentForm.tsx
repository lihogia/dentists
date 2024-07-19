'use client';
import Link from "next/link";
import { useFormState } from 'react-dom';
import { useState } from "react";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";
import { TreatmentRecordsForm, Task, TreatmentRecordsBoard } from "@/app/lib/data/definition";
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

export default function UpdateTreatmentForm({
    treatmentRecords
}: {treatmentRecords: TreatmentRecordsForm[]}) {

    const initTreatmentRecordsBoard: TreatmentRecordsBoard = {
        records: treatmentRecords,
        selectedIndex: 0
    }

    const [treatmentRecordsBoard, setTreatmentRecordsBoard] = useState(initTreatmentRecordsBoard);
    const selectedRecord = treatmentRecordsBoard.records[treatmentRecordsBoard.selectedIndex];

    function updateBoard(record: TreatmentRecordsForm) {
        const newTreamentRecordsBoard: TreatmentRecordsBoard = {
            ...treatmentRecordsBoard
        }
        newTreamentRecordsBoard.records[treatmentRecordsBoard.selectedIndex] = record;
        setTreatmentRecordsBoard(newTreamentRecordsBoard);
    }
    
    return (
        <div className="mt-6 flow-root">
            <TreatmentRecordsTable treatmentRecordsBoard={treatmentRecordsBoard} handleBoard={setTreatmentRecordsBoard} />
            <hr className="m-3"/>
            <UpdateTreatmentRecord key={selectedRecord.exam_date} record={selectedRecord} handleBoard={updateBoard}/>
        </div>
    );
}