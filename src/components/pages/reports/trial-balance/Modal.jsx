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
                        ? "Edit Trial Balance"
                        : "Add Trial Balance"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Enter trial balance account details.
                </p>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    <Input
                        label="Account Code"
                        name="accountCode"
                        placeholder="Enter account code"
                        value={values.accountCode}
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
                        label="Account Group"
                        name="accountGroup"
                        value={values.accountGroup}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Current Assets",
                                value: "Current Assets",
                            },
                            {
                                label: "Bank Accounts",
                                value: "Bank Accounts",
                            },
                            {
                                label: "Sundry Debtors",
                                value: "Sundry Debtors",
                            },
                            {
                                label: "Sundry Creditors",
                                value: "Sundry Creditors",
                            },
                            {
                                label: "Direct Income",
                                value: "Direct Income",
                            },
                            {
                                label: "Indirect Income",
                                value: "Indirect Income",
                            },
                            {
                                label: "Direct Expense",
                                value: "Direct Expense",
                            },
                            {
                                label: "Indirect Expense",
                                value: "Indirect Expense",
                            },
                        ]}
                    />

                    <Input
                        type="number"
                        label="Opening Debit"
                        name="openingDebit"
                        placeholder="Enter opening debit"
                        value={values.openingDebit}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Opening Credit"
                        name="openingCredit"
                        placeholder="Enter opening credit"
                        value={values.openingCredit}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Debit"
                        name="debit"
                        placeholder="Enter debit amount"
                        value={values.debit}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Credit"
                        name="credit"
                        placeholder="Enter credit amount"
                        value={values.credit}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Closing Debit"
                        name="closingDebit"
                        placeholder="Enter closing debit"
                        value={values.closingDebit}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Closing Credit"
                        name="closingCredit"
                        placeholder="Enter closing credit"
                        value={values.closingCredit}
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
                                label: "Balanced",
                                value: "Balanced",
                            },
                            {
                                label: "Unbalanced",
                                value: "Unbalanced",
                            },
                        ]}
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
                    Save Trial Balance
                </Button>
            </div>
        </form>
    );
};

export default Modal;