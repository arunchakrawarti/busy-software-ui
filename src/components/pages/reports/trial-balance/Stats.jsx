"use client";

import StatCard from "@/components/molecules/StatCard";

const Stats = ({ trialBalanceData = [] }) => {

    const totalAccounts = trialBalanceData.length;

    const totalDebit = trialBalanceData.reduce(
        (sum, item) => sum + Number(item.debit),
        0
    );

    const totalCredit = trialBalanceData.reduce(
        (sum, item) => sum + Number(item.credit),
        0
    );

    const totalClosingDebit = trialBalanceData.reduce(
        (sum, item) => sum + Number(item.closingDebit),
        0
    );

    const totalClosingCredit = trialBalanceData.reduce(
        (sum, item) => sum + Number(item.closingCredit),
        0
    );

    const balancedAccounts = trialBalanceData.filter(
        (item) => item.status === "Balanced"
    ).length;

    const stats = [
        {
            title: "Total Accounts",
            value: totalAccounts,
            icon: "ri-contacts-book-2-line",
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
            color: "bg-indigo-100 text-indigo-600",
        },
        {
            title: "Closing Debit",
            value: totalClosingDebit,
            icon: "ri-wallet-3-line",
            color: "bg-amber-100 text-amber-600",
        },
        {
            title: "Closing Credit",
            value: totalClosingCredit,
            icon: "ri-bank-card-line",
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