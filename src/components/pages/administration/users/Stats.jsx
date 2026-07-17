"use client";

import StatCard from "@/components/molecules/StatCard";

const Stats = ({ usersData = [] }) => {
    const totalUsers = usersData.length;

    const activeUsers = usersData.filter(
        (item) => item.status === "Active"
    ).length;

    const inactiveUsers = usersData.filter(
        (item) => item.status === "Inactive"
    ).length;

    const suspendedUsers = usersData.filter(
        (item) => item.status === "Suspended"
    ).length;

    const administrators = usersData.filter(
        (item) => item.role === "Administrator"
    ).length;

    const departments = new Set(
        usersData.map((item) => item.department)
    ).size;

    const stats = [
        {
            title: "Total Users",
            value: totalUsers,
            icon: "ri-group-line",
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "Active Users",
            value: activeUsers,
            icon: "ri-user-follow-line",
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Inactive Users",
            value: inactiveUsers,
            icon: "ri-user-unfollow-line",
            color: "bg-gray-100 text-gray-600",
        },
        {
            title: "Suspended Users",
            value: suspendedUsers,
            icon: "ri-user-forbid-line",
            color: "bg-red-100 text-red-600",
        },
        {
            title: "Administrators",
            value: administrators,
            icon: "ri-admin-line",
            color: "bg-violet-100 text-violet-600",
        },
        {
            title: "Departments",
            value: departments,
            icon: "ri-building-2-line",
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