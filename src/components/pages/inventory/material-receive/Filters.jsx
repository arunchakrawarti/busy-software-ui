"use client";

import { useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Filters = () => {
    const [filters, setFilters] = useState({
        status: "",
        receiveType: "",
        receivedFrom: "",
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
            receiveType: "",
            receivedFrom: "",
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
                        label: "Received",
                        value: "Received",
                    },
                    {
                        label: "Pending",
                        value: "Pending",
                    },
                    {
                        label: "Cancelled",
                        value: "Cancelled",
                    },
                ]}
            />

            <Input
                type="select"
                label="Receive Type"
                name="receiveType"
                value={filters.receiveType}
                onChange={handleChange}
                options={[
                    {
                        label: "All Types",
                        value: "",
                    },
                    {
                        label: "Purchase",
                        value: "Purchase",
                    },
                    {
                        label: "Stock Transfer",
                        value: "Stock Transfer",
                    },
                ]}
            />

            <Input
                label="Received From"
                name="receivedFrom"
                value={filters.receivedFrom}
                onChange={handleChange}
                placeholder="Enter Supplier / Warehouse"
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