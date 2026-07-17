"use client";

import { useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Filters = () => {
    const [filters, setFilters] = useState({
        reportType: "",
        reportName: "",
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
            reportType: "",
            reportName: "",
            status: "",
        });
    };

    return (
        <FilterBar>
            <Input
                type="select"
                label="Report Type"
                name="reportType"
                value={filters.reportType}
                onChange={handleChange}
                options={[
                    {
                        label: "All Report Types",
                        value: "",
                    },
                    {
                        label: "Summary Report",
                        value: "Summary Report",
                    },
                    {
                        label: "Ledger Report",
                        value: "Ledger Report",
                    },
                    {
                        label: "Inventory Alert",
                        value: "Inventory Alert",
                    },
                    {
                        label: "Valuation Report",
                        value: "Valuation Report",
                    },
                    {
                        label: "Inactive Inventory",
                        value: "Inactive Inventory",
                    },
                ]}
            />

            <Input
                type="select"
                label="Report"
                name="reportName"
                value={filters.reportName}
                onChange={handleChange}
                options={[
                    {
                        label: "All Reports",
                        value: "",
                    },
                    {
                        label: "Stock Summary",
                        value: "Stock Summary",
                    },
                    {
                        label: "Stock Ledger",
                        value: "Stock Ledger",
                    },
                    {
                        label: "Low Stock Report",
                        value: "Low Stock Report",
                    },
                    {
                        label: "Stock Valuation",
                        value: "Stock Valuation",
                    },
                    {
                        label: "Dead Stock Report",
                        value: "Dead Stock Report",
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
                        label: "Generated",
                        value: "Generated",
                    },
                    {
                        label: "Pending",
                        value: "Pending",
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