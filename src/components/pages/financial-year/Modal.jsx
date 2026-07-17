"use client";

import { useEffect, useState } from "react";

import OverlayModal from "@/components/common/OverlayModal";
import Card from "@/components/molecules/Card";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Switch from "@/components/common/Switch";

import { companyOptions, statusOptions } from "@/config/FinancialYearDummyData";

const Modal = ({ isOpen, onClose, financialYear }) => {
    const [form, setForm] = useState({
        company: "",
        financialYear: "",
        fromDate: "",
        toDate: "",
        current: false,
        status: "Active",
        remarks: "",
    });

    useEffect(() => {
        if (financialYear) {
            setForm(financialYear);
        } else {
            setForm({
                company: "",
                financialYear: "",
                fromDate: "",
                toDate: "",
                current: false,
                status: "Active",
                remarks: "",
            });
        }
    }, [financialYear, isOpen]);

    const handleChange = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("SAVE DATA:", form);

        onClose?.();
    };

    return (
        <OverlayModal isOpen={isOpen} onClose={onClose} modalClass="max-w-lg h-full mt-4 pb-4">
            <Card title={financialYear ? "Edit Financial Year" : "Add Financial Year"}>
                <form onSubmit={handleSubmit} className="grid gap-4">

                    <Input
                        type="select"
                        label="Company"
                        value={form.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        options={companyOptions}
                        valueKey="value"
                        labelKey="label"
                    />

                    <Input
                        label="Financial Year"
                        value={form.financialYear}
                        onChange={(e) => handleChange("financialYear", e.target.value)}
                        placeholder="2025-2026"
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <Input
                            type="date"
                            label="From Date"
                            value={form.fromDate}
                            onChange={(e) => handleChange("fromDate", e.target.value)}
                        />

                        <Input
                            type="date"
                            label="To Date"
                            value={form.toDate}
                            onChange={(e) => handleChange("toDate", e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <Switch
                            label="Current Financial Year"
                            checked={form.current}
                            onChange={(e) => handleChange("current", e.target.checked)}
                            dynamicBg="bg-green-500"
                        />
                    </div>

                    <Input
                        type="select"
                        label="Status"
                        value={form.status}
                        onChange={(e) => handleChange("status", e.target.value)}
                        options={statusOptions}
                        valueKey="value"
                        labelKey="label"
                    />

                    <Input
                        label="Remarks"
                        value={form.remarks}
                        onChange={(e) => handleChange("remarks", e.target.value)}
                        placeholder="Optional..."
                    />

                    <div className="flex justify-end gap-2 pt-2">
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>

                        <Button type="submit" variant="primary">
                            Save
                        </Button>
                    </div>

                </form>
            </Card>
        </OverlayModal>
    );
};

export default Modal;