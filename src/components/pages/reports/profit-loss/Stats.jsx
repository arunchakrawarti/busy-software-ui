"use client";

import StatCard from "@/components/molecules/StatCard";

const Stats = ({ profitLossData = [] }) => {

    const totalAccounts = profitLossData.length;

    const totalIncome = profitLossData
        .filter((item) => item.type === "Income")
        .reduce((sum, item) => sum + Number(item.amount), 0);

    const totalExpense = profitLossData
        .filter((item) => item.type === "Expense")
        .reduce((sum, item) => sum + Number(item.amount), 0);

    const netProfit = totalIncome - totalExpense;

    const activeAccounts = profitLossData.filter(
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
            title: "Total Income",
            value: totalIncome,
            icon: "ri-arrow-up-circle-line",
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Total Expense",
            value: totalExpense,
            icon: "ri-arrow-down-circle-line",
            color: "bg-red-100 text-red-600",
        },
        {
            title: "Net Profit",
            value: netProfit,
            icon: "ri-line-chart-line",
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