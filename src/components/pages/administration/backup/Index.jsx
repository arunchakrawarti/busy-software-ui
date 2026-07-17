"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";
import StatCard from "@/components/molecules/StatCard";
import { backupHistoryData } from "@/config/BackupDummyData";

const MainBackup = () => {
    const [backups, setBackups] = useState(backupHistoryData);
    const [isBackingUp, setIsBackingUp] = useState(false);

    const handleBackup = () => {
        setIsBackingUp(true);
        setTimeout(() => {
            const newBackup = {
                id: Date.now(),
                fileName: `backup_${new Date().toISOString().split("T")[0]}.zip`,
                date: new Date().toLocaleString(),
                size: "46.1 MB",
                status: "Success",
                type: "Manual",
            };
            setBackups([newBackup, ...backups]);
            setIsBackingUp(false);
        }, 2000);
    };

    const columns = [
        { key: "fileName", label: "File Name" },
        { key: "date", label: "Date & Time" },
        { key: "size", label: "File Size" },
        { key: "type", label: "Backup Type" },
        {
            key: "status",
            label: "Status",
            render: (value) => <Badge text={value} />,
        },
    ];

    const actions = [
        ({ row }) => (
            <button
                title="Download"
                className="cursor-pointer text-blue-600 hover:text-blue-800"
            >
                <i className="ri-download-2-line text-lg" />
            </button>
        ),
        ({ row }) => (
            <button
                title="Delete"
                className="cursor-pointer text-red-600 hover:text-red-800"
                onClick={() => setBackups(backups.filter((b) => b.id !== row.id))}
            >
                <i className="ri-delete-bin-6-line text-lg" />
            </button>
        ),
    ];

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard
                    stat={{
                        title: "Total Backups",
                        value: backups.length,
                        icon: "ri-database-2-line",
                        color: "bg-blue-100 text-blue-600",
                    }}
                />
                <StatCard
                    stat={{
                        title: "Last Backup",
                        value: backups[0]?.date.split(" ")[0] || "Never",
                        icon: "ri-time-line",
                        color: "bg-emerald-100 text-emerald-600",
                    }}
                />
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                        Create New Backup
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                        Generate a manual backup of your database and system files immediately.
                    </p>
                </div>
                <Button
                    variant="primary"
                    icon={isBackingUp ? "loader-4-line animate-spin" : "save-3-line"}
                    onClick={handleBackup}
                    disabled={isBackingUp}
                >
                    {isBackingUp ? "Backing up..." : "Backup Now"}
                </Button>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-slate-800">
                    Backup History
                </h3>
                <BasicTable
                    columns={columns}
                    data={backups}
                    actions={actions}
                    pagination
                    total={backups.length}
                />
            </div>
        </div>
    );
};

export default MainBackup;
