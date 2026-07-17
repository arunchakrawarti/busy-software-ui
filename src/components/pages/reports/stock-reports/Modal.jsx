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
                        ? "Edit Stock Report"
                        : "Add Stock Report"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Enter stock report details.
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
                                label: "Ledger Report",
                                value: "Ledger Report",
                            },
                            {
                                label: "Inventory Alert",
                                value: "Inventory Alert",
                            },
                            {
                                label: "Valuation Report",
                                value: "Valuation Report",
                            },
                            {
                                label: "Inactive Inventory",
                                value: "Inactive Inventory",
                            },
                        ]}
                    />

                    <Input
                        label="Warehouse"
                        name="warehouse"
                        placeholder="Enter warehouse"
                        value={values.warehouse}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Total Items"
                        name="totalItems"
                        placeholder="Enter total items"
                        value={values.totalItems}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Total Quantity"
                        name="totalQuantity"
                        placeholder="Enter total quantity"
                        value={values.totalQuantity}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Stock Value"
                        name="stockValue"
                        placeholder="Enter stock value"
                        value={values.stockValue}
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