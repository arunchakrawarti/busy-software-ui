"use client";

import { useEffect } from "react";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useForm } from "@/components/hooks/useForm";

const Modal = ({
    initialData,
    onSave,
    onClose,
}) => {

    const {
        formData,
        setFormData,
        handleChange,
    } = useForm({
        defaultValues: initialData,
    });

    const values = formData;

    useEffect(() => {
        setFormData(initialData);
    }, [initialData, setFormData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(values);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col rounded-xl bg-white"
        >
            <div className="border-b border-gray-200 px-6 py-5">
                <h2 className="text-2xl font-semibold text-slate-800">
                    {initialData?.id
                        ? "Edit Ledger Entry"
                        : "Add Ledger Entry"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Enter ledger transaction details.
                </p>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    <Input
                        label="Voucher No"
                        name="voucherNo"
                        placeholder="Enter voucher number"
                        value={values.voucherNo}
                        onChange={handleChange}
                    />

                    <Input
                        type="date"
                        label="Date"
                        name="date"
                        value={values.date}
                        onChange={handleChange}
                    />

                    <Input
                        label="Account Name"
                        name="accountName"
                        placeholder="Enter account name"
                        value={values.accountName}
                        onChange={handleChange}
                    />

                    <Input
                        type="select"
                        label="Voucher Type"
                        name="voucherType"
                        value={values.voucherType}
                        onChange={handleChange}
                        options={[
                            { label: "Sales", value: "Sales" },
                            { label: "Purchase", value: "Purchase" },
                            { label: "Receipt", value: "Receipt" },
                            { label: "Payment", value: "Payment" },
                            { label: "Journal", value: "Journal" },
                            { label: "Contra", value: "Contra" },
                            { label: "Debit Note", value: "Debit Note" },
                            { label: "Credit Note", value: "Credit Note" },
                        ]}
                    />

                    <Input
                        type="number"
                        label="Debit Amount"
                        name="debit"
                        placeholder="Enter debit amount"
                        value={values.debit}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Credit Amount"
                        name="credit"
                        placeholder="Enter credit amount"
                        value={values.credit}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Balance"
                        name="balance"
                        placeholder="Enter balance"
                        value={values.balance}
                        onChange={handleChange}
                    />

                    <Input
                        type="select"
                        label="Status"
                        name="status"
                        value={values.status}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Posted",
                                value: "Posted",
                            },
                            {
                                label: "Draft",
                                value: "Draft",
                            },
                        ]}
                    />

                </div>

                <div className="mt-5">
                    <Input
                        type="textarea"
                        rows={5}
                        label="Narration"
                        name="narration"
                        placeholder="Enter narration"
                        value={values.narration}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button
                    type="submit"
                    variant="primary"
                    icon="save-line"
                >
                    Save Ledger
                </Button>
            </div>
        </form>
    );
};

export default Modal;