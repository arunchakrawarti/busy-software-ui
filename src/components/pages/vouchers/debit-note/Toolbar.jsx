// components/pages/vouchers/debit-note/Toolbar.jsx

"use client";

import SearchBox from "@/components/atoms/SearchBox";
import Button from "@/components/common/Button";

const Toolbar = ({ onAdd }) => {

    return (

        <div className="flex flex-col gap-4 border-b border-slate-200 p-4 md:flex-row md:items-center md:justify-between">

            <div>

                <h2 className="text-xl font-semibold text-slate-800">
                    Debit Note Voucher
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Manage all debit note vouchers from one place.
                </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

                <div>
                    <SearchBox
                        placeholder="Search debit note..."
                        className="w-full sm:w-72"
                        iconLeft
                    />

                </div>
                <Button
                    variant="primary"
                    children="New Debit Note"
                    icon="add-line"
                    onClick={onAdd}
                />

            </div>

        </div>

    );

};

export default Toolbar;