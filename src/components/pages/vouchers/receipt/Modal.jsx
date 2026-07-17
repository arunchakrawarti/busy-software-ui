"use client";

import { useEffect, useState } from "react";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const defaultForm = {
    voucherNo: "",
    date: "",
    account: "",
    receivedFrom: "",
    mode: "Bank",
    bank: "",
    chequeNo: "",
    referenceNo: "",
    amount: "",
    status: "Received",
    remarks: "",
};

const receiptModes = [
    { label: "Cash", value: "Cash" },
    { label: "Bank", value: "Bank" },
    { label: "UPI", value: "UPI" },
    { label: "Cheque", value: "Cheque" },
];

const statusOptions = [
    { label: "Received", value: "Received" },
    { label: "Pending", value: "Pending" },
];

const Modal = ({
    data,
    onClose,
    onSubmit,
}) => {

    const [form, setForm] = useState(defaultForm);

    useEffect(() => {

        if (data) {

            setForm(data);

        } else {

            setForm({
                ...defaultForm,
                voucherNo: `REC-${Date.now().toString().slice(-4)}`,
                date: new Date().toISOString().split("T")[0],
            });

        }

    }, [data]);

    const handleChange = (key, value) => {

        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit?.(form);

        onClose();

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="w-full max-w-5xl rounded-2xl bg-white"
        >

            <div className="border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-white px-6 py-5">

                <h2 className="text-xl font-semibold text-slate-800">
                    {data ? "Update Receipt Voucher" : "Create Receipt Voucher"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Record customer collections and manage receipt transactions.
                </p>

            </div>

            <div className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-3">

                <Input
                    label="Voucher No"
                    value={form.voucherNo}
                    placeholder="REC-0001"
                    onChange={(e) =>
                        handleChange("voucherNo", e.target.value)
                    }
                />

                <Input
                    type="date"
                    label="Voucher Date"
                    value={form.date}
                    onChange={(e) =>
                        handleChange("date", e.target.value)
                    }
                />

                <Input
                    label="Received From"
                    placeholder="Customer Name"
                    value={form.receivedFrom}
                    onChange={(e) =>
                        handleChange("receivedFrom", e.target.value)
                    }
                />

                <Input
                    label="Account"
                    placeholder="Select Account"
                    value={form.account}
                    onChange={(e) =>
                        handleChange("account", e.target.value)
                    }
                />

                <Input
                    type="select"
                    label="Receipt Mode"
                    options={receiptModes}
                    value={form.mode}
                    onChange={(e) =>
                        handleChange("mode", e.target.value)
                    }
                />

                {(form.mode === "Bank" || form.mode === "Cheque") && (
                    <Input
                        label="Bank Name"
                        placeholder="Enter Bank Name"
                        value={form.bank}
                        onChange={(e) =>
                            handleChange("bank", e.target.value)
                        }
                    />
                )}

                {form.mode === "Cheque" && (
                    <Input
                        label="Cheque No"
                        placeholder="Enter Cheque Number"
                        value={form.chequeNo}
                        onChange={(e) =>
                            handleChange("chequeNo", e.target.value)
                        }
                    />
                )}

                {(form.mode === "Bank" || form.mode === "UPI") && (
                    <Input
                        label="Reference No"
                        placeholder="Transaction Reference"
                        value={form.referenceNo}
                        onChange={(e) =>
                            handleChange("referenceNo", e.target.value)
                        }
                    />
                )}

                <Input
                    type="number"
                    label="Amount"
                    placeholder="0.00"
                    value={form.amount}
                    onChange={(e) =>
                        handleChange("amount", e.target.value)
                    }
                />

                <Input
                    type="select"
                    label="Status"
                    options={statusOptions}
                    value={form.status}
                    onChange={(e) =>
                        handleChange("status", e.target.value)
                    }
                />

                <div className="md:col-span-2 xl:col-span-3">

                    <Input
                        type="textarea"
                        rows={4}
                        label="Remarks"
                        placeholder="Write remarks..."
                        value={form.remarks}
                        onChange={(e) =>
                            handleChange("remarks", e.target.value)
                        }
                    />

                </div>

            </div>

            <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-5">

                <Button
                    variant="outline"
                    type="button"
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <Button
                    variant="primary"
                    type="submit"
                    icon={data ? "ri-save-line" : "ri-add-line"}
                >
                    {data ? "Update Receipt" : "Create Receipt"}
                </Button>

            </div>

        </form>

    );

}

export default Modal;