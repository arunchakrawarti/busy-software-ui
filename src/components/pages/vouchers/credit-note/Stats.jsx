"use client";

import StatCard from "@/components/molecules/StatCard";

const Stats = ({ data = [] }) => {

    const total = data.length;

    const approved = data.filter(
        (item) => item.status === "Approved"
    ).length;

    const draft = data.filter(
        (item) => item.status === "Draft"
    ).length;

    const cancelled = data.filter(
        (item) => item.status === "Cancelled"
    ).length;

    const totalAmount = data.reduce((sum, item) => {

        const value = Number(
            String(item.amount).replace(/[₹,]/g, "")
        );

        return sum + value;

    }, 0);

    const stats = [
        {
            title: "Total Credit Notes",
            value: total,
            icon: "ri-file-list-3-line",
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "Approved",
            value: approved,
            icon: "ri-checkbox-circle-line",
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Draft",
            value: draft,
            icon: "ri-draft-line",
            color: "bg-amber-100 text-amber-600",
        },
        {
            title: "Cancelled",
            value: cancelled,
            icon: "ri-close-circle-line",
            color: "bg-red-100 text-red-600",
        },
        {
            title: "Total Amount",
            value: `₹${totalAmount.toLocaleString()}`,
            icon: "ri-money-rupee-circle-line",
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