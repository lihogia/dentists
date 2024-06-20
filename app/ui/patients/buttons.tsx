import { TrashIcon, PlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function UpdatePatient({id}: {id: string}) {
    return (
        <Link
          href={`/dashboard/patients/${id}/edit`}
          className="rounded-md border p-2 hover:bg-gray-100"
        >
          <PencilIcon className="w-5" />
        </Link>
      );    
}

export function DeletePatient({id}: {id: string}) {
    return (
        <form>
            <button className="rounded-md border p-2 hover:bg-gray-100">
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5" />
            </button>
        </form>
    );
}
