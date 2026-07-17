"use client";

import StatCard from "@/components/molecules/StatCard";

const Stats = ({ rolesData = [] }) => {
    const totalRoles = rolesData.length;
    const activeRoles = rolesData.filter(r => r.status === "Active").length;
    const totalUsers = rolesData.reduce((sum, r) => sum + (r.usersCount || 0), 0);

    const stats = [
        {
            title: "Total Roles",
            value: totalRoles,
            icon: "ri-shield-user-line",
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "Active Roles",
            value: activeRoles,
            icon: "ri-checkbox-circle-line",
            color: "bg-emerald-100 text-emerald-600",
        },
        {
            title: "Assigned Users",
            value: totalUsers,
            icon: "ri-group-line",
            color: "bg-violet-100 text-violet-600",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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