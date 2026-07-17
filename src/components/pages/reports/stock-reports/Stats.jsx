"use client";

import StatCard from "@/components/molecules/StatCard";

const Stats = ({ stockReportsData = [] }) => {

    const totalReports = stockReportsData.length;

    const totalItems = stockReportsData.reduce(
        (sum, item) => sum + Number(item.totalItems),
        0
    );

    const totalStockQuantity = stockReportsData.reduce(
        (sum, item) => sum + Number(item.totalQuantity),
        0
    );

    const totalStockValue = stockReportsData.reduce(
        (sum, item) => sum + Number(item.stockValue),
        0
    );

    const generatedReports = stockReportsData.filter(
        (item) => item.status === "Generated"
    ).length;

    const pendingReports = stockReportsData.filter(
        (item) => item.status === "Pending"
    ).length;

    const stats = [
        {
            title: "Total Reports",
            value: totalReports,
            icon: "ri-file-chart-line",
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "Total Items",
            value: totalItems,
            icon: "ri-stack-line",
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Stock Quantity",
            value: totalStockQuantity,
            icon: "ri-box-3-line",
            color: "bg-violet-100 text-violet-600",
        },
        {
            title: "Stock Value",
            value: totalStockValue,
            icon: "ri-money-dollar-circle-line",
            color: "bg-cyan-100 text-cyan-600",
        },
        {
            title: "Generated Reports",
            value: generatedReports,
            icon: "ri-checkbox-circle-line",
            color: "bg-emerald-100 text-emerald-600",
        },
        {
            title: "Pending Reports",
            value: pendingReports,
            icon: "ri-time-line",
            color: "bg-amber-100 text-amber-600",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
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