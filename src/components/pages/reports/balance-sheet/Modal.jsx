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
                        ? "Edit Balance Sheet Account"
                        : "Add Balance Sheet Account"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Enter balance sheet account details.
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
                        label="Category"
                        name="category"
                        value={values.category}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Current Asset",
                                value: "Current Asset",
                            },
                            {
                                label: "Fixed Asset",
                                value: "Fixed Asset",
                            },
                            {
                                label: "Non-Current Asset",
                                value: "Non-Current Asset",
                            },
                            {
                                label: "Current Liability",
                                value: "Current Liability",
                            },
                            {
                                label: "Long-Term Liability",
                                value: "Long-Term Liability",
                            },
                            {
                                label: "Equity",
                                value: "Equity",
                            },
                            {
                                label: "Reserves & Surplus",
                                value: "Reserves & Surplus",
                            },
                        ]}
                    />

                    <Input
                        type="select"
                        label="Type"
                        name="type"
                        value={values.type}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Asset",
                                value: "Asset",
                            },
                            {
                                label: "Liability",
                                value: "Liability",
                            },
                            {
                                label: "Equity",
                                value: "Equity",
                            },
                        ]}
                    />

                    <Input
                        type="number"
                        label="Balance Amount"
                        name="amount"
                        placeholder="Enter balance amount"
                        value={values.amount}
                        onChange={handleChange}
                    />

                    <Input
                        label="Financial Year"
                        name="financialYear"
                        placeholder="e.g. 2026-27"
                        value={values.financialYear}
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
                                label: "Active",
                                value: "Active",
                            },
                            {
                                label: "Inactive",
                                value: "Inactive",
                            },
                        ]}
                    />

                </div>

                <div className="mt-5">
                    <Input
                        type="textarea"
                        rows={5}
                        label="Remarks"
                        name="remarks"
                        placeholder="Enter remarks"
                        value={values.remarks}
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
                    Save Account
                </Button>
            </div>
        </form>
    );
};

export default Modal;