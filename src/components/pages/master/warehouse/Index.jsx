"use client";

import Card from "@/components/molecules/Card";
import WarehouseToolbar from "./WarehouseToolbar";
import WarehouseOverviewTable from "./WarehouseOverviewTable";

const MainWarehouseMaster = () => {
    return (
        <div className="space-y-6">
            <Card bodyClassName="p-5">
                <WarehouseToolbar />
                <WarehouseOverviewTable />
            </Card>
        </div>
    );
};

export default MainWarehouseMaster;