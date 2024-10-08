import { TrashIcon, PlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';
import { TreatmentRecordsBoard, TreatmentRecordsForm } from "@/src/app/lib/data/definition";
import { deleteTreatmentRecords, TreatmentDeleteState } from '@/src/app/lib/data/actionsKysely';

export function CreateTreatmentRecord({treatmentRecordsBoard, handleBoard}: {treatmentRecordsBoard: TreatmentRecordsBoard, handleBoard: Function}) {
  const trans = useTranslations('Patients');
  const indexOfNewItem = treatmentRecordsBoard.records.length - 1;

  return (
    <div
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
      onClick={(e) => {
        const newTreamentRecordsBoard = {
          ...treatmentRecordsBoard,
          selectedIndex: indexOfNewItem,
          creatingNew: true,
          state: {
            status: 0,
            message: ''
          }
        }
        handleBoard(newTreamentRecordsBoard);
      }}
    >
      <span className="hidden md:block">{trans("buttons.createtreatmentrecord")}</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </div>
  );
}

export function CreateTreatmentTask({ handleRecord }: { handleRecord: Function }) {
  const trans = useTranslations('Patients');
  return (
    <div
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer"
      onClick={(e) => {
        handleRecord();
      }}
    >
      <span className="hidden md:block">{trans("buttons.createcure")}</span>{' '}
      <PlusIcon className="h-4 md:ml-3 text-lg" />
    </div>
  );
}

/*
export function UpdateTreatmentRecord({id}: {id: string}) {
    return (
        <Link
          href={`/dashboard/patients/${id}/edit`} className="rounded-md border p-2 hover:bg-gray-100">
          <PencilIcon className="w-5" />
        </Link>
      );    
}
*/

export function DeleteTreatmentRecord({record, index, handleRemove}: {record: TreatmentRecordsForm, index: number, handleRemove: Function}) {
  const trans = useTranslations('Patients');

  const initialState: TreatmentDeleteState = {
    errors: {},
    message: null,
    submitState: 0,
    id: "0"
  };

  const [state, dispatch] = useFormState(deleteTreatmentRecords, initialState);

  if (state.submitState != 0 && state.id != "0") {
        
    handleRemove(record, {status: state.submitState, message: state.message});
    state.id = "0";
    //state = initialState;
}


    return (
        <form id={`form_${index}`} name={`form_${index}`} action={dispatch}>
            <input type='hidden' name='id' defaultValue={record.pid} />
            <input type='hidden' id='examDate' name='examDate' defaultValue={record.exam_date} />
            
            <button 
              type="submit"
              className="rounded-md border p-2 hover:bg-gray-100"
              onClick={(e) => {
                const isDelete = confirm(`${trans("buttons.confirmrmrecord")}`);
                const delForm = document.getElementById(`form_${index}`) as HTMLFormElement;
                if (!isDelete) {
                  e.preventDefault();
                }                  
              }}
            >
              <span className="sr-only">{trans("buttons.delete")}</span>
              <TrashIcon className="w-5" />
            </button>
        </form>
    );
}

export function DeleteTreatmentTask({index, handleRemove} : {index: number, handleRemove: Function}) {
  const trans = useTranslations('Patients');
  return (
    <div key={`formCure_${index}`}>
      <button 
        className="rounded-md border p-2 hover:bg-gray-100"
        onClick={(e) => {
          const isDelete = confirm(`${trans("buttons.confirmrmcure")}`);
          //const delForm = document.getElementById(`formCure_${index}`) as HTMLFormElement;
          if (!isDelete) {
            e.preventDefault();
          }else {
            handleRemove(index);
            e.preventDefault();
          }
        }}
      >
        <span className="sr-only">{trans("buttons.delete")}</span>
        <TrashIcon className="w-5" />
      </button>      
    </div>
  );
}