"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { backupHistoryData } from "@/config/BackupDummyData";
import OverlayModal from "@/components/common/OverlayModal";
import { AlertModal } from "@/components/common/AlertModal";

const MainRestore = () => {
    const [selectedBackup, setSelectedBackup] = useState("");
    const [isRestoring, setIsRestoring] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleRestore = () => {
        setIsRestoring(true);
        setShowConfirm(false);
        setTimeout(() => {
            setIsRestoring(false);
            alert("System restored successfully!");
        }, 3000);
    };

    return (
        <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 border-b border-slate-100 pb-4">
                    <h3 className="text-lg font-semibold text-slate-800">
                        Restore from Local File
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                        Upload a previously downloaded backup file (.zip or .sql) to restore the system state.
                    </p>
                </div>
                
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                    <div className="flex-1">
                        <Input
                            type="file"
                            label="Select Backup File"
                            name="backupFile"
                            accept=".zip,.sql"
                        />
                    </div>
                    <Button
                        variant="primary"
                        icon="upload-cloud-2-line"
                        onClick={() => setShowConfirm(true)}
                    >
                        Upload & Restore
                    </Button>
                </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 border-b border-slate-100 pb-4">
                    <h3 className="text-lg font-semibold text-slate-800">
                        Restore from System Backups
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                        Choose a recent automatic or manual backup stored on the server to restore.
                    </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                    <div className="flex-1">
                        <Input
                            type="select"
                            label="Available Backups"
                            name="selectedBackup"
                            value={selectedBackup}
                            onChange={(e) => setSelectedBackup(e.target.value)}
                            options={[
                                { label: "Select a backup...", value: "" },
                                ...backupHistoryData.map((b) => ({
                                    label: `${b.fileName} (${b.date}) - ${b.size}`,
                                    value: b.id,
                                })),
                            ]}
                        />
                    </div>
                    <Button
                        variant="primary"
                        icon={isRestoring ? "loader-4-line animate-spin" : "refresh-line"}
                        onClick={() => {
                            if (selectedBackup) setShowConfirm(true);
                        }}
                        disabled={!selectedBackup || isRestoring}
                    >
                        {isRestoring ? "Restoring..." : "Restore Selected"}
                    </Button>
                </div>
            </div>

            <OverlayModal
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                modalClass="max-w-md"
            >
                <AlertModal
                    icon="error-warning-line"
                    title="Confirm Restore"
                    message="Are you sure you want to restore this backup? Current data will be overwritten and you will be logged out."
                    iconWrapperClass="bg-amber-100 text-amber-600"
                    buttons={[
                        {
                            text: "Cancel",
                            colorClass: "bg-gray-100 text-gray-700 hover:bg-gray-200",
                            onClick: () => setShowConfirm(false),
                        },
                        {
                            text: "Yes, Restore",
                            colorClass: "bg-amber-600 text-white hover:bg-amber-700",
                            onClick: handleRestore,
                        },
                    ]}
                />
            </OverlayModal>
        </div>
    );
};

export default MainRestore;
