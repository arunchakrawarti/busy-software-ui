// components/molecules/QuickActions.jsx

"use client";

import Card from "./Card";
import Button from "../common/Button";

const QuickActions = ({
    title = "Quick Actions",
    description = "Frequently used actions for this page.",
    actions = [],
    className = "",
}) => {

    if (!actions.length) return null;

    return (

        <Card className={className}>

            <div className="flex flex-col gap-6">

                <div className="flex flex-col gap-1">

                    <h3 className="text-lg font-semibold text-gray-800">
                        {title}
                    </h3>

                    <p className="text-sm text-gray-500">
                        {description}
                    </p>

                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {actions.map((item, index) => (

                        <button
                            key={index}
                            onClick={item.onClick}
                            className="group rounded-xl border border-gray-200 bg-white p-5 text-left transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md"
                        >

                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">

                                <i
                                    className={`ri-${item.icon} text-2xl`}
                                />

                            </div>

                            <h4 className="font-semibold text-gray-800">
                                {item.label}
                            </h4>

                            <p className="mt-1 text-sm text-gray-500">
                                {item.description}
                            </p>

                        </button>

                    ))}

                </div>

                <div className="flex flex-wrap justify-end gap-3">

                    {actions
                        .filter((item) => item.button)
                        .map((item, index) => (

                            <Button
                                key={index}
                                variant={item.variant || "primary"}
                                icon={item.icon}
                                onClick={item.onClick}
                            >
                                {item.label}
                            </Button>

                        ))}

                </div>

            </div>

        </Card>

    );

};

export default QuickActions;