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
                        ? "Edit GST Report"
                        : "Add GST Report"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Enter GST report details.
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
                        label="Return Period"
                        name="returnPeriod"
                        placeholder="e.g. July 2026"
                        value={values.returnPeriod}
                        onChange={handleChange}
                    />

                    <Input
                        type="select"
                        label="GST Type"
                        name="gstType"
                        value={values.gstType}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Outward Supplies",
                                value: "Outward Supplies",
                            },
                            {
                                label: "Input Tax Credit",
                                value: "Input Tax Credit",
                            },
                            {
                                label: "Summary Return",
                                value: "Summary Return",
                            },
                            {
                                label: "Annual Return",
                                value: "Annual Return",
                            },
                            {
                                label: "Tax Summary",
                                value: "Tax Summary",
                            },
                        ]}
                    />

                    <Input
                        type="number"
                        label="Taxable Value"
                        name="taxableValue"
                        placeholder="Enter taxable value"
                        value={values.taxableValue}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Tax Amount"
                        name="taxAmount"
                        placeholder="Enter tax amount"
                        value={values.taxAmount}
                        onChange={handleChange}
                    />

                    <Input
                        type="date"
                        label="Filing Date"
                        name="filingDate"
                        value={values.filingDate}
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
                            {
                                label: "Filed",
                                value: "Filed",
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