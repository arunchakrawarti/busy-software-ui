"use client";

import { itemOptions } from "@/config/SalesDummyData";

const ItemRow = ({ item }) => {
    return (
        <tr className="border-b border-slate-200 hover:bg-slate-50">

            <td className="px-3 py-2 min-w-[240px]">
                <select
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#14ADD6]"
                >
                    <option value="">
                        Select Item
                    </option>

                    {itemOptions.map((option) => (
                        <option
                            key={option.id}
                            value={option.id}
                        >
                            {option.name}
                        </option>
                    ))}
                </select>
            </td>

            <td className="px-3 py-2 w-28">
                <input
                    readOnly
                    value="8471"
                    className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                />
            </td>

            <td className="px-3 py-2 w-24">
                <input
                    type="number"
                    defaultValue={1}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-center outline-none focus:border-[#14ADD6]"
                />
            </td>

            <td className="px-3 py-2 w-24">
                <input
                    readOnly
                    value="Nos"
                    className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-center"
                />
            </td>

            <td className="px-3 py-2 w-32">
                <input
                    type="number"
                    defaultValue={0}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-right text-sm outline-none focus:border-[#14ADD6]"
                />
            </td>

            <td className="px-3 py-2 w-24">
                <input
                    type="number"
                    defaultValue={0}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-center text-sm outline-none focus:border-[#14ADD6]"
                />
            </td>

            <td className="px-3 py-2 w-24">
                <input
                    readOnly
                    value="18"
                    className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-center text-sm"
                />
            </td>

            <td className="px-3 py-2 w-36">
                <input
                    readOnly
                    value="0.00"
                    className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-right text-sm font-medium"
                />
            </td>

            <td className="px-3 py-2 text-center">
                <button
                    type="button"
                    title="Delete Item"
                    className="cursor-pointer text-red-600 hover:text-red-800"
                >
                    <i className="ri-delete-bin-6-line text-lg" />
                </button>
            </td>

        </tr>
    );
};

export default ItemRow;