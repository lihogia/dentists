import { PlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export function CreatePatient() {
  const trans = useTranslations('Patients');

  return (
    <Link
      href="/dashboard/patients/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{trans("buttons.createpatient")}</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdatePatient({id}: {id: string}) {
    return (
        <Link
          href={`/dashboard/patients/${id}/edit/treatmentRecords`} className="rounded-md border p-2 hover:bg-gray-100">
          <PencilIcon className="w-5" />
        </Link>
      );    
}

/*
export function DeletePatientComponent({id, handlePatientRemove}: {id: string, handlePatientRemove: Function}) {
  const initialState: DeletePatientState = {
    errors: {},
    message: null,
    submitState: 0,
    timestamp: "0"
  }

  const [state, dispatch] = useFormState(deletePatient, initialState);

  if (state.submitState != 0 && state.timestamp != "0") {
    handlePatientRemove(id, {status: state.submitState, message: state.message});
    state.timestamp = "0";
  }

  return (
      <form id={`form_patient_${id}`} action={dispatch}>
          <input type='hidden' name='id' value={id} />
          <button 
            type="submit"
            className="rounded-md border p-2 hover:bg-gray-100"
            onClick={(e) => {
              const isDelete = confirm('Are you sure to remove this patient ?');
              //const delForm = document.getElementById(`formCure_${index}`) as HTMLFormElement;
              if (!isDelete) {
                e.preventDefault();
              }else {
                //handleRemove(index);
                e.preventDefault();
              }      
            }}
          >
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5" />
          </button>
      </form>
  );
}
*/