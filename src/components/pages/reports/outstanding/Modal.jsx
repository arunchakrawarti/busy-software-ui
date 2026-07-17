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
                        ? "Edit Outstanding Report"
                        : "Add Outstanding Report"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Enter outstanding report details.
                </p>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Input
                        label="Report Code"
                        name="reportCode"
                        placeholder="Enter report code"
                        value={values.reportCode}
                        onChange={handleChange}
                    />

                    <Input
                        label="Report Name"
                        name="reportName"
                        placeholder="Enter report name"
                        value={values.reportName}
                        onChange={handleChange}
                    />

                    <Input
                        label="Report Period"
                        name="reportPeriod"
                        placeholder="e.g. July 2026"
                        value={values.reportPeriod}
                        onChange={handleChange}
                    />

                    <Input
                        type="select"
                        label="Report Type"
                        name="reportType"
                        value={values.reportType}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Summary Report",
                                value: "Summary Report",
                            },
                            {
                                label: "Receivable Report",
                                value: "Receivable Report",
                            },
                            {
                                label: "Payable Report",
                                value: "Payable Report",
                            },
                            {
                                label: "Overdue Report",
                                value: "Overdue Report",
                            },
                            {
                                label: "Ageing Report",
                                value: "Ageing Report",
                            },
                        ]}
                    />

                    <Input
                        type="select"
                        label="Party Type"
                        name="partyType"
                        value={values.partyType}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Customer",
                                value: "Customer",
                            },
                            {
                                label: "Vendor",
                                value: "Vendor",
                            },
                            {
                                label: "Customer & Vendor",
                                value: "Customer & Vendor",
                            },
                            {
                                label: "All Parties",
                                value: "All Parties",
                            },
                        ]}
                    />

                    <Input
                        type="number"
                        label="Total Parties"
                        name="totalParties"
                        placeholder="Enter total parties"
                        value={values.totalParties}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Total Outstanding"
                        name="totalOutstanding"
                        placeholder="Enter total outstanding amount"
                        value={values.totalOutstanding}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Overdue Amount"
                        name="overdueAmount"
                        placeholder="Enter overdue amount"
                        value={values.overdueAmount}
                        onChange={handleChange}
                    />

                    <Input
                        type="date"
                        label="Generated Date"
                        name="generatedDate"
                        value={values.generatedDate}
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
                                label: "Pending",
                                value: "Pending",
                            },
                            {
                                label: "Generated",
                                value: "Generated",
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
                    Save Report
                </Button>
            </div>
        </form>
    );
};

export default Modal;