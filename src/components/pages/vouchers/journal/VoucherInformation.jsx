// components/pages/vouchers/journal/VoucherInformation.jsx

"use client";

import Input from "@/components/common/Input";

const VoucherInformation = ({
    form,
    errors,
    handleChange,
    statusOptions,
}) => {
    return (

        <div className="space-y-5">

            <div className="border-b border-gray-200 pb-3">

                <h3 className="text-lg font-semibold text-gray-800">
                    Voucher Information
                </h3>

                <p className="text-sm text-gray-500">
                    Basic journal voucher information.
                </p>

            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                <Input
                    label="Voucher No"
                    value={form.voucherNo}
                    error={errors.voucherNo}
                    placeholder="JV-1001"
                    onChange={(e) =>
                        handleChange(
                            "voucherNo",
                            e.target.value
                        )
                    }
                />

                <Input
                    type="date"
                    label="Voucher Date"
                    value={form.date}
                    error={errors.date}
                    onChange={(e) =>
                        handleChange(
                            "date",
                            e.target.value
                        )
                    }
                />

                <Input
                    type="select"
                    label="Status"
                    value={form.status}
                    options={statusOptions}
                    error={errors.status}
                    onChange={(e) =>
                        handleChange(
                            "status",
                            e.target.value
                        )
                    }
                />

                <Input
                    label="Reference No"
                    value={form.reference}
                    placeholder="Reference"
                    onChange={(e) =>
                        handleChange(
                            "reference",
                            e.target.value
                        )
                    }
                />

                <Input
                    label="Cheque No"
                    value={form.chequeNo}
                    placeholder="Cheque Number"
                    onChange={(e) =>
                        handleChange(
                            "chequeNo",
                            e.target.value
                        )
                    }
                />

                <Input
                    label="Prepared By"
                    value={form.preparedBy}
                    placeholder="Prepared By"
                    onChange={(e) =>
                        handleChange(
                            "preparedBy",
                            e.target.value
                        )
                    }
                />

            </div>

            <Input
                type="textarea"
                rows={3}
                label="Narration"
                value={form.narration}
                placeholder="Voucher Narration..."
                onChange={(e) =>
                    handleChange(
                        "narration",
                        e.target.value
                    )
                }
            />

        </div>

    );
};

export default VoucherInformation;