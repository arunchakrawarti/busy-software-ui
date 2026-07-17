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
                        ? "Edit Stock Item"
                        : "Add Stock Item"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Enter inventory stock details.
                </p>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    <Input
                        label="Item Code"
                        name="itemCode"
                        placeholder="Enter item code"
                        value={values.itemCode}
                        onChange={handleChange}
                    />

                    <Input
                        label="Item Name"
                        name="itemName"
                        placeholder="Enter item name"
                        value={values.itemName}
                        onChange={handleChange}
                    />

                    <Input
                        label="Warehouse"
                        name="warehouse"
                        placeholder="Enter warehouse name"
                        value={values.warehouse}
                        onChange={handleChange}
                    />

                    <Input
                        label="Unit"
                        name="unit"
                        placeholder="e.g. Nos, Kg, Box, Ltr"
                        value={values.unit}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Opening Stock"
                        name="openingStock"
                        placeholder="Enter opening stock"
                        value={values.openingStock}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Inward"
                        name="inward"
                        placeholder="Enter inward quantity"
                        value={values.inward}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Outward"
                        name="outward"
                        placeholder="Enter outward quantity"
                        value={values.outward}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Closing Stock"
                        name="closingStock"
                        placeholder="Enter closing stock"
                        value={values.closingStock}
                        onChange={handleChange}
                    />

                    <Input
                        type="select"
                        label="Status"
                        name="status"
                        placeholder="Select stock status"
                        value={values.status}
                        onChange={handleChange}
                        options={[
                            {
                                label: "In Stock",
                                value: "In Stock",
                            },
                            {
                                label: "Low Stock",
                                value: "Low Stock",
                            },
                            {
                                label: "Out of Stock",
                                value: "Out of Stock",
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
                    Save Stock
                </Button>
            </div>
        </form>
    );
};

export default Modal;