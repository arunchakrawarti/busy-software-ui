"use client";

import { useState } from "react";

import SearchBox from "@/components/atoms/SearchBox";
import Button from "@/components/common/Button";

import WarehouseFormModal from "./WarehouseFormModal";

const WarehouseToolbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="w-full md:max-w-sm">
                    <SearchBox
                        iconLeft
                        placeholder="Search warehouse..."
                    />
                </div>

                <Button
                    variant="primary"
                    icon="add-line"
                    onClick={() => setIsOpen(true)}
                >
                    Add Warehouse
                </Button>
            </div>

            <WarehouseFormModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default WarehouseToolbar;