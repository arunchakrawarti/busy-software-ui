// components/pages/vouchers/journal/ViewModal.jsx

"use client";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Card from "@/components/molecules/Card";
import { journalData } from "@/config/JournalDummyData";

const ViewDetails = ({
    onClose,
    id,
}) => {

    const data = journalData.find(
        (item) => item.id == id
    );

    if (!data) {
        return <div>Journal Not Found</div>;
    }

    return (

        <div className="mx-auto w-full max-w-5xl rounded-xl bg-white">

            <div className="border-b border-gray-200 px-6 py-4">

                <div className="flex items-center justify-between">

                    <div>

                        <h2 className="text-xl font-semibold">
                            Journal Voucher Details
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            View journal voucher information.
                        </p>

                    </div>

                    <Badge
                        text={data.status}
                    />

                </div>

            </div>

            <div className="space-y-6 p-6">

                <Card>

                    <h3 className="mb-4 text-lg font-semibold">
                        Voucher Information
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                        <div>
                            <p className="text-sm text-gray-500">
                                Voucher No
                            </p>

                            <p className="mt-1 font-medium">
                                {data.voucherNo}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Date
                            </p>

                            <p className="mt-1 font-medium">
                                {data.date}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Reference
                            </p>

                            <p className="mt-1 font-medium">
                                {data.reference}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Account
                            </p>

                            <p className="mt-1 font-medium">
                                {data.account}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Amount
                            </p>

                            <p className="mt-1 font-medium">
                                ₹ {data.amount}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Status
                            </p>

                            <Badge
                                text={data.status}
                            />
                        </div>

                    </div>

                </Card>

                <Card>

                    <h3 className="mb-4 text-lg font-semibold">
                        Narration
                    </h3>

                    <p className="text-gray-600">
                        {data.narration || "-"}
                    </p>

                </Card>

                <Card>

                    <h3 className="mb-4 text-lg font-semibold">
                        Journal Entries
                    </h3>

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-50">

                                <tr>

                                    <th className="border-b border-gray-200 p-3 text-left">
                                        Account
                                    </th>

                                    <th className="border-b border-gray-200 p-3 text-left">
                                        Debit
                                    </th>

                                    <th className="border-b border-gray-200 p-3 text-left">
                                        Credit
                                    </th>

                                    <th className="border-b border-gray-200 p-3 text-left">
                                        Remark
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {data.entries?.map((item, index) => (

                                    <tr
                                        key={index}
                                        className="border-b border-gray-100"
                                    >

                                        <td className="p-3">
                                            {item.account}
                                        </td>

                                        <td className="p-3">
                                            ₹ {item.debit || "-"}
                                        </td>

                                        <td className="p-3">
                                            ₹ {item.credit || "-"}
                                        </td>

                                        <td className="p-3">
                                            {item.remark || "-"}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </Card>

            </div>

            <div className="flex justify-end border-t border-gray-200 px-6 py-4">

                <Button
                    variant="outline"
                    onClick={onClose}
                >
                    Close
                </Button>

            </div>

        </div>

    );

};

export default ViewDetails;