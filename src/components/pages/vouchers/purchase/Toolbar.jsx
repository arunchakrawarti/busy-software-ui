"use client";

import Button from "@/components/common/Button";
import SearchBox from "@/components/atoms/SearchBox";

const Toolbar = ({ onAdd }) => {
    return (
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="w-full md:max-w-sm">
                <SearchBox
                    iconLeft
                    placeholder="Search purchase..."
                />
            </div>

            <Button
                variant="primary"
                icon="add-line"
                onClick={onAdd}
            >
                New Purchase
            </Button>

        </div>
    );
};

export default Toolbar;