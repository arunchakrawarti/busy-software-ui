"use client";

import { useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Filters = () => {
    const [filters, setFilters] = useState({
        status: "",
        warehouse: "",
        itemName: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleReset = () => {
        setFilters({
            status: "",
            warehouse: "",
            itemName: "",
        });
    };

    return (
        <FilterBar>
            <Input
                type="select"
                label="Stock Status"
                name="status"
                value={filters.status}
                onChange={handleChange}
                options={[
                    {
                        label: "All Status",
                        value: "",
                    },
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

            <Input
                label="Warehouse"
                name="warehouse"
                value={filters.warehouse}
                onChange={handleChange}
                placeholder="Enter Warehouse"
            />

            <Input
                label="Item Name"
                name="itemName"
                value={filters.itemName}
                onChange={handleChange}
                placeholder="Enter Item Name"
            />

            <Button
                variant="outline"
                icon="refresh-line"
                onClick={handleReset}
            >
                Reset
            </Button>
        </FilterBar>
    );
};

export default Filters;