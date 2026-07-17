"use client";

import { useEffect, useState } from "react";

import OverlayModal from "@/components/common/OverlayModal";
import Card from "@/components/molecules/Card";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Switch from "@/components/common/Switch";

import { itemTypes, unitOptions } from "@/config/ItemMasterDummyData";

const Modal = ({ isOpen, onClose, selected }) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        unit: "",
        hsn: "",
        gst: "",
        stockEnabled: false,
        openingStock: "",
        rate: "",
        status: "Active",
    });

    useEffect(() => {
        if (selected) setForm(selected);
    }, [selected]);

    const handleChange = (k, v) => {
        setForm((p) => ({ ...p, [k]: v }));
    };

    return (
        <OverlayModal isOpen={isOpen} onClose={onClose} modalClass="w-lg h-full mt-4 pb-4 ">
            <Card title={selected ? "Edit Item" : "Add Item"}>

                <div className="grid gap-4">

                    <Input
                        label="Item Name"
                        placeholder="Enter item name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />

                    <div className="grid grid-cols-2 gap-3">

                        <Input
                            type="select"
                            label="Type"
                            placeholder="Select item type"
                            value={form.type}
                            onChange={(e) => handleChange("type", e.target.value)}
                            options={itemTypes}
                            valueKey="value"
                            labelKey="label"
                        />

                        <Input
                            type="select"
                            label="Unit"
                            placeholder="Select unit"
                            value={form.unit}
                            onChange={(e) => handleChange("unit", e.target.value)}
                            options={unitOptions}
                            valueKey="value"
                            labelKey="label"
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-3">

                        <Input
                            label="HSN/SAC"
                            placeholder="Enter HSN/SAC code"
                            value={form.hsn}
                            onChange={(e) => handleChange("hsn", e.target.value)}
                        />

                        <Input
                            label="GST %"
                            placeholder="Enter GST percentage"
                            value={form.gst}
                            onChange={(e) => handleChange("gst", e.target.value)}
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-3">

                        <Input
                            label="Opening Stock"
                            placeholder="Enter opening stock"
                            value={form.openingStock}
                            onChange={(e) =>
                                handleChange("openingStock", e.target.value)
                            }
                        />

                        <Input
                            label="Rate"
                            placeholder="Enter item rate"
                            value={form.rate}
                            onChange={(e) => handleChange("rate", e.target.value)}
                        />

                    </div>

                    <Switch
                        label="Enable Stock Tracking"
                        checked={form.stockEnabled}
                        onChange={(e) =>
                            handleChange("stockEnabled", e.target.checked)
                        }
                        dynamicBg={form.stockEnabled ? "bg-green-500" : "bg-gray-200"}
                    />

                    <div className="flex justify-end gap-2 pt-2">

                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>

                        <Button variant="primary" onClick={onClose}>
                            Save Item
                        </Button>

                    </div>

                </div>

            </Card>
        </OverlayModal>
    );
};

export default Modal;