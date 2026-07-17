// components/pages/vouchers/journal/Toolbar.jsx

"use client";

import SearchBox from "@/components/atoms/SearchBox";
import Button from "@/components/common/Button";

const Toolbar = ({
    onAdd,
}) => {
    return (

        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="w-full md:max-w-sm">

                <SearchBox
                    iconLeft
                    placeholder="Search journal..."
                />

            </div>

            <Button
                variant="primary"
                icon="add-line"
                onClick={onAdd}
            >
                New Journal
            </Button>

        </div>

    );
};

export default Toolbar;