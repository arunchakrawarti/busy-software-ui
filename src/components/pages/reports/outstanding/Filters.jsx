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
                        label: "Receivable Report",
                        value: "Receivable Report",
                    },
                    {
                        label: "Payable Report",
                        value: "Payable Report",
                    },
                    {
                        label: "Overdue Report",
                        value: "Overdue Report",
                    },
                    {
                        label: "Ageing Report",
                        value: "Ageing Report",
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
                        label: "Customer Outstanding",
                        value: "Customer Outstanding",
                    },
                    {
                        label: "Vendor Outstanding",
                        value: "Vendor Outstanding",
                    },
                    {
                        label: "Overdue Outstanding",
                        value: "Overdue Outstanding",
                    },
                    {
                        label: "Ageing Analysis",
                        value: "Ageing Analysis",
                    },
                    {
                        label: "Outstanding Summary",
                        value: "Outstanding Summary",
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