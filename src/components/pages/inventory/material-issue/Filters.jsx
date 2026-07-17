"use client";

import { useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Filters = () => {
    const [filters, setFilters] = useState({
        status: "",
        issueType: "",
        issuedTo: "",
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
            issueType: "",
            issuedTo: "",
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
                        label: "Issued",
                        value: "Issued",
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
                label="Issue Type"
                name="issueType"
                value={filters.issueType}
                onChange={handleChange}
                options={[
                    {
                        label: "All Types",
                        value: "",
                    },
                    {
                        label: "Department",
                        value: "Department",
                    },
                    {
                        label: "Project",
                        value: "Project",
                    },
                    {
                        label: "Office",
                        value: "Office",
                    },
                ]}
            />

            <Input
                label="Issued To"
                name="issuedTo"
                value={filters.issuedTo}
                onChange={handleChange}
                placeholder="Enter Department / Employee"
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