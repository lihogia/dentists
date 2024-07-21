import { TrashIcon, PlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { TreatmentRecordsBoard } from "@/app/lib/data/definition";

export function CreateTreatmentRecord({treatmentRecordsBoard, handleBoard}: {treatmentRecordsBoard: TreatmentRecordsBoard, handleBoard: Function}) {
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
      <span className="hidden md:block">Create Treatment Record</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </div>
  );
}

export function UpdateTreatmentRecord({id}: {id: string}) {
    return (
        <Link
          href={`/dashboard/patients/${id}/edit`} className="rounded-md border p-2 hover:bg-gray-100">
          <PencilIcon className="w-5" />
        </Link>
      );    
}

export function DeleteTreatmentRecord({id}: {id: string}) {
    return (
        <form>
            <button className="rounded-md border p-2 hover:bg-gray-100">
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5" />
            </button>
        </form>
    );
}
