"use client";

import StatCard from "@/components/molecules/StatCard";

const Stats = ({ materialIssueData = [] }) => {

    const total = materialIssueData.length;

    const issued = materialIssueData.filter(
        (item) => item.status === "Issued"
    ).length;

    const pending = materialIssueData.filter(
        (item) => item.status === "Pending"
    ).length;

    const cancelled = materialIssueData.filter(
        (item) => item.status === "Cancelled"
    ).length;

    const totalQuantity = materialIssueData.reduce(
        (sum, item) => sum + Number(item.quantity),
        0
    );

    const stats = [
        {
            title: "Total Issues",
            value: total,
            icon: "ri-file-list-3-line",
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "Issued",
            value: issued,
            icon: "ri-checkbox-circle-line",
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Pending",
            value: pending,
            icon: "ri-time-line",
            color: "bg-amber-100 text-amber-600",
        },
        {
            title: "Cancelled",
            value: cancelled,
            icon: "ri-close-circle-line",
            color: "bg-red-100 text-red-600",
        },
        {
            title: "Total Quantity",
            value: totalQuantity,
            icon: "ri-inbox-unarchive-line",
            color: "bg-violet-100 text-violet-600",
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