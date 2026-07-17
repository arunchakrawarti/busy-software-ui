import React from "react";
import Card from "../../molecules/Card";
import {
    inventorySummary,
    outstandingSummary,
    financialProgress,
} from "../../../config/DashboardDummyData";

const DashboardOverview = () => {
    return (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            {/* Outstanding */}
            <Card title="Outstanding Summary">
                <div className="space-y-4">
                    {outstandingSummary.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 p-4"
                        >
                            <span className="font-medium text-gray-600 text-sm">
                                {item.title}
                            </span>

                            <span className={`text-sm font-bold ${item.color}`}>
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Inventory */}
            <Card title="Inventory Summary">
                <div className="grid grid-cols-2 gap-4">
                    {inventorySummary.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-gray-100 p-4 text-center transition hover:border-blue-500"
                        >
                            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                <i className={`${item.icon} text-xl text-blue-600`} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-800">
                                {item.value}
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Financial Overview */}
            <Card title="Financial Overview">
                <div className="space-y-6">
                    {financialProgress.map((item, index) => (
                        <div key={index}>
                            <div className="mb-2 flex items-center justify-between">
                                <span className="font-medium text-gray-700 text-sm">
                                    {item.title}
                                </span>

                                <span className="text-sm font-semibold text-blue-600">
                                    {item.value}%
                                </span>
                            </div>

                            <div className="h-1 overflow-hidden rounded-full bg-gray-200">
                                <div
                                    className="h-full rounded-full bg-blue-600 transition-all"
                                    style={{
                                        width: `${item.value}%`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default DashboardOverview;