"use client";

import StatCard from "@/components/molecules/StatCard";

const Stats = ({ outstandingReportData = [] }) => {

    const totalReports = outstandingReportData.length;

    const totalParties = outstandingReportData.reduce(
        (sum, item) => sum + Number(item.totalParties),
        0
    );

    const totalOutstanding = outstandingReportData.reduce(
        (sum, item) => sum + Number(item.totalOutstanding),
        0
    );

    const totalOverdue = outstandingReportData.reduce(
        (sum, item) => sum + Number(item.overdueAmount),
        0
    );

    const generatedReports = outstandingReportData.filter(
        (item) => item.status === "Generated"
    ).length;

    const pendingReports = outstandingReportData.filter(
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
            title: "Total Parties",
            value: totalParties,
            icon: "ri-group-line",
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Total Outstanding",
            value: totalOutstanding,
            icon: "ri-money-dollar-circle-line",
            color: "bg-violet-100 text-violet-600",
        },
        {
            title: "Overdue Amount",
            value: totalOverdue,
            icon: "ri-alarm-warning-line",
            color: "bg-red-100 text-red-600",
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