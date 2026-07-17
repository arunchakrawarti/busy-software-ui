// components/pages/vouchers/contra/VoucherInformation.jsx

"use client";

import Input from "@/components/common/Input";

const VoucherInformation = ({
    form,
    errors = {},
    handleChange,
    statusOptions = [],
}) => {

    return (

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="space-y-4">

                <Input
                    label="Voucher No"
                    placeholder="Enter voucher number"
                    value={form.voucherNo}
                    onChange={(e) =>
                        handleChange("voucherNo", e.target.value)
                    }
                    error={errors.voucherNo}
                />

                <Input
                    type="date"
                    label="Date"
                    value={form.date}
                    onChange={(e) =>
                        handleChange("date", e.target.value)
                    }
                    error={errors.date}
                />

                <Input
                    label="Reference"
                    placeholder="Enter reference"
                    value={form.reference}
                    onChange={(e) =>
                        handleChange("reference", e.target.value)
                    }
                />

                <Input
                    label="Narration"
                    placeholder="Enter narration"
                    value={form.narration}
                    onChange={(e) =>
                        handleChange("narration", e.target.value)
                    }
                />

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-4">

                <div>

                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Status
                    </label>

                    <select
                        value={form.status}
                        onChange={(e) =>
                            handleChange("status", e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                    >
                        {statusOptions.map((opt) => (
                            <option
                                key={opt.value}
                                value={opt.value}
                            >
                                {opt.label}
                            </option>
                        ))}
                    </select>

                    {errors.status && (
                        <p className="mt-1 text-xs text-red-500">
                            {errors.status}
                        </p>
                    )}

                </div>

                <div className="rounded-lg border border-gray-200 p-4">

                    <p className="mb-2 text-sm font-medium text-gray-700">
                        Quick Info
                    </p>

                    <div className="space-y-2 text-sm text-gray-600">

                        <p>• Contra Entry between Bank & Cash accounts</p>
                        <p>• Used for internal fund transfers</p>
                        <p>• Automatically balanced debit & credit</p>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default VoucherInformation;