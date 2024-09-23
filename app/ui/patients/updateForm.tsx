'use client';
import { useFormState } from 'react-dom';
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { Button } from "@/app/ui/buttons";
import { PatientView } from "@/app/lib/data/definition";
import {
    MinusIcon,
    PlusIcon,
    ClockIcon,
    PhoneIcon,
    HomeIcon,
    UserCircleIcon,
  } from '@heroicons/react/24/outline';
import { updatePatient, State } from '@/app/lib/data/actionsPrisma';
import { formatPhoneNumber, mergeToFullName } from "@/app/lib/utils";


/**
 * Include both create and update form
 * @param1: status = 'create' | 'edit'
 * @param2: patient = null | PatientForm
 */
export default function UpdatePatientForm({strPatient}: {
    strPatient: string
}) {

    const patient = JSON.parse(strPatient);
    const trans = useTranslations('Patients');
    const initialState: State = {
        errors: {},
        message: null
      };
    const [state, dispatch] = useFormState(updatePatient, initialState);

    return (
        <form id='updateForm' action={dispatch}>
            <input type='hidden' name='pid' value={patient.id} />
            <div className="rounded-md bg-gray-50 p-4 md:p-4">
                {/* Patient Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        {trans("table.name")}
                    </label>
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            autoComplete='off'
                            type="text"
                            required={true}
                            placeholder={trans("create.nameplaceholder")}
                            className="peer block w-full rounded-md border border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={patient.fullname.toUpperCase()}
                        />
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="patient-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                        state.errors.name.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                {/* Patient Birth Year */}
                <div className="mb-4">
                    <label htmlFor="byear" className="mb-2 block text-sm font-medium">
                        {trans("table.birthyear")}
                    </label>
                    <div className="relative">
                        <input
                            id="byear"
                            name="birth_year"
                            type="number"
                            required={true}
                            placeholder={trans("create.birthyearplaceholder")}
                            className="peer block w-full rounded-md border border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={patient.birth_year}
                        />
                        <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="patient-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.birth_year &&
                        state.errors.birth_year.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                {/* Patient Gender */}
                <fieldset className="mb-4">
                    <legend className="mb-2 block text-sm font-medium">
                        {trans("table.gender")}
                    </legend>
                    <div className="rounded-md border border-gray-500 bg-white px-[14px] py-3 w-full">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input 
                                    id="gender_female" 
                                    name="gender" 
                                    type="radio" 
                                    value="female" 
                                    defaultChecked={patient.gender === 'female'}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2" />
                                <label 
                                    htmlFor="gender_female" 
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-200 px-3 py-1.5 text-xs font-medium text-gray-600">
                                {trans("table.female")} <MinusIcon className="h-4 w-4" />
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input 
                                    id="gender_male" 
                                    name="gender" 
                                    type="radio" 
                                    value="male" 
                                    defaultChecked={patient.gender === 'male'}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2" />
                                <label 
                                    htmlFor="gender_male" 
                                    className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-blue-200 px-3 py-1.5 text-xs font-medium text-gray-600">
                                {trans("table.male")} <PlusIcon className="h-4 w-4" />
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                {/* Patient Phone Number */}
                <div className="mb-4">
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        {trans("table.phone")}
                    </label>
                    <div className="relative">
                        <input
                            id="phone"
                            name="phone"
                            autoComplete='off'
                            type="text"
                            placeholder={trans("create.genderplaceholder")}
                            className="peer block w-full rounded-md border border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={patient.phone}
                        />
                        <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
                {/* Patient Address */}
                <div className="mb-4">
                    <label htmlFor="address" className="mb-2 block text-sm font-medium">
                        {trans("create.addresslabel")}
                    </label>
                    <div className="relative">
                        <textarea
                            id="address"
                            name="address"
                            autoComplete='off'
                            placeholder={trans("create.addressplaceholder")}
                            className="peer block w-full rounded-md border border-gray-500 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={patient.address}
                        />
                        <HomeIcon className="pointer-events-none absolute left-3 top-1/3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>

                </div>
            </div>
            <div className="mt-6 flex justify-start gap-4">
                <Link
                href="/dashboard/patients"
                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                {trans("buttons.cancel")}
                </Link>
                <Button type="submit">{trans("buttons.save+continue")}</Button>
            </div>
        </form>
    );
}