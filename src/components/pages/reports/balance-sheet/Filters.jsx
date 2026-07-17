"use client";

import { useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Filters = () => {
    const [filters, setFilters] = useState({
        category: "",
        type: "",
        status: "",
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
            category: "",
            type: "",
            status: "",
        });
    };

    return (
        <FilterBar>
            <Input
                type="select"
                label="Category"
                name="category"
                value={filters.category}
                onChange={handleChange}
                options={[
                    {
                        label: "All Categories",
                        value: "",
                    },
                    {
                        label: "Current Asset",
                        value: "Current Asset",
                    },
                    {
                        label: "Fixed Asset",
                        value: "Fixed Asset",
                    },
                    {
                        label: "Non-Current Asset",
                        value: "Non-Current Asset",
                    },
                    {
                        label: "Current Liability",
                        value: "Current Liability",
                    },
                    {
                        label: "Long-Term Liability",
                        value: "Long-Term Liability",
                    },
                    {
                        label: "Equity",
                        value: "Equity",
                    },
                    {
                        label: "Reserves & Surplus",
                        value: "Reserves & Surplus",
                    },
                ]}
            />

            <Input
                type="select"
                label="Type"
                name="type"
                value={filters.type}
                onChange={handleChange}
                options={[
                    {
                        label: "All Types",
                        value: "",
                    },
                    {
                        label: "Asset",
                        value: "Asset",
                    },
                    {
                        label: "Liability",
                        value: "Liability",
                    },
                    {
                        label: "Equity",
                        value: "Equity",
                    },
                ]}
            />

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
                        label: "Active",
                        value: "Active",
                    },
                    {
                        label: "Inactive",
                        value: "Inactive",
                    },
                ]}
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