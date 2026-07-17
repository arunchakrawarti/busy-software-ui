// components/pages/vouchers/contra/Toolbar.jsx

"use client";

import SearchBox from "@/components/atoms/SearchBox";
import Button from "@/components/common/Button";

const Toolbar = ({
    search = "",
    onSearch = () => { },
    onAdd,
}) => {

    return (

        <div className="flex flex-col gap-4 border-b border-gray-200 pb-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="w-full lg:max-w-md">

                <SearchBox
                    placeholder="Search voucher no, reference, account..."
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                    iconLeft
                />

            </div>

            <div className="flex flex-wrap items-center gap-3">

                <Button
                    variant="outline"
                    icon="ri-filter-3-line"
                >
                    Filter
                </Button>

                <Button
                    variant="outline"
                    icon="ri-download-2-line"
                >
                    Export
                </Button>

                <Button
                    variant="primary"
                    icon="ri-add-line"
                    onClick={onAdd}
                >
                    New Contra
                </Button>

            </div>

        </div>

    );

};

export default Toolbar;