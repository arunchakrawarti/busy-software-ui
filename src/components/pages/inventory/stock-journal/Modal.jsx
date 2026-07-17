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
                        ? "Edit Stock Journal"
                        : "Add Stock Journal"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Enter stock journal voucher details.
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
                        label="From Warehouse"
                        name="fromWarehouse"
                        placeholder="Enter source warehouse"
                        value={values.fromWarehouse}
                        onChange={handleChange}
                    />

                    <Input
                        label="To Warehouse"
                        name="toWarehouse"
                        placeholder="Enter destination warehouse"
                        value={values.toWarehouse}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Quantity"
                        name="quantity"
                        placeholder="Enter quantity"
                        value={values.quantity}
                        onChange={handleChange}
                    />

                    <Input
                        label="Unit"
                        name="unit"
                        placeholder="e.g. Nos, Kg, Box"
                        value={values.unit}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Rate"
                        name="rate"
                        placeholder="Enter rate"
                        value={values.rate}
                        onChange={handleChange}
                    />

                    <Input
                        type="number"
                        label="Amount"
                        name="amount"
                        placeholder="Enter amount"
                        value={values.amount}
                        onChange={handleChange}
                    />

                    <Input
                        label="Reason"
                        name="reason"
                        placeholder="Enter transfer reason"
                        value={values.reason}
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
                                label: "Completed",
                                value: "Completed",
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
                    Save Stock Journal
                </Button>
            </div>
        </form>
    );
};

export default Modal;