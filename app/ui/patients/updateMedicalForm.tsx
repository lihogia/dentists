'use client';

import { useFormState } from 'react-dom';
import { useState } from 'react';
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/app/ui/buttons";
import { PatientForm, MedicalRecordsForm } from "@/app/lib/data/definition";
import {
    MinusIcon,
    PlusIcon,
    ClockIcon,
    PhoneIcon,
    HomeIcon,
    UserCircleIcon,
    InformationCircleIcon,
    HeartIcon,
    ArrowUpIcon,
    ScaleIcon
  } from '@heroicons/react/24/outline';
import { updateMedicalReords, MedicalState } from '@/app/lib/data/actions';
import { formatPhoneNumber, mergeToFullName } from "@/app/lib/utils";

export default function UpdateMedicalForm({
    medicalRecords, status
}: {medicalRecords: MedicalRecordsForm, status: string}) {

    const isCreate = (status == 'create');

    const initialState: MedicalState = {
        errors: {},
        message: null
      };
    const [state, dispatch] = useFormState(updateMedicalReords, initialState);

    const initCheckedValues = {
        hospitalized: medicalRecords.hospitalized,
        high_blood: medicalRecords.suffered.high_blood,
        ischemic_heart: medicalRecords.suffered.ischemic_heart,
        diabetes: medicalRecords.suffered.diabetes,
        bleeding_disorders: medicalRecords.suffered.bleeding_disorders,
        allergies: medicalRecords.suffered.allergies,
        asthma: medicalRecords.suffered.asthma,
        epileptic: medicalRecords.suffered.epileptic,
        hepatitisB: medicalRecords.suffered.hepatitisB,
        pregnancy: medicalRecords.suffered.pregnancy,
        other_diseases: medicalRecords.suffered.other_diseases,   
    }
    const [checkedValues, setCheckedValues] = useState(initCheckedValues);


    return (
        <form action={dispatch}>
            <input type='hidden' name='status' value={status} />
            <input type='hidden' name='id' value={medicalRecords.pid} />
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Patient Height */}
                <div className="mb-4">
                    <label htmlFor="height" className="mb-2 block text-sm font-medium">
                        Height (m)
                    </label>
                    <div className="relative">
                        <input
                            id="height"
                            name="height"
                            type="text"
                            placeholder="1.6"
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={isCreate ? '' : medicalRecords.height}
                            required
                        />
                        <ArrowUpIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="patient-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.height &&
                        state.errors.height.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                {/* Patient Weight */}
                <div className="mb-4">
                    <label htmlFor="weight" className="mb-2 block text-sm font-medium">
                        Weight (kg)
                    </label>
                    <div className="relative">
                        <input
                            id="weight"
                            name="weight"
                            type="text"
                            placeholder="60"
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={isCreate ? '' : medicalRecords.weight}
                            required
                        />
                        <ScaleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="patient-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.weight &&
                        state.errors.weight.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                {/* Patient Blood Pressure */}
                <div className="mb-4">
                    <label htmlFor="blood_pressure_sys" className="mb-2 block text-sm font-medium">
                    Blood Pressure (mmHg)
                    </label>
                    <div className="relative">
                        <input
                            id="blood_pressure_sys"
                            name="blood_pressure_sys"
                            type="number"
                            placeholder="120"
                            className="w-20 rounded-md border border-gray-100 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={isCreate ? '' : medicalRecords.blood_pressure_sys}
                            required
                        /> /&nbsp; 
                        <input 
                            id="blood_pressure_dia" 
                            name="blood_pressure_dia" 
                            type="number" 
                            className="w-20 rounded-md border border-gray-100 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500" 
                            defaultValue={isCreate ? '' : medicalRecords.blood_pressure_dia} 
                            required
                            />
                    </div>
                    <div id="patient-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.blood_pressure_sys &&
                        state.errors.blood_pressure_sys.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                    <div id="patient-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.blood_pressure_dia &&
                        state.errors.blood_pressure_dia.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                {/* Patient Pulse */}
                <div className="mb-4">
                    <label htmlFor="pulse" className="mb-2 block text-sm font-medium">
                        Pulse
                    </label>
                    <div className="relative">
                        <input
                            id="pulse"
                            name="pulse"
                            type="text"
                            placeholder="85"
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={isCreate ? '' : medicalRecords.pulse}
                            required
                        />
                        <HeartIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    <div id="patient-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.pulse &&
                        state.errors.pulse.map((error: string) => (
                            <p className="mt-2 text-sm text-red-500" key={error}>
                            {error}
                            </p>
                        ))}
                    </div>
                </div>
                {/* Patient Hospitalized */}
                <fieldset className="mb-4">
                    <legend className="mb-2 block text-sm font-medium">
                        Have you been hospitalized in 5 years recently?
                    </legend>
                    <div className="rounded-md border border-gray-100 bg-white px-[14px] py-3 w-full">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input 
                                    id="hospitalized" 
                                    name="hospitalized" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={medicalRecords.hospitalized}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        setCheckedValues({
                                            ...checkedValues,
                                            hospitalized: e.currentTarget.checked
                                        });
                                    }}
                                    />
                                <label 
                                    htmlFor="hospitalized" 
                                    className={clsx(checkedValues.hospitalized ? "bg-red-200" : "bg-green-200","ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}
                                    >
                                {checkedValues.hospitalized ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                    </div>
                    {checkedValues.hospitalized && 
                        <div className="rounded-md border border-gray-100 bg-white px-[14px] py-3 w-full">
                            <label htmlFor="hospitalized_declare" className="mb-2 block text-sm font-medium">
                                Hospitalized declaration
                            </label>
                            <div className="relative">
                                <textarea
                                    id="hospitalized_declare"
                                    name="hospitalized_declare"
                                    className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={medicalRecords.hospitalized_declare}
                                />
                                <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                    }
                </fieldset>
                {/* Patient Suffereing */}
                <fieldset className="mb-4">
                    <legend className="mb-2 block text-sm font-medium">
                        Are you suffering from the following diseases?
                    </legend>
                    <div className="rounded-md border border-gray-100 bg-white px-[14px] py-3 w-full">
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="high_blood" 
                                    name="high_blood" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={medicalRecords.suffered.high_blood} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        setCheckedValues({
                                            ...checkedValues,
                                            high_blood: e.currentTarget.checked
                                        });
                                    }}
                                />
                                <label 
                                    htmlFor="high_blood" 
                                    className={clsx(checkedValues.high_blood ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}
                                    >
                                    1. High Blood Pressure: {checkedValues.high_blood ? 'Yes' : 'No'}
                                </label>

                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="ischemic_heart" 
                                    name="ischemic_heart" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={medicalRecords.suffered.ischemic_heart} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        setCheckedValues({
                                            ...checkedValues,
                                            ischemic_heart: e.currentTarget.checked
                                        });
                                    }}
                                />
                                <label 
                                    htmlFor="ischemic_heart" 
                                    className={clsx(checkedValues.ischemic_heart ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}
                                    >
                                    2. Ischemic Heart Disease: {checkedValues.ischemic_heart ? 'Yes' : 'No'}
                                </label>

                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="diabetes" 
                                    name="diabetes" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={medicalRecords.suffered.diabetes} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        setCheckedValues({
                                            ...checkedValues,
                                            diabetes: e.currentTarget.checked
                                        });
                                    }}
                                />
                                <label 
                                    htmlFor="diabetes" 
                                    className={clsx(checkedValues.diabetes ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    3. Diabetes: {checkedValues.diabetes ? 'Yes' : 'No'}
                                </label>

                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="bleeding_disorders" 
                                    name="bleeding_disorders" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={medicalRecords.suffered.bleeding_disorders} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        setCheckedValues({
                                            ...checkedValues,
                                            bleeding_disorders: e.currentTarget.checked
                                        });
                                    }}
                                />
                                <label 
                                    htmlFor="bleeding_disorders" 
                                    className={clsx(checkedValues.bleeding_disorders ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    4. Bleeding Disorders: {checkedValues.bleeding_disorders ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="allergies" 
                                    name="allergies" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={medicalRecords.suffered.allergies} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        setCheckedValues({
                                            ...checkedValues,
                                            allergies: e.currentTarget.checked
                                        });
                                    }}
                                />
                                <label 
                                    htmlFor="allergies" 
                                    className={clsx(checkedValues.allergies ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    5. Allergies (Medication, Food): {checkedValues.allergies ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="asthma" 
                                    name="asthma" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={medicalRecords.suffered.asthma} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        setCheckedValues({
                                            ...checkedValues,
                                            asthma: e.currentTarget.checked
                                        });
                                    }}
                                />
                                <label 
                                    htmlFor="asthma" 
                                    className={clsx(checkedValues.asthma ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    6. Asthma: {checkedValues.asthma ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="epileptic" 
                                    name="epileptic" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={medicalRecords.suffered.epileptic} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        setCheckedValues({
                                            ...checkedValues,
                                            epileptic: e.currentTarget.checked
                                        });
                                    }}
                                />
                                <label 
                                    htmlFor="epileptic" 
                                    className={clsx(checkedValues.epileptic ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    7. Epileptic: {checkedValues.epileptic ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="hepatitisB" 
                                    name="hepatitisB" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={medicalRecords.suffered.hepatitisB} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        setCheckedValues({
                                            ...checkedValues,
                                            hepatitisB: e.currentTarget.checked
                                        });
                                    }}
                                />
                                <label 
                                    htmlFor="hepatitisB" 
                                    className={clsx(checkedValues.hepatitisB ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    8. Hepatitis B: {checkedValues.hepatitisB ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="pregnancy" 
                                    name="pregnancy" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={medicalRecords.suffered.pregnancy} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        setCheckedValues({
                                            ...checkedValues,
                                            pregnancy: e.currentTarget.checked
                                        });
                                    }}
                                />
                                <label 
                                    htmlFor="pregnancy" 
                                    className={clsx(checkedValues.pregnancy ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    9. Pregnancy: {checkedValues.pregnancy ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="other_diseases" 
                                    name="other_diseases" 
                                    type="checkbox" 
                                    value="true"
                                    defaultChecked={medicalRecords.suffered.other_diseases} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        setCheckedValues({
                                            ...checkedValues,
                                            other_diseases: e.currentTarget.checked
                                        });
                                    }}
                                />
                                <label 
                                    htmlFor="other_diseases" 
                                    className={clsx(checkedValues.other_diseases ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    10. Other Diseases: {checkedValues.other_diseases ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                    </div>
                    {checkedValues.other_diseases && 
                        <div className="rounded-md border border-gray-100 bg-white px-[14px] py-3 w-full">
                            <label htmlFor="other_declare" className="mb-2 block text-sm font-medium">
                                Other diseases declaration
                            </label>
                            <div className="relative">
                                <textarea
                                    id="other_declare"
                                    name="other_declare"
                                    className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    defaultValue={medicalRecords.suffered.other_declare}
                                />
                                <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                            </div>
                        </div>
                    }
                </fieldset>
            </div>
            <div className="mt-6 flex justify-start gap-4">
                <Link
                href="/dashboard/patients"
                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                Cancel
                </Link>
                <Button type="submit">Save Medical Records</Button>
            </div>
        </form>
    );
}