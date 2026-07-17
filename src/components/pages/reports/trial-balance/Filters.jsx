"use client";

import { useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Filters = () => {
    const [filters, setFilters] = useState({
        accountGroup: "",
        status: "",
        accountName: "",
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
            accountGroup: "",
            status: "",
            accountName: "",
        });
    };

    return (
        <FilterBar>
            <Input
                type="select"
                label="Account Group"
                name="accountGroup"
                value={filters.accountGroup}
                onChange={handleChange}
                options={[
                    {
                        label: "All Groups",
                        value: "",
                    },
                    {
                        label: "Current Assets",
                        value: "Current Assets",
                    },
                    {
                        label: "Bank Accounts",
                        value: "Bank Accounts",
                    },
                    {
                        label: "Sundry Debtors",
                        value: "Sundry Debtors",
                    },
                    {
                        label: "Sundry Creditors",
                        value: "Sundry Creditors",
                    },
                    {
                        label: "Direct Income",
                        value: "Direct Income",
                    },
                    {
                        label: "Indirect Income",
                        value: "Indirect Income",
                    },
                    {
                        label: "Direct Expense",
                        value: "Direct Expense",
                    },
                    {
                        label: "Indirect Expense",
                        value: "Indirect Expense",
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
                        label: "Balanced",
                        value: "Balanced",
                    },
                    {
                        label: "Unbalanced",
                        value: "Unbalanced",
                    },
                ]}
            />

            <Input
                label="Account Name"
                name="accountName"
                value={filters.accountName}
                onChange={handleChange}
                placeholder="Enter account name"
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