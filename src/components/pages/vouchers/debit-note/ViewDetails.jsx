// components/pages/vouchers/debit-note/ViewDetails.jsx

"use client";

import Card from "@/components/molecules/Card";
import Badge from "@/components/common/Badge";

const ViewDetails = ({ data }) => {

    if (!data) return null;

    return (

        <Card bodyClassName="p-6">

            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">

                <div>

                    <h2 className="text-2xl font-semibold text-slate-800">
                        Debit Note Details
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Voucher Information
                    </p>

                </div>

                <Badge text={data.status} />

            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                <Detail
                    label="Voucher No"
                    value={data.voucherNo}
                />

                <Detail
                    label="Date"
                    value={data.date}
                />

                <Detail
                    label="Party"
                    value={data.party}
                />

                <Detail
                    label="Reference"
                    value={data.reference}
                />

                <Detail
                    label="Reason"
                    value={data.reason}
                />

                <Detail
                    label="Amount"
                    value={data.amount}
                />

            </div>

            <div className="mt-6 border-t border-gray-200 pt-5">

                <p className="mb-2 text-sm font-medium text-slate-700">
                    Narration
                </p>

                <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
                    {data.narration || "-"}
                </div>

            </div>

        </Card>

    );

};

const Detail = ({
    label,
    value,
}) => (

    <div>

        <p className="text-xs uppercase tracking-wide text-slate-500">
            {label}
        </p>

        <p className="mt-1 font-medium text-slate-800">
            {value || "-"}
        </p>

    </div>

);

export default ViewDetails;