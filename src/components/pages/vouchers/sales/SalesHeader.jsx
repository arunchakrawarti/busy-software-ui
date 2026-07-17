"use client";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

const SalesHeader = () => {
    const today = new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <div className="rounded1 bg-white px-6 py-5">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>
                    <div className="flex items-center gap-3">

                        <h1 className="text-2xl font-semibold text-slate-800">
                            Sales Voucher
                        </h1>

                        <Badge
                            text="Draft"
                            customStyle="bg-blue-100 text-blue-700 border-blue-200"
                        />

                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                        Create and manage customer sales invoices.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">

                    <div className="">
                        <p className="text-[11px] uppercase tracking-wide text-slate-500">
                            Voucher No.
                        </p>

                        <p className="text-sm font-semibold text-slate-700">
                            SV-00001
                        </p>
                    </div>

                    <div className="">
                        <p className="text-[11px] uppercase tracking-wide text-slate-500">
                            Date
                        </p>

                        <p className="text-sm font-semibold text-slate-700">
                            {today}
                        </p>
                    </div>

                    <Button variant="outline">
                        Cancel
                    </Button>

                    <Button variant="primary">
                        Save Voucher
                    </Button>

                </div>

            </div>
        </div>
    );
};

export default SalesHeader;