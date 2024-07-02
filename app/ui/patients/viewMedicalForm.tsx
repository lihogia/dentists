
import Link from "next/link";
import { Button } from "@/app/ui/buttons";
import { MedicalRecordsForm } from "@/app/lib/data/definition";
import { formatPhoneNumber, mergeToFullName } from "@/app/lib/utils";
import {
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


export default function ViewMedicalForm({
    medicalRecords
}: {medicalRecords: MedicalRecordsForm}) {

    return (
        <form>
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
                            type="number"
                            placeholder="1.6"
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            readOnly
                            value={medicalRecords.height}
                        />
                        <ArrowUpIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                            type="number"
                            placeholder="60"
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            readOnly
                            value={medicalRecords.weight}
                        />
                        <ScaleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                            readOnly
                            value={medicalRecords.blood_pressure_sys}
                        /> /&nbsp; 
                        <input 
                            id="blood_pressure_dia" 
                            name="blood_pressure_dia" 
                            type="number" 
                            className="w-20 rounded-md border border-gray-100 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500" 
                            readOnly
                            value={medicalRecords.blood_pressure_dia} 
                            />

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
                            placeholder="Enter Patient's Phone Number"
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            value={medicalRecords.pulse}
                            readOnly
                        />
                        <HeartIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                                    checked={medicalRecords.hospitalized}
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    />
                                <label 
                                    htmlFor="hospitalized" 
                                    className={clsx(medicalRecords.hospitalized ? "bg-red-200" : "bg-green-200","ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}
                                    >
                                {medicalRecords.hospitalized ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                    </div>
                    {medicalRecords.hospitalized && 
                        <div className="rounded-md border border-gray-100 bg-white px-[14px] py-3 w-full">
                            <label htmlFor="hospitalized_declare" className="mb-2 block text-sm font-medium">
                                Hospitalized declaration
                            </label>
                            <div className="relative">
                                <textarea
                                    id="hospitalized_declare"
                                    name="hospitalized_declare"
                                    className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    value={medicalRecords.hospitalized_declare}
                                    readOnly
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
                                    id="high_blood_pressure" 
                                    name="high_blood_pressure" 
                                    type="checkbox" 
                                    value="true"
                                    checked={medicalRecords.suffered.high_blood} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    disabled
                                    />
                                <label 
                                    htmlFor="high_blood_pressure" 
                                    className={clsx(medicalRecords.suffered.high_blood ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}
                                    >
                                    1. High Blood Pressure: {medicalRecords.suffered.high_blood ? 'Yes' : 'No'}
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
                                    checked={medicalRecords.suffered.ischemic_heart} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    disabled
                                    />
                                <label 
                                    htmlFor="ischemic_heart" 
                                    className={clsx(medicalRecords.suffered.high_blood ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}
                                    >
                                    2. Ischemic Heart Disease: {medicalRecords.suffered.ischemic_heart ? 'Yes' : 'No'}
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
                                    checked={medicalRecords.suffered.diabetes} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    disabled
                                    />
                                <label 
                                    htmlFor="diabetes" 
                                    className={clsx(medicalRecords.suffered.high_blood ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    3. Diabetes: {medicalRecords.suffered.diabetes ? 'Yes' : 'No'}
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
                                    checked={medicalRecords.suffered.bleeding_disorders} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    disabled
                                    />
                                <label 
                                    htmlFor="bleeding_disorders" 
                                    className={clsx(medicalRecords.suffered.high_blood ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    4. Bleeding Disorders: {medicalRecords.suffered.bleeding_disorders ? 'Yes' : 'No'}
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
                                    checked={medicalRecords.suffered.allergies} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    disabled
                                    />
                                <label 
                                    htmlFor="allergies" 
                                    className={clsx(medicalRecords.suffered.high_blood ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    5. Allergies (Medication, Food): {medicalRecords.suffered.allergies ? 'Yes' : 'No'}
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
                                    checked={medicalRecords.suffered.asthma} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    disabled
                                    />
                                <label 
                                    htmlFor="asthma" 
                                    className={clsx(medicalRecords.suffered.high_blood ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    6. Asthma: {medicalRecords.suffered.asthma ? 'Yes' : 'No'}
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
                                    checked={medicalRecords.suffered.epileptic} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    disabled
                                    />
                                <label 
                                    htmlFor="epileptic" 
                                    className={clsx(medicalRecords.suffered.high_blood ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    7. Epileptic: {medicalRecords.suffered.epileptic ? 'Yes' : 'No'}
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
                                    checked={medicalRecords.suffered.hepatitisB} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    disabled
                                    />
                                <label 
                                    htmlFor="hepatitisB" 
                                    className={clsx(medicalRecords.suffered.high_blood ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    8. Hepatitis B: {medicalRecords.suffered.hepatitisB ? 'Yes' : 'No'}
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
                                    checked={medicalRecords.suffered.pregnancy} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    disabled
                                    />
                                <label 
                                    htmlFor="pregnancy" 
                                    className={clsx(medicalRecords.suffered.high_blood ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    9. Pregnancy: {medicalRecords.suffered.pregnancy ? 'Yes' : 'No'}
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
                                    checked={medicalRecords.suffered.other_diseases} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    readOnly
                                    disabled
                                    />
                                <label 
                                    htmlFor="other_diseases" 
                                    className={clsx(medicalRecords.suffered.high_blood ? "bg-red-200" : "bg-green-200", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-gray-600")}>
                                    10. Other Diseases: {medicalRecords.suffered.other_diseases ? 'Yes' : 'No'}
                                </label>
                            </div>
                        </div>
                    </div>
                    {medicalRecords.suffered.other_diseases && 
                        <div className="rounded-md border border-gray-100 bg-white px-[14px] py-3 w-full">
                            <label htmlFor="other_declare" className="mb-2 block text-sm font-medium">
                                Other diseases declaration
                            </label>
                            <div className="relative">
                                <textarea
                                    id="other_declare"
                                    name="other_declare"
                                    className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    value={medicalRecords.suffered.other_declare}
                                    readOnly
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
                className="flex h-10 items-center rounded-lg bg-blue-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                Back
                </Link>
                <Link
                href={`/dashboard/patients/${medicalRecords.pid}/edit`}
                className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                Edit Medical Records
                </Link>
            </div>
        </form>
    );
}