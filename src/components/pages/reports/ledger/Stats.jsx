"use client";

import StatCard from "@/components/molecules/StatCard";

const Stats = ({ ledgerData = [] }) => {

    const totalVouchers = ledgerData.length;

    const totalDebit = ledgerData.reduce(
        (sum, item) => sum + Number(item.debit),
        0
    );

    const totalCredit = ledgerData.reduce(
        (sum, item) => sum + Number(item.credit),
        0
    );

    const posted = ledgerData.filter(
        (item) => item.status === "Posted"
    ).length;

    const draft = ledgerData.filter(
        (item) => item.status === "Draft"
    ).length;

    const stats = [
        {
            title: "Total Vouchers",
            value: totalVouchers,
            icon: "ri-file-list-3-line",
            color: "bg-blue-100 text-blue-600",
        },
        {
            title: "Total Debit",
            value: totalDebit,
            icon: "ri-arrow-left-down-line",
            color: "bg-green-100 text-green-600",
        },
        {
            title: "Total Credit",
            value: totalCredit,
            icon: "ri-arrow-right-up-line",
            color: "bg-violet-100 text-violet-600",
        },
        {
            title: "Posted",
            value: posted,
            icon: "ri-checkbox-circle-line",
            color: "bg-emerald-100 text-emerald-600",
        },
        {
            title: "Draft",
            value: draft,
            icon: "ri-time-line",
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