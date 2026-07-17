"use client";

import { useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Filters = () => {
    const [filters, setFilters] = useState({
        status: "",
        fromWarehouse: "",
        toWarehouse: "",
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
            fromWarehouse: "",
            toWarehouse: "",
            itemName: "",
        });
    };

    return (
        <FilterBar>
            <Input
                type="select"
                label="Status"
                name="status"
                value={filters.status}
                onChange={handleChange}
                options={[
                    {
                        label: "All Status",
                        value: "",
                    },
                    {
                        label: "Completed",
                        value: "Completed",
                    },
                    {
                        label: "Pending",
                        value: "Pending",
                    },
                ]}
            />

            <Input
                label="From Warehouse"
                name="fromWarehouse"
                value={filters.fromWarehouse}
                onChange={handleChange}
                placeholder="Enter From Warehouse"
            />

            <Input
                label="To Warehouse"
                name="toWarehouse"
                value={filters.toWarehouse}
                onChange={handleChange}
                placeholder="Enter To Warehouse"
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