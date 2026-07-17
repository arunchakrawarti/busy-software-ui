"use client";

import SearchBox from "@/components/atoms/SearchBox";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

import {
    accountTypes,
    statusOptions,
} from "@/config/AccountMasterDummyData";

const Toolbar = ({
    search,
    type,
    status,
    onSearchChange,
    onTypeChange,
    onStatusChange,
    onAdd,
}) => {
    return (
        <div className="bg-white p-4 rounded1 flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">

                <SearchBox
                    value={search}
                    onChange={onSearchChange}
                    placeholder="Search Account..."
                    iconLeft
                />

                <Input
                    type="select"
                    value={type}
                    onChange={onTypeChange}
                    options={accountTypes}
                    valueKey="value"
                    labelKey="label"
                    placeholder="Account Type"
                />

                <Input
                    type="select"
                    value={status}
                    onChange={onStatusChange}
                    options={statusOptions}
                    valueKey="value"
                    labelKey="label"
                    placeholder="Status"
                />

            </div>

            <Button variant="primary" icon="add-line" onClick={onAdd}>
                Add Account
            </Button>

        </div>
    );
};

export default Toolbar;