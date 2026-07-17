"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Switch from "@/components/common/Switch";

const MainSettings = () => {
    const [activeTab, setActiveTab] = useState("general");
    
    const [settings, setSettings] = useState({
        systemName: "Busy Software ERP",
        timezone: "Asia/Kolkata",
        dateFormat: "DD/MM/YYYY",
        currency: "INR",
        financialYearStart: "01-04",
        enableNotifications: true,
        autoBackup: true,
        twoFactorAuth: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleToggle = (name, value) => {
        setSettings({ ...settings, [name]: value });
    };

    const handleSave = () => {
        alert("Settings saved successfully!");
    };

    const tabs = [
        { id: "general", label: "General", icon: "ri-global-line" },
        { id: "financial", label: "Financial", icon: "ri-wallet-3-line" },
        { id: "security", label: "Security & Backup", icon: "ri-shield-check-line" },
    ];

    return (
        <div className="flex flex-col gap-6 lg:flex-row">
            {/* Sidebar Tabs */}
            <div className="w-full lg:w-64">
                <div className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                                activeTab === tab.id
                                    ? "bg-blue-50 text-blue-700"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                        >
                            <i className={`${tab.icon} text-lg`} />
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Settings Content */}
            <div className="flex-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-semibold text-slate-800">
                        {tabs.find((t) => t.id === activeTab)?.label} Settings
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                        Update your system's {activeTab} configuration and preferences.
                    </p>
                </div>

                <div className="space-y-6">
                    {activeTab === "general" && (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <Input
                                label="System Name"
                                name="systemName"
                                value={settings.systemName}
                                onChange={handleChange}
                            />
                            <Input
                                type="select"
                                label="Timezone"
                                name="timezone"
                                value={settings.timezone}
                                onChange={handleChange}
                                options={[
                                    { label: "Asia/Kolkata (IST)", value: "Asia/Kolkata" },
                                    { label: "America/New_York (EST)", value: "America/New_York" },
                                    { label: "Europe/London (GMT)", value: "Europe/London" },
                                ]}
                            />
                            <Input
                                type="select"
                                label="Date Format"
                                name="dateFormat"
                                value={settings.dateFormat}
                                onChange={handleChange}
                                options={[
                                    { label: "DD/MM/YYYY", value: "DD/MM/YYYY" },
                                    { label: "MM/DD/YYYY", value: "MM/DD/YYYY" },
                                    { label: "YYYY-MM-DD", value: "YYYY-MM-DD" },
                                ]}
                            />
                        </div>
                    )}

                    {activeTab === "financial" && (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <Input
                                type="select"
                                label="Default Currency"
                                name="currency"
                                value={settings.currency}
                                onChange={handleChange}
                                options={[
                                    { label: "Indian Rupee (INR)", value: "INR" },
                                    { label: "US Dollar (USD)", value: "USD" },
                                    { label: "Euro (EUR)", value: "EUR" },
                                ]}
                            />
                            <Input
                                type="select"
                                label="Financial Year Start"
                                name="financialYearStart"
                                value={settings.financialYearStart}
                                onChange={handleChange}
                                options={[
                                    { label: "1st April", value: "01-04" },
                                    { label: "1st January", value: "01-01" },
                                ]}
                            />
                        </div>
                    )}

                    {activeTab === "security" && (
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4">
                                <div>
                                    <h4 className="font-medium text-slate-800">Email Notifications</h4>
                                    <p className="text-sm text-slate-500">Receive system alerts and updates via email.</p>
                                </div>
                                <Switch
                                    checked={settings.enableNotifications}
                                    onChange={(val) => handleToggle("enableNotifications", val)}
                                />
                            </div>
                            
                            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4">
                                <div>
                                    <h4 className="font-medium text-slate-800">Automatic Backup</h4>
                                    <p className="text-sm text-slate-500">Automatically backup database daily at midnight.</p>
                                </div>
                                <Switch
                                    checked={settings.autoBackup}
                                    onChange={(val) => handleToggle("autoBackup", val)}
                                />
                            </div>

                            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4">
                                <div>
                                    <h4 className="font-medium text-slate-800">Two-Factor Authentication</h4>
                                    <p className="text-sm text-slate-500">Require an extra security step when logging in.</p>
                                </div>
                                <Switch
                                    checked={settings.twoFactorAuth}
                                    onChange={(val) => handleToggle("twoFactorAuth", val)}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-5">
                    <Button variant="outline">Discard Changes</Button>
                    <Button variant="primary" icon="save-line" onClick={handleSave}>
                        Save Settings
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MainSettings;
