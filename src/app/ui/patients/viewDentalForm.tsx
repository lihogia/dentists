'use client';
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { DentalRecordsForm } from "@/src/app/lib/data/definition";
import clsx from "clsx";
import {
    InformationCircleIcon,
  } from '@heroicons/react/24/outline';

export default function ViewDentalForm({
    dentalRecords
}:{dentalRecords: DentalRecordsForm}) {
    const trans = useTranslations('Patients');

    const ordersU: number[] = [];
    const ordersL: number[] = [];
    for (let i=8; i>=1; i--) {
        ordersU.push(i);
    }
    for (let i=1; i<=8; i++) {
        ordersL.push(i);
    }

    const teethStatus = [
        dentalRecords.tooth_diagram.upper_left,
        dentalRecords.tooth_diagram.upper_right,
        dentalRecords.tooth_diagram.lower_left,
        dentalRecords.tooth_diagram.lower_right
    ];

    function getLayoutFromToothStatus(status: string) {
        let layout = ["", ""]; // 0: tailwind , 1: symbol

        const arrStatus = status.split(',');
        if (arrStatus.length > 1) {
            layout[0] = 'bg-red-600 text-xl text-white font-bold';
            if (arrStatus.includes('root_problem')) {
                layout[1] = layout[1].concat('√');
            }
            if (arrStatus.includes('occlusal_incisal_cavities')) {
                layout[1] = layout[1].concat('⊚');
            }
            if (arrStatus.includes('outside_cavities')) {
                layout[1] = layout[1].concat('⚆');
            }        
        }else {
            switch(arrStatus[0]) {
                case 'tooth_missing':
                    layout[0] = 'bg-red-600 text-3xl text-white font-bold';
                    layout[1] = '⊗';
                    break;
                case 'root_problem':
                    layout[0] = 'bg-red-600 text-xl text-white font-bold';
                    layout[1] = '√';
                    break;
                case 'occlusal_incisal_cavities':
                    layout[0] = 'bg-red-600 text-3xl text-white font-bold';
                    layout[1] = '⊚';
                    break;
                case 'outside_cavities':
                    layout[0] = 'bg-red-600 text-3xl text-white font-bold';
                    layout[1] = '⚆';
                    break;
                default:
                    layout = ["bg-green-700", "🦷"];
                    break;
            } 
        }
        return layout;
    }

    return (
        <form>
            <div className="rounded-md bg-gray-50 p-4 md:p-3">
                <div className="mb-4 text-sm font-medium">
                    <span>{trans("table.name")}: {dentalRecords.fullname}</span>
                </div>
                {/* Tooth Chart */}
                <fieldset className="mb-4">
                    <legend className="mb-2 block text-sm font-medium">
                        {trans("viewDental.toothchart")}
                    </legend>
                    <div className="md:hidden block rounded-md px-[14px] py-3 w-full m-0">
                        <table>
                            <tbody>
                            <tr>
                                <td className="text-center">{trans("viewDental.ur")}</td>
                                <td></td>
                                <td className="text-center">{trans("viewDental.ul")}</td>
                            </tr>
                            {ordersU.map((value, index) => {
                                const [ styleR, symbolR ] = getLayoutFromToothStatus(teethStatus[0][index]);
                                const [ styleL, symbolL ] = getLayoutFromToothStatus(teethStatus[1][index]);
                                return (
                                    <tr key={`upper_order_${index}`}>
                                        <td key={`ur_${index}`} className={clsx(styleR, "px-6 h-9 w-9 py-2 text-center border-2 border-gray-200")}>{symbolR}</td>
                                        <td className="text-center p-2 border-2 border-gray-200 font-bold">{value}</td>
                                        <td key={`ul_${index}`} className={clsx(styleL, "px-6 h-9 w-9 py-2 text-center border-2 border-gray-200")}>{symbolL}</td>
                                    </tr>
                                );
                            }
                            )}
                            <tr>
                                <td className="text-center">{trans("viewDental.lr")}</td>
                                <td></td>
                                <td className="text-center">{trans("viewDental.ll")}</td>
                            </tr>
                            {ordersL.map((value, index) => {
                                const [ styleR, symbolR ] = getLayoutFromToothStatus(teethStatus[2][index]);
                                const [ styleL, symbolL ] = getLayoutFromToothStatus(teethStatus[3][index]);
                                return (
                                    <tr key={`upper_order_${index}`}>
                                        <td key={`ur_${index}`} className={clsx(styleR, "px-6 h-9 w-9 py-2 text-center border-2 border-gray-200")}>{symbolR}</td>
                                        <td className="text-center p-2 border-2 border-gray-200 font-bold">{value}</td>
                                        <td key={`ul_${index}`} className={clsx(styleL, "px-6 h-9 w-9 py-2 text-center border-2 border-gray-200")}>{symbolL}</td>
                                    </tr>
                                );
                            }
                            )}

                            </tbody>
                        </table>
                    </div>
                    <div className="hidden md:block rounded-md px-[9px] py-3 w-full m-0">
                        <table>
                            <tbody>
                            <tr>
                                <td colSpan={8} className="text-center text-sm p-2 border-2 border-gray-200">{trans("viewDental.upperright")}</td>
                                <td className="bg-gray-300">&nbsp;</td>
                                <td colSpan={8} className="text-center text-sm p-2 border-2 border-gray-200">{trans("viewDental.upperleft")}</td>
                            </tr>
                            <tr className="bg-gray-500">
                                {teethStatus[0].toReversed().map((tooth, index) => {
                                    const [ style, symbol ] = getLayoutFromToothStatus(tooth);
                                    return (
                                        <td key={`ur_${index}`} className={clsx(style, "px-6 h-9 w-9 py-2 text-center border-2 border-gray-200")}>{symbol}</td>
                                    );
                                })}
                                <td className="bg-gray-300">&nbsp;</td>
                                {teethStatus[1].map((tooth, index) => {
                                    const [ style, symbol ] = getLayoutFromToothStatus(tooth);
                                    return (
                                        <td key={`ul_${index}`} className={clsx(style, "px-6 h-9 w-9 py-2 text-center border-2 border-gray-200")}>{symbol}</td>
                                    );
                                })}

                            </tr>
                            <tr className="bg-white">
                                {ordersU.map((value, index) => <td key={`des_${index}`} className="text-center px-5 border-2 border-gray-200 font-bold">{value}</td>
                                )}
                                <td className="bg-gray-300">&nbsp;</td>
                                {ordersL.map((value, index) => <td key={`des_${index}`} className="text-center px-5 border-2 border-gray-200 font-bold">{value}</td>
                                )}
                            </tr>
                            <tr className="bg-gray-500">
                                {teethStatus[2].toReversed().map((tooth, index) => {
                                    const [ style, symbol ] = getLayoutFromToothStatus(tooth);
                                    return (
                                        <td key={`br_${index}`} className={clsx(style, "px-6 h-9 w-9 py-2 text-center border-2 border-gray-200")}>{symbol}</td>
                                    );
                                })}
                                <td className="bg-gray-300">&nbsp;</td>
                                {teethStatus[3].map((tooth, index) => {
                                    const [ style, symbol ] = getLayoutFromToothStatus(tooth);
                                    return (
                                        <td key={`bl_${index}`} className={clsx(style, "px-6 h-9 w-9 py-2 text-center border-2 border-gray-200")}>{symbol}</td>
                                    );
                                })}

                            </tr>
                            <tr>
                                <td colSpan={8} className="text-center text-sm p-2 border-2 border-gray-200">{trans("viewDental.lowerright")}</td>
                                <td className="bg-gray-300">&nbsp;</td>
                                <td colSpan={8} className="text-center text-sm p-2 border-2 border-gray-200">{trans("viewDental.lowerleft")}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </fieldset>
                {/* Dental Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        {trans("viewDental.description")}
                    </label>
                    <div className="relative">
                        <textarea
                            id="description"
                            name="description"
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            readOnly
                            value={dentalRecords.description}
                        />
                        <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
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
                href={`/dashboard/patients/${dentalRecords.pid}/edit/dentalRecords`}
                className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                {trans("buttons.editdentalrecords")}
                </Link>
            </div>

        </form>
    );
}