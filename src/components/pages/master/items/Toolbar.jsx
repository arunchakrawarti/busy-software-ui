"use client";

import SearchBox from "@/components/atoms/SearchBox";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

import { itemTypes } from "@/config/ItemMasterDummyData";

const Toolbar = ({
    search,
    type,
    onSearchChange,
    onTypeChange,
    onAdd,
}) => {
    return (
        <div className="bg-white p-4 rounded1 flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1">

                <SearchBox
                    value={search}
                    onChange={onSearchChange}
                    placeholder="Search Item..."
                    iconLeft
                />

                <Input
                    type="select"
                    value={type}
                    onChange={onTypeChange}
                    options={itemTypes}
                    valueKey="value"
                    labelKey="label"
                    placeholder="Item Type"
                />

            </div>

            <Button variant="primary" icon="add-line" onClick={onAdd}>
                Add Item
            </Button>

        </div>
    );
};

export default Toolbar;