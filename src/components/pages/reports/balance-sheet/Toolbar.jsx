"use client";

import SearchBox from "@/components/atoms/SearchBox";
import Button from "@/components/common/Button";

const Toolbar = ({ onAdd }) => {
    return (
        <div className="flex flex-col gap-4 border-b border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
            <div>
                <h2 className="text-xl font-semibold text-slate-800">
                    Balance Sheet
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Manage balance sheet accounts including assets, liabilities, and equity.
                </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
                <div>
                    <SearchBox
                        placeholder="Search accounts..."
                        className="w-full sm:w-72"
                        iconLeft
                    />
                </div>

                <Button
                    variant="primary"
                    icon="add-line"
                    onClick={onAdd}
                >
                    Add Account
                </Button>
            </div>
        </div>
    );
};

export default Toolbar;