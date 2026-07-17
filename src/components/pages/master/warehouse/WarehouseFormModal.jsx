"use client";

import { useEffect, useState } from "react";

import OverlayModal from "@/components/common/OverlayModal";
import Card from "@/components/molecules/Card";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

import { statusOptions } from "@/config/WarehouseDummyData";

const WarehouseFormModal = ({
    isOpen,
    onClose,
    selected,
}) => {
    const initialForm = {
        name: "",
        code: "",
        contactPerson: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        status: "Active",
    };

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (selected) {
            setForm({
                name: selected.name || "",
                code: selected.code || "",
                contactPerson: selected.contactPerson || "",
                phone: selected.phone || "",
                email: selected.email || "",
                address: selected.address || "",
                city: selected.city || "",
                status: selected.status || "Active",
            });
        } else {
            setForm(initialForm);
        }
    }, [selected, isOpen]);

    const handleChange = (key, value) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("SAVE WAREHOUSE :", form);

        onClose();
    };

    return (
        <OverlayModal
            isOpen={isOpen}
            onClose={onClose}
            modalClass="w-xl h-full mt-4 pb-4"
        >
            <Card
                title={
                    selected
                        ? "Edit Warehouse"
                        : "Add Warehouse"
                }
            >
               <form
    onSubmit={handleSubmit}
    className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start"
>
    <Input
        label="Warehouse Name"
        placeholder="Enter warehouse name"
        value={form.name}
        onChange={(e) =>
            handleChange("name", e.target.value)
        }
    />

    <Input
        label="Warehouse Code"
        placeholder="Enter warehouse code"
        value={form.code}
        onChange={(e) =>
            handleChange("code", e.target.value)
        }
    />

    <Input
        label="Contact Person"
        placeholder="Enter contact person"
        value={form.contactPerson}
        onChange={(e) =>
            handleChange("contactPerson", e.target.value)
        }
    />

    <Input
        label="Phone"
        placeholder="Enter phone number"
        value={form.phone}
        onChange={(e) =>
            handleChange("phone", e.target.value)
        }
    />

    <Input
        type="email"
        label="Email"
        placeholder="Enter email address"
        value={form.email}
        onChange={(e) =>
            handleChange("email", e.target.value)
        }
    />

    <Input
        label="City"
        placeholder="Enter city"
        value={form.city}
        onChange={(e) =>
            handleChange("city", e.target.value)
        }
    />

    <div className="md:col-span-2">
        <Input
            type="textarea"
            label="Address"
            placeholder="Enter warehouse address"
            value={form.address}
            onChange={(e) =>
                handleChange("address", e.target.value)
            }
        />
    </div>

    <Input
        type="select"
        label="Status"
        value={form.status}
        onChange={(e) =>
            handleChange("status", e.target.value)
        }
        options={statusOptions}
        valueKey="value"
        labelKey="label"
    />

    <div className="md:col-span-2 flex justify-end gap-3 border-t border-gray-300 pt-5">
        <Button
            type="button"
            variant="ghost"
            onClick={onClose}
        >
            Cancel
        </Button>

        <Button
            type="submit"
            variant="primary"
        >
            Save Warehouse
        </Button>
    </div>
</form>
            </Card>
        </OverlayModal>
    );
};

export default WarehouseFormModal;