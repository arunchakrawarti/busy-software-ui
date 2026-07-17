import React from "react";
import Card from "../../molecules/Card";
import { quickActions } from "../../../config/DashboardDummyData";

const QuickActions = () => {
    return (
        <Card title="Quick Actions">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {quickActions.map((action, index) => (
                    <button
                        key={index}
                        className="group flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-500 hover:bg-blue-50"
                    >
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 transition-all group-hover:bg-blue-600">
                            <i
                                className={`${action.icon} text-xl text-blue-600 group-hover:text-white`}
                            />
                        </div>

                        <span className="text-center text-sm font-medium text-gray-700">
                            {action.title}
                        </span>
                    </button>
                ))}
            </div>
        </Card>
    );
};

export default QuickActions;