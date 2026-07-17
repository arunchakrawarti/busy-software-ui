"use client";

import { useState } from "react";

import SearchBox from "@/components/atoms/SearchBox";
import Button from "@/components/common/Button";

import GSTFormModal from "./GSTFormModal";

const GSTToolbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="w-full md:max-w-sm">
                    <SearchBox
                        iconLeft
                        placeholder="Search GST..."
                    />
                </div>

                <Button
                    variant="primary"
                    icon="add-line"
                    onClick={() => setIsOpen(true)}
                >
                    Add GST
                </Button>
            </div>

            <GSTFormModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default GSTToolbar;