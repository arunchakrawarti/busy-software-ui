// components/pages/vouchers/journal/JournalFilters.jsx

"use client";
import {useState} from "react";
import FilterBar from "@/components/molecules/FilterBar";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const statusOptions = [
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
];

const JournalFilters = () => {
    const [filters, setFilters] = useState({
        fromDate: "",
        toDate: "",
        status: "",
        account: "",
    });

    return (

        <FilterBar>

            <Input
                type="date"
                label="From Date"
                value={filters.fromDate}
                onChange={(e) => setFilters({...filters, fromDate: e.target.value})}
            />

            <Input
                type="date"
                label="To Date"
                value={filters.toDate}
                onChange={(e) => setFilters({...filters, toDate: e.target.value})}
            />

            <Input
                type="select"
                label="Status"
                options={statusOptions}
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
            />

            <Input
                label="Account"
                placeholder="Account Name"
                value={filters.account}
                onChange={(e) => setFilters({...filters, account: e.target.value})}
            />

            <Button
                variant="outline"
                icon="filter-off-line"
            >
                Clear
            </Button>

        </FilterBar>

    );

};

export default JournalFilters;