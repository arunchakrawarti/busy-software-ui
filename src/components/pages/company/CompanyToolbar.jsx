"use client";

import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import SearchBox from "@/components/atoms/SearchBox";
import {
    statusOptions,
    stateOptions,
} from "@/config/CompanyDummyData";

const CompanyToolbar = ({
    onAddCompany,
}) => {
    const [status, setStatus] = React.useState("");
    const [state, setState] = React.useState("");

    return (
        <div className="mb-6 rounded1 bg-white p-4">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">

                {/* Filters */}

                <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-2">

                    <SearchBox
                        placeholder="Search company..."
                        iconLeft
                        className="pr-10"
                    />

                    <div className="flex  items-center gap-3">
                        <Input
                            type="select"
                            options={statusOptions}
                            placeholder="Status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />

                        <Input
                            type="select"
                            options={stateOptions.map((item) => ({
                                label: item,
                                value: item,
                            }))}
                            placeholder="State"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>

                </div>

                {/* Actions */}

                <div className="flex flex-wrap items-center gap-3">

                    <Button
                        variant="outline"
                        icon="refresh-line"
                    >
                        Refresh
                    </Button>

                    <Button
                        variant="outline"
                        icon="download-2-line"
                    >
                        Export
                    </Button>

                    <Button
                        variant="primary"
                        icon="add-line"
                        onClick={onAddCompany}
                    >
                        Add Company
                    </Button>

                </div>

            </div>
        </div>
    );
};

export default CompanyToolbar;