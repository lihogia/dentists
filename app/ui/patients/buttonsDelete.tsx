import { useFormState } from "react-dom";
import { TrashIcon, PlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { DeletePatientState, deletePatient } from "@/app/lib/data/actions";


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
          <input type='hidden' name='id' defaultValue={id} />
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
                //e.preventDefault();
              }      
            }}
          >
            <span className="sr-only">Delete</span>
            <TrashIcon className="w-5" />
          </button>
      </form>
  );
}