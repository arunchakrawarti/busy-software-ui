"use client";

import { useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Filters = () => {
    const [filters, setFilters] = useState({
        role: "",
        department: "",
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
            role: "",
            department: "",
            status: "",
        });
    };

    return (
        <FilterBar>
            <Input
                type="select"
                label="Role"
                name="role"
                value={filters.role}
                onChange={handleChange}
                options={[
                    {
                        label: "All Roles",
                        value: "",
                    },
                    {
                        label: "Administrator",
                        value: "Administrator",
                    },
                    {
                        label: "Accountant",
                        value: "Accountant",
                    },
                    {
                        label: "Sales Manager",
                        value: "Sales Manager",
                    },
                    {
                        label: "Purchase Officer",
                        value: "Purchase Officer",
                    },
                    {
                        label: "Inventory Executive",
                        value: "Inventory Executive",
                    },
                ]}
            />

            <Input
                type="select"
                label="Department"
                name="department"
                value={filters.department}
                onChange={handleChange}
                options={[
                    {
                        label: "All Departments",
                        value: "",
                    },
                    {
                        label: "Administration",
                        value: "Administration",
                    },
                    {
                        label: "Accounts",
                        value: "Accounts",
                    },
                    {
                        label: "Sales",
                        value: "Sales",
                    },
                    {
                        label: "Purchase",
                        value: "Purchase",
                    },
                    {
                        label: "Inventory",
                        value: "Inventory",
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
                    {
                        label: "Suspended",
                        value: "Suspended",
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