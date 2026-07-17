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
                        ? "Edit Credit Note"
                        : "New Credit Note"}

                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Fill all required voucher details.
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
                        label="Party"
                        name="party"
                        placeholder="Enter party name"
                        value={values.party}
                        onChange={handleChange}
                    />

                    <Input
                        label="Reference Voucher"
                        name="reference"
                        placeholder="Enter reference voucher"
                        value={values.reference}
                        onChange={handleChange}
                    />

                    <Input
                        label="Reason"
                        name="reason"
                        placeholder="Enter credit note reason"
                        value={values.reason}
                        onChange={handleChange}
                    />

                    <Input
                        label="Amount"
                        name="amount"
                        placeholder="Enter amount"
                        value={values.amount}
                        onChange={handleChange}
                    />

                    <Input
                        label="Status"
                        name="status"
                        placeholder="Enter status"
                        value={values.status}
                        onChange={handleChange}
                    />

                </div>

                <div className="mt-5">

                    <Input
                        type="textarea"
                        rows={5}
                        label="Narration"
                        name="narration"
                        value={values.narration}
                        onChange={handleChange}
                    />

                </div>

            </div>

            <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">

                <Button
                    type="button"
                    variant="outline"
                    children="Cancel"
                    onClick={onClose}
                />

                <Button
                    type="submit"
                    variant="primary"
                    children="Save Credit Note"
                    icon="save-line"
                />

            </div>

        </form>

    );

};

export default Modal;