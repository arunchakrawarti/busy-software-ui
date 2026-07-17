"use client";

import { useEffect, useState } from "react";

import OverlayModal from "@/components/common/OverlayModal";
import Card from "@/components/molecules/Card";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

import {
    gstTypes,
    statusOptions,
} from "@/config/GSTMasterDummyData";

const GSTFormModal = ({
    isOpen,
    onClose,
    selected,
}) => {
    const initialForm = {
        name: "",
        type: "",
        cgst: "",
        sgst: "",
        igst: "",
        status: "Active",
    };

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (selected) {
            setForm({
                name: selected.name || "",
                type: selected.type || "",
                cgst: selected.cgst ?? "",
                sgst: selected.sgst ?? "",
                igst: selected.igst ?? "",
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

        console.log("SAVE GST :", form);

        onClose();
    };

    return (
        <OverlayModal
            isOpen={isOpen}
            onClose={onClose}
            modalClass="w-lg h-full mt-4 pb-4"
        >
            <Card
                title={
                    selected
                        ? "Edit GST"
                        : "Add GST"
                }
            >
                <form
                    onSubmit={handleSubmit}
                    className="grid gap-4"
                >
                    <Input
                        label="GST Name"
                        placeholder="Enter GST name"
                        value={form.name}
                        onChange={(e) =>
                            handleChange(
                                "name",
                                e.target.value
                            )
                        }
                    />

                    <Input
                        type="select"
                        label="GST Type"
                        placeholder="Select GST type"
                        value={form.type}
                        onChange={(e) =>
                            handleChange(
                                "type",
                                e.target.value
                            )
                        }
                        options={gstTypes}
                        valueKey="value"
                        labelKey="label"
                    />

                    <Input
                        type="number"
                        label="CGST (%)"
                        placeholder="Enter CGST"
                        value={form.cgst}
                        onChange={(e) =>
                            handleChange(
                                "cgst",
                                Number(e.target.value)
                            )
                        }
                    />

                    <Input
                        type="number"
                        label="SGST (%)"
                        placeholder="Enter SGST"
                        value={form.sgst}
                        onChange={(e) =>
                            handleChange(
                                "sgst",
                                Number(e.target.value)
                            )
                        }
                    />

                    <Input
                        type="number"
                        label="IGST (%)"
                        placeholder="Enter IGST"
                        value={form.igst}
                        onChange={(e) =>
                            handleChange(
                                "igst",
                                Number(e.target.value)
                            )
                        }
                    />

                    <Input
                        type="select"
                        label="Status"
                        placeholder="Select status"
                        value={form.status}
                        onChange={(e) =>
                            handleChange(
                                "status",
                                e.target.value
                            )
                        }
                        options={statusOptions}
                        valueKey="value"
                        labelKey="label"
                    />

                    <div className="flex justify-end gap-2 pt-2">
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
                            Save
                        </Button>
                    </div>
                </form>
            </Card>
        </OverlayModal>
    );
};

export default GSTFormModal;