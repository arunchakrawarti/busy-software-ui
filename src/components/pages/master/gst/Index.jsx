"use client";

import React from "react";

import Card from "@/components/molecules/Card";

import GSTToolbar from "./GSTToolbar";
import GSTOverviewTable from "./GSTOverviewTable";

const MainGstMaster = () => {
    return (
        <div className="space-y-6">
            <Card bodyClassName="p-5">
                <GSTToolbar />
                <GSTOverviewTable />
            </Card>
        </div>
    );
};

export default MainGstMaster;