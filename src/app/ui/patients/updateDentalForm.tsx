'use client';
import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';
import { ChangeEvent, useState } from "react";
import { DentalRecordsForm, TeethStatus } from "@/src/app/lib/data/definition";
import { Button } from "@/src/app/ui/buttons";
import Link from "next/link";
import clsx from "clsx";
import {
    InformationCircleIcon,
  } from '@heroicons/react/24/outline';
  import { updateDentalRecords, DentalState } from '@/src/app/lib/data/actionsKysely';

export default function ViewDentalForm({
    dentalRecords
}:{dentalRecords: DentalRecordsForm}) {

    const trans = useTranslations('Patients');

    const initialState: DentalState = {
        errors: {},
        message: null
      };
    const [state, dispatch] = useFormState(updateDentalRecords, initialState);


    const ordersU: number[] = [];
    const ordersL: number[] = [];
    for (let i=8; i>=1; i--) {
        ordersU.push(i);
    }
    for (let i=1; i<=8; i++) {
        ordersL.push(i);
    }

    type Tooth = {
        positionX: number,
        positionY: number,
        status: string
    }

    const teethStatusForm = {
        tooth_diagram: dentalRecords.tooth_diagram,
        selected_x: 0,
        selected_y: 0
    }

    const [teethStatus, setTeethStatus] = useState(teethStatusForm);
    const selectedTooth: Tooth = {
        positionX: teethStatus.selected_x,
        positionY: teethStatus.selected_y,
        status: teethStatus.tooth_diagram[teethStatus.selected_x][teethStatus.selected_y]
    }

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

    function updateStatus(e: ChangeEvent, status: string) {
        const curTooth: Tooth = {
            ...selectedTooth
        }

        const curTarget = e.currentTarget as HTMLInputElement;
        if (curTarget.checked) {
            switch (status) {
                case "tooth_missing":
                    curTooth.status = status;
                    break;
                case "root_problem":
                case "occlusal_incisal_cavities":
                case "outside_cavities":
                    if (curTooth.status === "good" || curTooth.status === "tooth_missing") {
                        curTooth.status = status;
                    }else {
                        curTooth.status += `,${status}`;
                    }
                    break;
            }            
        }else {
            switch (status) {
                case "tooth_missing":
                    curTooth.status = "good";
                    break;
                case "root_problem":
                case "occlusal_incisal_cavities":
                case "outside_cavities":
                    const arrStatus = curTooth.status.split(',');
                    if (arrStatus.length == 1) {
                        curTooth.status = "good";
                    }else {
                        const rArrStatus = arrStatus.filter(item => item != status);
                        curTooth.status = rArrStatus.join(',');
                    }                    
                    break;
            }
        }
        updateToothStatus(curTooth);
        
    }

    function updateToothStatus(changeTooth: Tooth) {

        const newTeethStatus: TeethStatus = [
            [...teethStatus.tooth_diagram[0]],
            [...teethStatus.tooth_diagram[1]],
            [...teethStatus.tooth_diagram[2]],
            [...teethStatus.tooth_diagram[3]],
        ];
        newTeethStatus[changeTooth.positionX][changeTooth.positionY] = changeTooth.status;

        //console.log(newTeethStatus);
        setTeethStatus({
            tooth_diagram: newTeethStatus,
            selected_x: changeTooth.positionX,
            selected_y: changeTooth.positionY
        });
    }

    return (
        <form id='updateDentalForm' action={dispatch}>
            <input type='hidden' name='status' value={dentalRecords.isCreated ? 'create' : 'edit'} />
            <input type='hidden' name='id' value={dentalRecords.pid} />
            <input type='hidden' id='ur_tooth_diagram' name='ur_tooth_diagram' value={teethStatus.tooth_diagram[0].join(';')}/>
            <input type='hidden' id='ul_tooth_diagram' name='ul_tooth_diagram' value={teethStatus.tooth_diagram[1].join(';')}/>
            <input type='hidden' id='lr_tooth_diagram' name='lr_tooth_diagram' value={teethStatus.tooth_diagram[2].join(';')}/>
            <input type='hidden' id='ll_tooth_diagram' name='ll_tooth_diagram' value={teethStatus.tooth_diagram[3].join(';')}/>
            <div className="rounded-md bg-gray-50 p-2 md:p-2 md:pl-2">
                <div className="ml-3 mt-2 mb-2 text-sm font-medium">
                    <span>{trans("table.name")}: {dentalRecords.fullname}</span>
                </div>
                {/* Tooth Chart */}
                <fieldset className="mb-4">
                    <legend className="ml-3 block text-sm font-medium">
                        {trans("viewDental.toothchart")}
                    </legend>

                <div className="md:hidden block rounded-md px-[14px] py-3 w-full">
                        <table>
                            <tbody>
                            <tr>
                                <td className="text-center">{trans("viewDental.ur")}</td>
                                <td></td>
                                <td className="text-center">{trans("viewDental.ul")}</td>
                            </tr>
                            {ordersU.map((value, pIndex) => {
                                const index = 7 - pIndex;
                                const [ styleR, symbolR ] = getLayoutFromToothStatus(teethStatus.tooth_diagram[0][index]);
                                const [ styleL, symbolL ] = getLayoutFromToothStatus(teethStatus.tooth_diagram[1][index]);
                                const selectedStyleR = (selectedTooth.positionX == 0 && selectedTooth.positionY == index) ? "border-4 border-black" : "border-2 border-gray";
                                const selectedStyleL = (selectedTooth.positionX == 1 && selectedTooth.positionY == index) ? "border-4 border-black" : "border-2 border-gray";
                                return (
                                    <tr key={`upper_order_${index}`}>
                                        <td 
                                            key={`ur_${index}`} 
                                            className={clsx(styleR, clsx(selectedStyleR, "px-6 h-8 w-8 py-2 text-center cursor-pointer"))}
                                            onClick={() => {
                                                const changeTooth: Tooth = {
                                                    positionX: 0,
                                                    positionY: index,
                                                    status: teethStatus.tooth_diagram[0][index]
                                                }
                                                updateToothStatus(changeTooth);        
                                            }}
                                        >{symbolR}</td>
                                        <td className="text-center p-2 border-2 border-gray-200 font-bold">{value}</td>
                                        <td 
                                            key={`ul_${index}`} 
                                            className={clsx(styleL, clsx(selectedStyleL, "px-6 h-8 w-8 py-2 text-center cursor-pointer"))}
                                            onClick={() => {
                                                const changeTooth: Tooth = {
                                                    positionX: 1,
                                                    positionY: index,
                                                    status: teethStatus.tooth_diagram[1][index]
                                                }
                                                updateToothStatus(changeTooth);        
                                            }}
                                        >{symbolL}</td>
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
                                const [ styleR, symbolR ] = getLayoutFromToothStatus(teethStatus.tooth_diagram[2][index]);
                                const [ styleL, symbolL ] = getLayoutFromToothStatus(teethStatus.tooth_diagram[3][index]);
                                const selectedStyleR = (selectedTooth.positionX == 2 && selectedTooth.positionY == index) ? "border-4 border-black" : "border-2 border-gray";
                                const selectedStyleL = (selectedTooth.positionX == 3 && selectedTooth.positionY == index) ? "border-4 border-black" : "border-2 border-gray";
                                return (
                                    <tr key={`upper_order_${index}`}>
                                        <td 
                                            key={`ur_${index}`} 
                                            className={clsx(styleR, clsx(selectedStyleR, "px-4 h-8 w-8 py-2 text-center cursor-pointer"))}
                                            onClick={() => {
                                                const changeTooth: Tooth = {
                                                    positionX: 2,
                                                    positionY: index,
                                                    status: teethStatus.tooth_diagram[2][index]
                                                }
                                                updateToothStatus(changeTooth);        
                                            }}
                                        >{symbolR}</td>
                                        <td className="text-center p-2 border-2 border-gray-200 font-bold">{value}</td>
                                        <td 
                                            key={`ul_${index}`} 
                                            className={clsx(styleL, clsx(selectedStyleL, "px-4 h-8 w-8 py-2 text-center cursor-pointer"))}
                                            onClick={() => {
                                                const changeTooth: Tooth = {
                                                    positionX: 3,
                                                    positionY: index,
                                                    status: teethStatus.tooth_diagram[3][index]
                                                }
                                                updateToothStatus(changeTooth);        
                                            }}

                                        >{symbolL}</td>
                                    </tr>
                                );
                            }
                            )}

                            </tbody>
                        </table>
                    </div>
                    <div className="hidden md:block rounded-md px-[10px] py-3 w-full m-1 ml-0">
                        <table>
                            <tbody>
                            <tr>
                                <td colSpan={8} className="text-center text-sm p-2 border-2 border-gray-200">{trans("viewDental.upperright")}</td>
                                <td className="bg-gray-300">&nbsp;</td>
                                <td colSpan={8} className="text-center text-sm p-2 border-2 border-gray-200">{trans("viewDental.upperleft")}</td>
                            </tr>
                            <tr className="bg-gray-500">
                                {teethStatus.tooth_diagram[0].toReversed().map((tooth, index) => {
                                    const [ style, symbol ] = getLayoutFromToothStatus(tooth);
                                    const selectedStyle = (selectedTooth.positionX == 0 && selectedTooth.positionY + index == 7) ? "border-4 border-black" : "border-2 border-gray";
                                    return (
                                        <td 
                                            key={`ur_${index}`} 
                                            className={clsx(style, clsx(selectedStyle, "px-6 h-9 w-9 py-2 text-center cursor-pointer"))}
                                            onClick={() => {
                                                const changeTooth: Tooth = {
                                                    positionX: 0,
                                                    positionY: 7 - index,
                                                    status: tooth
                                                }
                                                updateToothStatus(changeTooth);        
                                            }}
                                        >{symbol}</td>
                                    );
                                })}
                                <td className="bg-gray-300">&nbsp;</td>
                                {teethStatus.tooth_diagram[1].map((tooth, index) => {
                                    const [ style, symbol ] = getLayoutFromToothStatus(tooth);
                                    const selectedStyle = (selectedTooth.positionX == 1 && selectedTooth.positionY == index) ? "border-4 border-black" : "border-2 border-gray";
                                    return (
                                        <td 
                                            key={`ul_${index}`} 
                                            className={clsx(style, clsx(selectedStyle, "px-6 h-9 w-9 py-2 text-center cursor-pointer"))}
                                            onClick={() => {
                                                const changeTooth: Tooth = {
                                                    positionX: 1,
                                                    positionY: index,
                                                    status: tooth
                                                }
                                                updateToothStatus(changeTooth);        
                                            }}
                                        >{symbol}</td>
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
                                {teethStatus.tooth_diagram[2].toReversed().map((tooth, index) => {
                                    const [ style, symbol ] = getLayoutFromToothStatus(tooth);
                                    const selectedStyle = (selectedTooth.positionX == 2 && selectedTooth.positionY + index == 7) ? "border-4 border-black" : "border-2 border-gray";
                                    return (
                                        <td 
                                            key={`br_${index}`} 
                                            className={clsx(style, clsx(selectedStyle, "px-6 h-9 w-9 py-2 text-center cursor-pointer"))}
                                            onClick={() => {
                                                const changeTooth: Tooth = {
                                                    positionX: 2,
                                                    positionY: 7 - index,
                                                    status: tooth
                                                }
                                                updateToothStatus(changeTooth);        
                                            }}
                                        >{symbol}</td>
                                    );
                                })}
                                <td className="bg-gray-300">&nbsp;</td>
                                {teethStatus.tooth_diagram[3].map((tooth, index) => {
                                    const [ style, symbol ] = getLayoutFromToothStatus(tooth);
                                    const selectedStyle = (selectedTooth.positionX == 3 && selectedTooth.positionY == index) ? "border-4 border-black" : "border-2 border-gray";
                                    return (
                                        <td 
                                            key={`bl_${index}`} 
                                            className={clsx(style, clsx(selectedStyle, "px-6 h-9 w-9 py-2 text-center cursor-pointer"))}
                                            onClick={() => {
                                                const changeTooth: Tooth = {
                                                    positionX: 3,
                                                    positionY: index,
                                                    status: tooth
                                                }
                                                updateToothStatus(changeTooth);        
                                            }}
                                        >{symbol}</td>
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
                    <div className="ml-2 rounded-md border border-gray-100 bg-white px-[14px] py-3 w-full" key={`selected_${selectedTooth.positionX}_${selectedTooth.positionY}`}>
                        <div className="flex gap-4 mb-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="status_tooth_missing" 
                                    name="status_tooth_missing" 
                                    type="checkbox" 
                                    value="true"
                                    checked={selectedTooth.status.includes("tooth_missing")} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        updateStatus(e, "tooth_missing");
                                    }}
                                />
                                <label 
                                    htmlFor="status_tooth_missing" 
                                    className={clsx(selectedTooth.status.includes("tooth_missing") ? "bg-red-200" : "", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-gray-900")}
                                    >
                                    {trans("editDental.toothmissing")}
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="status_root_problem" 
                                    name="status_root_problem" 
                                    type="checkbox" 
                                    value="true"
                                    checked={selectedTooth.status.includes("root_problem")} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        updateStatus(e, "root_problem");
                                    }}
                                />
                                <label 
                                    htmlFor="status_root_problem" 
                                    className={clsx(selectedTooth.status.includes("root_problem") ? "bg-red-200" : "", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-gray-900")}
                                    >
                                    {trans("editDental.rootproblem")}
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="status_occlusal_incisal_cavities" 
                                    name="status_occlusal_incisal_cavities" 
                                    type="checkbox" 
                                    value="true"
                                    checked={selectedTooth.status.includes("occlusal_incisal_cavities")} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        updateStatus(e, "occlusal_incisal_cavities");
                                    }}
                                />
                                <label 
                                    htmlFor="status_occlusal_incisal_cavities" 
                                    className={clsx(selectedTooth.status.includes("occlusal_incisal_cavities") ? "bg-red-200" : "", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-gray-900")}
                                    >
                                    {trans("editDental.insidecavities")}
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <div className="flex items-center">
                                &nbsp;&nbsp;
                                <input 
                                    id="status_outside_cavities" 
                                    name="status_outside_cavities" 
                                    type="checkbox" 
                                    value="true"
                                    checked={selectedTooth.status.includes("outside_cavities")} 
                                    className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    onChange={(e) => {
                                        updateStatus(e, "outside_cavities");
                                    }}
                                />
                                <label 
                                    htmlFor="status_outside_cavities" 
                                    className={clsx(selectedTooth.status.includes("outside_cavities") ? "bg-red-200" : "", "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-gray-900")}
                                    >
                                    {trans("editDental.outsidecavities")}
                                </label>
                            </div>
                        </div>                        
                    </div>
                </fieldset>
                {/* Dental Description */}
                <div className="mb-4 ml-2">
                    <label htmlFor="description" className="m-2 block text-sm font-medium">
                        {trans("viewDental.description")}
                    </label>
                    <div className="relative">
                        <textarea
                            id="description"
                            name="description"
                            className="peer block w-full rounded-md border border-gray-100 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={dentalRecords.description}
                        />
                        <InformationCircleIcon className="pointer-events-none absolute left-3 top-1/3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

            </div>
            <div className="mt-6 mb-4 flex justify-start gap-4">
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