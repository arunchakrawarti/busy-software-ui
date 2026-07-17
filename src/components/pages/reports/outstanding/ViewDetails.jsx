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
                            Outstanding Report Details
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Customer & Vendor Outstanding Report Information
                        </p>
                    </div>
                </div>

                <Badge text={data.status} />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Detail
                    label="Report Code"
                    value={data.reportCode}
                />

                <Detail
                    label="Report Name"
                    value={data.reportName}
                />

                <Detail
                    label="Report Type"
                    value={data.reportType}
                />

                <Detail
                    label="Party Type"
                    value={data.partyType}
                />

                <Detail
                    label="Report Period"
                    value={data.reportPeriod}
                />

                <Detail
                    label="Total Parties"
                    value={data.totalParties}
                />

                <Detail
                    label="Total Outstanding"
                    value={data.totalOutstanding}
                />

                <Detail
                    label="Overdue Amount"
                    value={data.overdueAmount}
                />

                <Detail
                    label="Generated Date"
                    value={data.generatedDate || "-"}
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