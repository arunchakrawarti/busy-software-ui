// components/pages/vouchers/journal/JournalSummary.jsx

"use client";

import Card from "@/components/molecules/Card";

const JournalSummary = ({
    entries = [],
}) => {

    const totalDebit = entries.reduce(
        (sum, item) =>
            sum + Number(item.debit || 0),
        0
    );

    const totalCredit = entries.reduce(
        (sum, item) =>
            sum + Number(item.credit || 0),
        0
    );

    const difference =
        totalDebit - totalCredit;

    return (

        <Card className="mt-6">

            <div className="mb-5">

                <h3 className="text-lg font-semibold">
                    Journal Summary
                </h3>

            </div>

            <div className="grid gap-5 md:grid-cols-3">

                <div className="rounded-lg bg-blue-50 p-4">

                    <p className="text-sm text-gray-500">
                        Total Debit
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-blue-700">
                        ₹ {totalDebit}
                    </h2>

                </div>

                <div className="rounded-lg bg-green-50 p-4">

                    <p className="text-sm text-gray-500">
                        Total Credit
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-green-700">
                        ₹ {totalCredit}
                    </h2>

                </div>

                <div className="rounded-lg bg-red-50 p-4">

                    <p className="text-sm text-gray-500">
                        Difference
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-red-700">
                        ₹ {difference}
                    </h2>

                </div>

            </div>

        </Card>

    );

};

export default JournalSummary;