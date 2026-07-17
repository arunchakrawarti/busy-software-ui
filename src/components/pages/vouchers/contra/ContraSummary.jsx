// components/pages/vouchers/contra/ContraSummary.jsx

"use client";

import Card from "@/components/molecules/Card";

const ContraSummary = ({ totalAmount = 0, entries = [] }) => {

    const entryCount = entries.length;

    const isBalanced = entries.reduce(
        (acc, item) => acc + Number(item.amount || 0),
        0
    ) === totalAmount;

    return (

        <Card bodyClassName="p-4">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                {/* LEFT INFO */}
                <div>

                    <h4 className="text-sm font-semibold text-gray-700">
                        Contra Summary
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                        {entryCount} entries added
                    </p>

                </div>

                {/* RIGHT INFO */}
                <div className="text-right">

                    <p className="text-xs text-gray-500">
                        Total Amount
                    </p>

                    <p className="text-lg font-bold text-gray-800">
                        ₹{Number(totalAmount).toLocaleString()}
                    </p>

                    <p className={`mt-1 text-xs font-medium ${isBalanced ? "text-green-600" : "text-red-500"}`}>
                        {isBalanced ? "Balanced" : "Not Balanced"}
                    </p>

                </div>

            </div>

        </Card>

    );

};

export default ContraSummary;