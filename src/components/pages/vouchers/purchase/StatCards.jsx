"use client";

import StatCard from "@/components/common/StatCard";

const StatCards = ({ stats = [] }) => {
    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
                <StatCard key={item.title} stat={item} />
            ))}
        </div>
    );
};

export default StatCards;