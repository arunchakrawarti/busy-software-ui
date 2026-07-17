import React from "react";
import DashboardStats from "./DashboardStats";
import QuickActions from "./QuickActions";
import RecentTransactions from "./RecentTransactions";
import DashboardOverview from "./DashboardOverview";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <DashboardStats />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentTransactions />
        </div>

        <div>
          <QuickActions />
        </div>
      </div>

      <DashboardOverview />
    </div>
  );
};

export default Dashboard;