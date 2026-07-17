import React from "react";
import { companyStats } from "@/config/CompanyDummyData";
import Card from "@/components/molecules/Card";

const CompanyStats = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {companyStats.map((item) => (
                <Card key={item.id} bodyClassName="p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">
                                {item.title}
                            </p>

                            <h3 className="mt-2 text-3xl font-bold text-gray-800">
                                {item.value}
                            </h3>
                        </div>

                        <div
                            className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}
                        >
                            <i className={`${item.icon} text-2xl`} />
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default CompanyStats;