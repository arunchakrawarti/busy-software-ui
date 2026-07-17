"use client";

import { useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Filters = () => {
    const [filters, setFilters] = useState({
        voucherType: "",
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
            voucherType: "",
            status: "",
            accountName: "",
        });
    };

    return (
        <FilterBar>
            <Input
                type="select"
                label="Voucher Type"
                name="voucherType"
                value={filters.voucherType}
                onChange={handleChange}
                options={[
                    {
                        label: "All Types",
                        value: "",
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
                        label: "Receipt",
                        value: "Receipt",
                    },
                    {
                        label: "Payment",
                        value: "Payment",
                    },
                    {
                        label: "Journal",
                        value: "Journal",
                    },
                    {
                        label: "Contra",
                        value: "Contra",
                    },
                    {
                        label: "Debit Note",
                        value: "Debit Note",
                    },
                    {
                        label: "Credit Note",
                        value: "Credit Note",
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
                        label: "Posted",
                        value: "Posted",
                    },
                    {
                        label: "Draft",
                        value: "Draft",
                    },
                ]}
            />

            <Input
                label="Account Name"
                name="accountName"
                value={filters.accountName}
                onChange={handleChange}
                placeholder="Enter Account Name"
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