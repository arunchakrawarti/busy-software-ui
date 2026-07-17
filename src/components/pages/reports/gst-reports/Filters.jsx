"use client";

import { useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Filters = () => {
    const [filters, setFilters] = useState({
        gstType: "",
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
            gstType: "",
            reportName: "",
            status: "",
        });
    };

    return (
        <FilterBar>
            <Input
                type="select"
                label="GST Type"
                name="gstType"
                value={filters.gstType}
                onChange={handleChange}
                options={[
                    {
                        label: "All GST Types",
                        value: "",
                    },
                    {
                        label: "Outward Supplies",
                        value: "Outward Supplies",
                    },
                    {
                        label: "Input Tax Credit",
                        value: "Input Tax Credit",
                    },
                    {
                        label: "Summary Return",
                        value: "Summary Return",
                    },
                    {
                        label: "Annual Return",
                        value: "Annual Return",
                    },
                    {
                        label: "Tax Summary",
                        value: "Tax Summary",
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
                        label: "GSTR-1",
                        value: "GSTR-1",
                    },
                    {
                        label: "GSTR-2B",
                        value: "GSTR-2B",
                    },
                    {
                        label: "GSTR-3B",
                        value: "GSTR-3B",
                    },
                    {
                        label: "GSTR-9",
                        value: "GSTR-9",
                    },
                    {
                        label: "GST Tax Summary",
                        value: "GST Tax Summary",
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
                        label: "Filed",
                        value: "Filed",
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