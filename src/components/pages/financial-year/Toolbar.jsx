"use client";

import React from "react";
import { useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SearchBox from "@/components/atoms/SearchBox";

import {
    companyOptions,
    statusOptions,
} from "@/config/FinancialYearDummyData";

const Toolbar = ({
    onAdd,
}) => {
    const [search, setSearch] = useState("");
    const [company, setCompany] = useState("");
    const [status, setStatus] = useState("");

    return (
        <div className="rounded1 bg-white p-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-3">

                    <SearchBox
                        placeholder="Search Financial Year..."
                        iconLeft
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Input
                        type="select"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        options={companyOptions}
                        valueKey="value"
                        labelKey="label"
                        placeholder="Select Company"
                    />

                    <Input
                        type="select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        options={statusOptions}
                        valueKey="value"
                        labelKey="label"
                        placeholder="Status"
                    />

                </div>

                <Button
                    variant="primary"
                    icon="add-line"
                    onClick={onAdd}
                >
                    Add Financial Year
                </Button>

            </div>
        </div>
    );
};

export default Toolbar;