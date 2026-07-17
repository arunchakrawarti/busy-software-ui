"use client";

import { useEffect, useState } from "react";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

import {
    defaultPurchase,
    vendors,
    statusOptions,
} from "@/config/PurchaseDummyData";

const Modal = ({
    initialData = defaultPurchase,
    onClose,
    onSave,
}) => {

    const [form, setForm] = useState(defaultPurchase);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setForm(initialData || defaultPurchase);
    }, [initialData]);

    const handleChange = (name, value) => {

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }

    };

    const validate = () => {

        const newErrors = {};

        if (!form.voucherNo.trim()) {
            newErrors.voucherNo = "Voucher No is required";
        }

        if (!form.vendor) {
            newErrors.vendor = "Vendor is required";
        }

        if (!form.billNo.trim()) {
            newErrors.billNo = "Bill No is required";
        }

        if (!form.date) {
            newErrors.date = "Purchase Date is required";
        }

        if (!form.billDate) {
            newErrors.billDate = "Bill Date is required";
        }

        if (!form.amount) {
            newErrors.amount = "Amount is required";
        }

        if (!form.status) {
            newErrors.status = "Status is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    };

    const handleSubmit = () => {

        if (!validate()) return;

        onSave(form);

    };

    return (

        <div className="mx-auto w-full max-w-5xl rounded1 bg-white">

            <div className="border-b border-gray-200 px-6 py-4">

                <h2 className="text-xl font-semibold">

                    {initialData?.id
                        ? "Edit Purchase"
                        : "New Purchase"}

                </h2>

            </div>

            <div className="space-y-6 p-6">

                <div className="grid gap-5 md:grid-cols-2">

                    <Input
                        label="Voucher No"
                        placeholder="PUR-1001"
                        value={form.voucherNo}
                        error={errors.voucherNo}
                        onChange={(e) =>
                            handleChange(
                                "voucherNo",
                                e.target.value
                            )
                        }
                    />

                    <Input
                        type="date"
                        label="Purchase Date"
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
                        label="Vendor"
                        value={form.vendor}
                        options={vendors}
                        error={errors.vendor}
                        onChange={(e) =>
                            handleChange(
                                "vendor",
                                e.target.value
                            )
                        }
                    />

                    <Input
                        label="Bill No"
                        placeholder="Bill Number"
                        value={form.billNo}
                        error={errors.billNo}
                        onChange={(e) =>
                            handleChange(
                                "billNo",
                                e.target.value
                            )
                        }
                    />

                    <Input
                        type="date"
                        label="Bill Date"
                        value={form.billDate}
                        error={errors.billDate}
                        onChange={(e) =>
                            handleChange(
                                "billDate",
                                e.target.value
                            )
                        }
                    />

                    <Input
                        label="Reference No"
                        placeholder="Reference Number"
                        value={form.referenceNo}
                        onChange={(e) =>
                            handleChange(
                                "referenceNo",
                                e.target.value
                            )
                        }
                    />

                    <Input
                        label="GSTIN"
                        placeholder="Supplier GST Number"
                        value={form.gstin}
                        onChange={(e) =>
                            handleChange(
                                "gstin",
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
                        label="Amount"
                        placeholder="0.00"
                        value={form.amount}
                        error={errors.amount}
                        onChange={(e) =>
                            handleChange(
                                "amount",
                                e.target.value
                            )
                        }
                    />

                    <Input
                        label="GST Amount"
                        placeholder="GST"
                        value={form.gst}
                        onChange={(e) =>
                            handleChange(
                                "gst",
                                e.target.value
                            )
                        }
                    />

                </div>

                <Input
                    type="textarea"
                    rows={4}
                    label="Remarks"
                    placeholder="Remarks..."
                    value={form.remarks}
                    onChange={(e) =>
                        handleChange(
                            "remarks",
                            e.target.value
                        )
                    }
                />

            </div>

            <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">

                <Button
                    variant="outline"
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button
                    onClick={handleSubmit}
                    variant="primary"
                >
                    {initialData?.id
                        ? "Update Purchase"
                        : "Save Purchase"}
                </Button>

            </div>

        </div>

    );

};

export default Modal;