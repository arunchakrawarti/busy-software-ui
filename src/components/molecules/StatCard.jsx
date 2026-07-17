import React from "react";
import Card from "./Card";

const StatCard = ({
    stat,
    title,
    value,
    icon,
    color = "bg-blue-100 text-blue-600",
    change,
    positive = true,
}) => {
    const data = stat || {
        title,
        value,
        icon,
        color,
        change,
        positive,
    };

    const formatValue = (value) => {
        if (typeof value !== "number") return value;

        return new Intl.NumberFormat("en", {
            notation: "compact",
            maximumFractionDigits: 1,
        }).format(value);
    };

    return (
        <Card bodyClassName="p-4">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-gray-500">
                        {data.title}
                    </p>

                    <h2 className="mt-2 text-2xl font-bold text-gray-800">
                        {formatValue(data.value)}
                    </h2>

                    {data.change && (
                        <div
                            className={`mt-3 flex items-center gap-1 text-xs font-medium ${data.positive
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                        >
                            <i
                                className={
                                    data.positive
                                        ? "ri-arrow-up-line"
                                        : "ri-arrow-down-line"
                                }
                            />

                            {data.change}
                        </div>
                    )}
                </div>

                <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${data.color}`}
                >
                    <i className={`${data.icon} text-2xl`} />
                </div>
            </div>
        </Card>
    );
};

export default StatCard;