"use client";

import Button from "@/components/common/Button";
import Card from "@/components/molecules/Card";

import ItemRow from "./ItemRow";

const ItemTable = () => {
    const items = [
        {
            id: 1,
        },
        {
            id: 2,
        },
    ];

    return (
        <Card
            title="Items"
            subtitle="Add products to this sales voucher."
            bodyClassName="p-0"
        >
            <div className="w-full">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto ">
                    <table className="min-w-[1100px] w-full border-collapse">
                        <thead className="border-b border-gray-200 bg-slate-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-slate-500">
                                    Item
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-slate-500">
                                    HSN
                                </th>
                                <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-slate-500">
                                    Qty
                                </th>
                                <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-slate-500">
                                    Unit
                                </th>
                                <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-slate-500">
                                    Rate
                                </th>
                                <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-slate-500">
                                    Disc %
                                </th>
                                <th className="px-4 py-3 text-center text-xs font-semibold uppercase text-slate-500">
                                    GST %
                                </th>
                                <th className="px-4 py-3 text-right text-xs font-semibold uppercase text-slate-500">
                                    Amount
                                </th>
                                <th className="w-14 px-4 py-3"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map((item) => (
                                <ItemRow key={item.id} item={item} />
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-3">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
                        >
                            <div className="flex justify-between">
                                <p className="font-semibold text-sm">
                                    {item.name}
                                </p>
                                <p className="text-sm font-semibold text-slate-700">
                                    ₹{item.amount}
                                </p>
                            </div>

                            <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-500">
                                <p>HSN: {item.hsn}</p>
                                <p>Qty: {item.qty}</p>
                                <p>Unit: {item.unit}</p>
                                <p>Rate: {item.rate}</p>
                                <p>Disc: {item.discount}%</p>
                                <p>GST: {item.gst}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between border-t border-gray-200  py-4">

                <Button
                    variant="primary"
                    icon="add-line"
                >
                    Add Item
                </Button>

                <div className="text-sm text-slate-500">
                    Total Items :
                    <span className="ml-2 font-semibold text-slate-700">
                        {items.length}
                    </span>
                </div>

            </div>

        </Card>
    );
};

export default ItemTable;