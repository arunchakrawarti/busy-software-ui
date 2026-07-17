"use client";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SearchBox from "@/components/atoms/SearchBox";

const statusOptions = [
    {
        label: "All Status",
        value: "all",
    },
    {
        label: "Received",
        value: "Received",
    },
    {
        label: "Pending",
        value: "Pending",
    },
];

const receiptModes = [
    {
        label: "All Modes",
        value: "all",
    },
    {
        label: "Cash",
        value: "Cash",
    },
    {
        label: "Bank",
        value: "Bank",
    },
    {
        label: "UPI",
        value: "UPI",
    },
    {
        label: "Cheque",
        value: "Cheque",
    },
];

const Toolbar = ({
    filters,
    setFilters,
    onAdd,
}) => {
    return (
        <div className="mb-6 overflow-hidden rounded2 border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-cyan-50">

            <div className="flex flex-col gap-5 p-5 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex flex-1 flex-col gap-4 md:flex-row">

                    <SearchBox
                        placeholder="Search voucher, account..."
                        value={filters.search}
                        onChange={(e) =>
                            setFilters((prev) => ({
                                ...prev,
                                search: e.target.value,
                            }))
                        }
                        iconLeft
                    />

                    <div className="flex flex-col gap-4 md:flex-row w-full">
                        <Input
                        type="select"
                        value={filters.status}
                        options={statusOptions}
                        onChange={(e) =>
                            setFilters((prev) => ({
                                ...prev,
                                status: e.target.value,
                            }))
                        }
                    />

                    <Input
                        type="select"
                        value={filters.mode || "all"}
                        options={receiptModes}
                        onChange={(e) =>
                            setFilters((prev) => ({
                                ...prev,
                                mode: e.target.value,
                            }))
                        }
                    />
                    </div>

                </div>

                <div className="flex flex-wrap gap-3">

                    <Button
                        variant="outline"
                        icon="filter-3-line"
                    >
                        Advanced Filter
                    </Button>

                    <Button
                        variant="outline"
                        icon="file-excel-2-line"
                    >
                        Export
                    </Button>

                    <Button
                        variant="primary"
                        icon="add-circle-line"
                        onClick={onAdd}
                    >
                        New Receipt
                    </Button>

                </div>

            </div>

        </div>
    );
}
export default Toolbar;