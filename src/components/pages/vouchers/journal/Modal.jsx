// components/pages/vouchers/journal/Modal.jsx

"use client";

import { useEffect, useState } from "react";

import Button from "@/components/common/Button";

import VoucherInformation from "./VoucherInformation";
import JournalEntries from "./JournalEntries";
import JournalSummary from "./JournalSummary";

import {
    defaultJournal,
    statusOptions,
} from "@/config/JournalDummyData";

const Modal = ({
    initialData = defaultJournal,
    onClose,
    onSave,
}) => {

    const [form, setForm] =
        useState(defaultJournal);

    const [entries, setEntries] =
        useState([]);

    const [errors, setErrors] =
        useState({});

    useEffect(() => {

        setForm(initialData);

        setEntries(
            initialData.entries || [
                {
                    account: "",
                    debit: "",
                    credit: "",
                    remark: "",
                },
            ]
        );

    }, [initialData]);

    const handleChange = (
        name,
        value
    ) => {

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
            newErrors.voucherNo =
                "Voucher No is required";
        }

        if (!form.date) {
            newErrors.date =
                "Date is required";
        }

        if (!form.status) {
            newErrors.status =
                "Status is required";
        }

        setErrors(newErrors);

        return (
            Object.keys(newErrors).length === 0
        );

    };

    const handleSubmit = () => {

        if (!validate()) return;

        onSave({
            ...form,
            entries,
        });

    };

    return (

        <div className="mx-auto w-full rounded-xl bg-white">

            <div className="border-b border-gray-200 px-6 py-4">

                <h2 className="text-xl font-semibold">

                    {initialData?.id
                        ? "Edit Journal Voucher"
                        : "New Journal Voucher"}

                </h2>

            </div>

            <div className="space-y-8 p-6">

                <VoucherInformation
                    form={form}
                    errors={errors}
                    handleChange={handleChange}
                    statusOptions={statusOptions}
                />

                <JournalEntries
                    entries={entries}
                    setEntries={setEntries}
                />

                <JournalSummary
                    entries={entries}
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
                        ? "Update Journal"
                        : "Save Journal"}
                </Button>

            </div>

        </div>

    );

};

export default Modal;