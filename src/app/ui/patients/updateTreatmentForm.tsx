'use client';
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { getNextDate } from "@/src/app/lib/utils";
import { TreatmentRecordsForm, StatusBoard, TreatmentRecordsBoard } from "@/src/app/lib/data/definition";
import TreatmentRecordsTable from "@/src/app/ui/patients/treatmentRecords/table";
import UpdateTreatmentRecord from "@/src/app/ui/patients/treatmentRecords/update"
import { CreateTreatmentRecord } from "@/src/app/ui/patients/treatmentRecords/buttons";

export default function UpdateTreatmentForm({
    treatmentRecords
}: {treatmentRecords: TreatmentRecordsForm[]}) {
    const trans = useTranslations('Patients');

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
                if (emptyRecord.examdate === record.examdate) {
                    emptyRecord.examdate = getNextDate(emptyRecord.examdate);
                    //emptyRecord.treatments[0].cure_date = emptyRecord.examdate;
                }

                const newRecords = [...newTreamentRecordsBoard.records, emptyRecord];
                record.isCreated = false;
                newRecords[treatmentRecordsBoard.selectedIndex] = record;
                newTreamentRecordsBoard.records = newRecords;
            }else {
                newTreamentRecordsBoard.records[treatmentRecordsBoard.selectedIndex] = record;
            }

            newTreamentRecordsBoard.records.sort((r1, r2) => {
                const d1 = new Date(r1.examdate);
                const d2 = new Date(r2.examdate);

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

        const newRecords = newTreamentRecordsBoard.records.filter((record) => record.examdate !== pRecord.examdate);
        newTreamentRecordsBoard.records = newRecords;

        setTreatmentRecordsBoard(newTreamentRecordsBoard);
    }

    function isDateExisting(dateToCheck: string) {
        const arrExamDate: string[] = treatmentRecordsBoard.records.filter((r, index) => index < treatmentRecordsBoard.records.length - 1).map((record) => {
            return record.examdate;
        });

        return arrExamDate.includes(dateToCheck);
    }
    
    return (
        <div className="mt-4 flow-root">
            <div className="ml-5 mb-4 text-sm font-medium">
                <span>{trans("table.name")}: {treatmentRecords[0].fullname}</span>
            </div>
            <div className="flex items-center justify-between gap-2 mb-3 ml-4">
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
                <UpdateTreatmentRecord key={`${selectedRecord.examdate}_${treatmentRecordsBoard.selectedIndex}`} record={selectedRecord} handlesBoard={[updateBoard, isDateExisting]}/>
            </>}
            

        </div>
    );
}