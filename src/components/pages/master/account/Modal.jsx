"use client";

import { useEffect, useState } from "react";

import OverlayModal from "@/components/common/OverlayModal";
import Card from "@/components/molecules/Card";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

import {
    accountTypes,
} from "@/config/AccountMasterDummyData";

const Modal = ({ isOpen, onClose, selected }) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        phone: "",
        email: "",
        city: "",
        status: "Active",
    });

    useEffect(() => {
        if (selected) setForm(selected);
    }, [selected]);

    const handleChange = (key, value) => {
        setForm((p) => ({ ...p, [key]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SAVE:", form);
        onClose();
    };

    return (
        <OverlayModal isOpen={isOpen} onClose={onClose} modalClass="w-lg h-full mt-4 pb-4">
            <Card title={selected ? "Edit Account" : "Add Account"}>

                <div className="grid gap-4">

                    <Input
                        label="Account Name"
                        placeholder="Enter account name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />

                    <Input
                        type="select"
                        label="Type"
                        placeholder="Select account type"
                        value={form.type}
                        onChange={(e) => handleChange("type", e.target.value)}
                        options={accountTypes}
                        valueKey="value"
                        labelKey="label"
                    />

                    <Input
                        label="Phone"
                        placeholder="Enter phone number"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                    />

                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter email address"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />

                    <Input
                        label="City"
                        placeholder="Enter city"
                        value={form.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                    />

                    <div className="flex justify-end gap-2 pt-2">
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>

                        <Button variant="primary" onClick={handleSubmit}>
                            Save
                        </Button>
                    </div>

                </div>

            </Card>
        </OverlayModal>
    );
};

export default Modal;