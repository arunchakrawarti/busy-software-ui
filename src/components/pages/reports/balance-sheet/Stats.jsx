"use client";

import StatCard from "@/components/molecules/StatCard";

const Stats = ({ balanceSheetData = [] }) => {

    const totalAccounts = balanceSheetData.length;

    const totalAssets = balanceSheetData
        .filter((item) => item.type === "Asset")
        .reduce((sum, item) => sum + Number(item.amount), 0);

    const totalLiabilities = balanceSheetData
        .filter((item) => item.type === "Liability")
        .reduce((sum, item) => sum + Number(item.amount), 0);

    const totalEquity = balanceSheetData
        .filter((item) => item.type === "Equity")
        .reduce((sum, item) => sum + Number(item.amount), 0);

    const activeAccounts = balanceSheetData.filter(
        (item) => item.status === "Active"
    ).length;

    const stats = [
        {
            title: "Total Accounts",
            value: totalAccounts,
            icon: "ri-contacts-book-2-line",
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "Total Assets",
            value: totalAssets,
            icon: "ri-bank-card-line",
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Total Liabilities",
            value: totalLiabilities,
            icon: "ri-file-warning-line",
            color: "bg-red-100 text-red-600",
        },
        {
            title: "Total Equity",
            value: totalEquity,
            icon: "ri-scales-3-line",
            color: "bg-violet-100 text-violet-600",
        },
        {
            title: "Active Accounts",
            value: activeAccounts,
            icon: "ri-checkbox-circle-line",
            color: "bg-amber-100 text-amber-600",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {stats.map((stat) => (
                <StatCard
                    key={stat.title}
                    stat={stat}
                />
            ))}
        </div>
    );
};

export default Stats;