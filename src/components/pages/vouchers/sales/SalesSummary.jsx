"use client";

import Card from "@/components/molecules/Card";

const rows = [
    {
        label: "Taxable Amount",
        value: "₹ 0.00",
    },
    {
        label: "Discount",
        value: "₹ 0.00",
    },
    {
        label: "CGST",
        value: "₹ 0.00",
    },
    {
        label: "SGST",
        value: "₹ 0.00",
    },
    {
        label: "IGST",
        value: "₹ 0.00",
    },
    {
        label: "Round Off",
        value: "₹ 0.00",
    },
];

const SalesSummary = () => {
    return (
        <Card
            title="Summary"
            bodyClassName="space-y-4"
        >
            {rows.map((row) => (
                <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-dashed border-slate-200 pb-2"
                >
                    <span className="text-sm text-slate-500">
                        {row.label}
                    </span>

                    <span className="font-medium text-slate-700">
                        {row.value}
                    </span>
                </div>
            ))}

            <div className="rounded-lg bg-[#14ADD6]/10 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                    Grand Total
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#14ADD6]">
                    ₹ 0.00
                </h2>
            </div>
        </Card>
    );
};

export default SalesSummary;