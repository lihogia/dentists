
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { PatientForm } from "@/src/app/lib/data/definition";
import { formatPhoneNumber, mergeToFullName } from "@/src/app/lib/utils";
import {
    MinusIcon,
    PlusIcon,
    ClockIcon,
    PhoneIcon,
    HomeIcon,
    UserCircleIcon,
  } from '@heroicons/react/24/outline';


export default function ViewPatientForm({
    patient
}: {patient: PatientForm}) {

    const trans = useTranslations('Patients');

    return (
        <form>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Patient Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        {trans("table.name")}
                    </label>
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete='off'
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            readOnly
                            value={mergeToFullName([patient.first_name, patient.middle_name, patient.last_name])}
                        />
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                            name="birthyear"
                            type="number"
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            readOnly
                            value={patient.birth_year}
                        />
                        <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
                {/* Patient Gender */}
                <fieldset className="mb-4">
                    <legend className="mb-2 block text-sm font-medium">
                        {trans("table.gender")}
                    </legend>
                    <div className="rounded-md border border-gray-100 bg-white px-[14px] py-3 w-full">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input 
                                    id="gender_female" 
                                    name="gender" 
                                    type="radio" 
                                    value="female" 
                                    checked={patient.gender === 'female'}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    />
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
                                    checked={patient.gender === 'male'}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2" 
                                    readOnly
                                    />
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
                        {trans("viewInfo.phonelabel")}
                    </label>
                    <div className="relative">
                        <input
                            id="phone"
                            name="phone"
                            autoComplete='off'
                            type="text"
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            value={formatPhoneNumber(patient.phone)}
                            readOnly
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
                            placeholder="Enter Patient's Address"
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            value={patient.address}
                            readOnly
                        />
                        <HomeIcon className="pointer-events-none absolute left-3 top-1/3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>

                </div>
            </div>
            <div className="mt-6 flex justify-start gap-4">
                <Link
                href="/dashboard/patients"
                className="flex h-10 items-center rounded-lg bg-blue-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                {trans("buttons.back")}
                </Link>
                <Link
                href={`/dashboard/patients/${patient.id}/edit`}
                className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                {trans("buttons.editpatientinfo")}
                </Link>
            </div>
        </form>
    );
}