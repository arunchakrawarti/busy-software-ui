"use client";

import { useEffect, useState } from "react";

import OverlayModal from "@/components/common/OverlayModal";
import Card from "@/components/molecules/Card";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

import {
    unitTypes,
    decimalOptions,
    statusOptions,
} from "@/config/UnitMasterDummyData";

const UnitFormModal = ({
    isOpen,
    onClose,
    selected,
}) => {
    const initialForm = {
        name: "",
        symbol: "",
        type: "",
        decimal: "",
        status: "Active",
    };

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (selected) {
            setForm({
                name: selected.name || "",
                symbol: selected.symbol || "",
                type: selected.type || "",
                decimal: selected.decimal ?? "",
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

        console.log("SAVE UNIT :", form);

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
                        ? "Edit Unit"
                        : "Add Unit"
                }
            >
                <form
                    onSubmit={handleSubmit}
                    className="grid gap-4"
                >
                    <Input
                        label="Unit Name"
                        placeholder="Enter unit name"
                        value={form.name}
                        onChange={(e) =>
                            handleChange(
                                "name",
                                e.target.value
                            )
                        }
                    />

                    <Input
                        label="Symbol"
                        placeholder="Enter unit symbol"
                        value={form.symbol}
                        onChange={(e) =>
                            handleChange(
                                "symbol",
                                e.target.value
                            )
                        }
                    />

                    <Input
                        type="select"
                        label="Unit Type"
                        placeholder="Select unit type"
                        value={form.type}
                        onChange={(e) =>
                            handleChange(
                                "type",
                                e.target.value
                            )
                        }
                        options={unitTypes}
                        valueKey="value"
                        labelKey="label"
                    />

                    <Input
                        type="select"
                        label="Decimal Places"
                        placeholder="Select decimal places"
                        value={form.decimal}
                        onChange={(e) =>
                            handleChange(
                                "decimal",
                                Number(e.target.value)
                            )
                        }
                        options={decimalOptions}
                        valueKey="value"
                        labelKey="label"
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

export default UnitFormModal;