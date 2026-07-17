"use client";

import { useMemo, useState } from "react";

import FilterBar from "@/components/molecules/FilterBar";
import Button from "@/components/common/Button";

const ContraFilters = () => {

    const [filters, setFilters] = useState({
        status: "",
        account: "",
        dateRange: "",
    });

    const filterItems = useMemo(
        () => [
            {
                key: "status",
                type: "select",
                label: "Status",
                placeholder: "All Status",
                options: [
                    { label: "All", value: "" },
                    { label: "Posted", value: "Posted" },
                    { label: "Draft", value: "Draft" },
                    { label: "Cancelled", value: "Cancelled" },
                ],
            },
            {
                key: "account",
                type: "select",
                label: "Account",
                placeholder: "All Accounts",
                options: [
                    { label: "All", value: "" },
                    { label: "Cash", value: "Cash" },
                    { label: "HDFC Bank", value: "HDFC Bank" },
                    { label: "ICICI Bank", value: "ICICI Bank" },
                    { label: "Axis Bank", value: "Axis Bank" },
                    { label: "SBI Bank", value: "SBI Bank" },
                ],
            },
            {
                key: "dateRange",
                type: "daterange",
                label: "Date",
            },
        ],
        []
    );

    return (
        <FilterBar className="w-full">

            <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-4">

                {filterItems.map((item) => {

                    if (item.type === "select") {
                        return (
                            <div key={item.key} className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-600">
                                    {item.label}
                                </label>

                                <select
                                    value={filters[item.key]}
                                    onChange={(e) =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            [item.key]: e.target.value,
                                        }))
                                    }
                                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                >
                                    {item.options.map((opt) => (
                                        <option key={opt.value} value={opt.value}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        );
                    }

                    if (item.type === "daterange") {
                        return (
                            <div key={item.key} className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-600">
                                    {item.label}
                                </label>

                                <input
                                    type="date"
                                    value={filters[item.key]}
                                    onChange={(e) =>
                                        setFilters((prev) => ({
                                            ...prev,
                                            [item.key]: e.target.value,
                                        }))
                                    }
                                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                        );
                    }

                    return null;
                })}

                <div className="flex items-end gap-2">

                    <Button
                        onClick={() =>
                            setFilters({
                                status: "",
                                account: "",
                                dateRange: "",
                            })
                        }
                        variant="outline"
                        className="rounded-lg border px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                        Reset
                    </Button>

                </div>

            </div>

        </FilterBar>
    );
};

export default ContraFilters;