// components/pages/vouchers/contra/Modal.jsx

"use client";

import { useEffect, useState } from "react";

import Button from "@/components/common/Button";

import VoucherInformation from "./VoucherInformation";
import ContraEntries from "./ContraEntries";
import ContraSummary from "./ContraSummary";

import { defaultContra, statusOptions } from "@/config/ContraDummyData";

const Modal = ({
    initialData = defaultContra,
    onClose,
    onSave,
}) => {

    const [form, setForm] = useState(defaultContra);
    const [entries, setEntries] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {

        setForm(initialData);

        setEntries(
            initialData.entries || [
                {
                    fromAccount: "",
                    toAccount: "",
                    amount: "",
                    remark: "",
                },
            ]
        );

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

        if (!form.voucherNo) {
            newErrors.voucherNo = "Voucher No is required";
        }

        if (!form.date) {
            newErrors.date = "Date is required";
        }

        if (!form.status) {
            newErrors.status = "Status is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    };

    const handleSubmit = () => {

        if (!validate()) return;

        onSave({
            ...form,
            entries,
        });

    };

    const totalAmount = entries.reduce(
        (sum, item) => sum + Number(item.amount || 0),
        0
    );

    return (

        <div className="mx-auto w-full rounded-xl bg-white">

            <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-xl font-semibold">
                    {initialData?.id
                        ? "Edit Contra Voucher"
                        : "New Contra Voucher"}
                </h2>
            </div>

            <div className="space-y-8 p-6">

                <VoucherInformation
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    statusOptions={statusOptions}
                />

                <ContraEntries
                    entries={entries}
                    setEntries={setEntries}
                />

                <ContraSummary
                    totalAmount={totalAmount}
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
                    variant="primary"
                    onClick={handleSubmit}
                >
                    {initialData?.id ? "Update Contra" : "Save Contra"}
                </Button>

            </div>

        </div>

    );

};

export default Modal;