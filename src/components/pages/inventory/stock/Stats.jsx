"use client";

import StatCard from "@/components/molecules/StatCard";

const Stats = ({ stockData  = [] }) => {

    const total = stockData.length;

const inStock = stockData.filter(
    (item) => item.status === "In Stock"
).length;

const lowStock = stockData.filter(
    (item) => item.status === "Low Stock"
).length;

const outOfStock = stockData.filter(
    (item) => item.status === "Out of Stock"
).length;

const totalClosingStock = stockData.reduce(
    (sum, item) => sum + Number(item.closingStock),
    0
);
    const stats = [
        {
            title: "Total Items",
            value: total,
            icon: "ri-stack-line",
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "In Stock",
            value: inStock,
            icon: "ri-checkbox-circle-line",
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Low Stock",
            value: lowStock,
            icon: "ri-error-warning-line",
            color: "bg-amber-100 text-amber-600",
        },
        {
            title: "Out of Stock",
            value: outOfStock,
            icon: "ri-close-circle-line",
            color: "bg-red-100 text-red-600",
        },
        {
            title: "Closing Stock",
            value: totalClosingStock,
            icon: "ri-archive-stack-line",
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