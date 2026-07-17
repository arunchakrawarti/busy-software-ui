import React from "react";
import StatCard from "@/components/molecules/StatCard";
import { dashboardStats } from "../../../config/DashboardDummyData";

const DashboardStats = () => {
    return (
        <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardStats.map((stat) => (
                <StatCard
                    key={stat.id}
                    stat={stat}
                />
            ))}
        </div>
    );
};

export default DashboardStats;