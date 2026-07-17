"use client";

import Card from "@/components/molecules/Card";
import Badge from "@/components/common/Badge";
import { useRouter } from "next/navigation";

const ViewDetails = ({ data }) => {
    const router = useRouter();

    if (!data) return null;

    return (
        <Card bodyClassName="p-6">
            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.back()}>
                        <span className="sr-only">Back</span>
                        <i className="ri-arrow-left-line cursor-pointer text-2xl text-slate-600 hover:text-slate-800"></i>
                    </button>

                    <div>
                        <h2 className="text-2xl font-semibold text-slate-800">
                            Profit & Loss Details
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Financial Account Information
                        </p>
                    </div>
                </div>

                <Badge text={data.status} />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Detail
                    label="Account Code"
                    value={data.accountCode}
                />

                <Detail
                    label="Account Name"
                    value={data.accountName}
                />

                <Detail
                    label="Category"
                    value={data.category}
                />

                <Detail
                    label="Type"
                    value={data.type}
                />

                <Detail
                    label="Amount"
                    value={data.amount}
                />

                <Detail
                    label="Financial Year"
                    value={data.financialYear}
                />

                <Detail
                    label="Status"
                    value={data.status}
                />
            </div>

            <div className="mt-6 border-t border-gray-200 pt-5">
                <p className="mb-2 text-sm font-medium text-slate-700">
                    Remarks
                </p>

                <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                    {data.remarks || "-"}
                </div>
            </div>
        </Card>
    );
};

const Detail = ({ label, value }) => (
    <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">
            {label}
        </p>

        <p className="mt-1 font-medium text-slate-800">
            {value ?? "-"}
        </p>
    </div>
);

export default ViewDetails;