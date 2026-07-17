// components/pages/vouchers/debit-note/Filters.jsx

"use client";

import { useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Filters = () => {

    const [filters, setFilters] = useState({
        status: "",
        party: "",
        dateRange: "",
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
            party: "",
            dateRange: "",
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
                        label: "Approved",
                        value: "Approved",
                    },
                    {
                        label: "Draft",
                        value: "Draft",
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
                label="Party Name"
                name="party"
                value={filters.party}
                onChange={handleChange}
                placeholder="Enter Party Name"
            />

            <Input
                type="date"
                label="Date"
                name="dateRange"
                value={filters.dateRange}
                onChange={handleChange}
            />

            <Button
                children="Reset"
                variant="outline"
                icon="refresh-line"
                onClick={handleReset}
            />

        </FilterBar>

    );

};

export default Filters;