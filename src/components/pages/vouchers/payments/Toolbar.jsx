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
        label: "Completed",
        value: "Completed",
    },
    {
        label: "Pending",
        value: "Pending",
    },
];

const paymentModes = [
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
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex flex-1 flex-col gap-4 md:flex-row">

                    <SearchBox
                        placeholder="Search voucher or account..."
                        iconLeft
                        value={filters.search}
                        onChange={(e) =>
                            setFilters((prev) => ({
                                ...prev,
                                search: e.target.value,
                            }))
                        }
                    />

                    <div className="flex flex-col gap-4 md:flex-row w-full" >
                        <Input
                            type="select"
                            options={statusOptions}
                            value={filters.status}
                            onChange={(e) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    status: e.target.value,
                                }))
                            }
                        />

                        <Input
                            type="select"
                            options={paymentModes}
                            value={filters.mode || "all"}
                            onChange={(e) =>
                                setFilters((prev) => ({
                                    ...prev,
                                    mode: e.target.value,
                                }))
                            }
                        />
                    </div>

                </div>

                <div className="flex gap-3">

                    <Button
                        variant="outline"
                        icon="download-line"
                    >
                        Export
                    </Button>

                    <Button
                        variant="primary"
                        icon="add-line"
                        onClick={onAdd}
                    >
                        Add Payment
                    </Button>

                </div>

            </div>

        </div>
    );
}

export default Toolbar;