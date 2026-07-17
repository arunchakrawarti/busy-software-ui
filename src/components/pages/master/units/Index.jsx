"use client";

import React from "react";

import Card from "@/components/molecules/Card";

import UnitToolbar from "./UnitToolbar";
import UnitOverviewTable from "./UnitOverviewTable";

const MainUnitMaster = () => {
    return (
        <div className="space-y-6">
            <Card bodyClassName="p-5">
                <UnitToolbar />
                <UnitOverviewTable />
            </Card>
        </div>
    );
};

export default MainUnitMaster;