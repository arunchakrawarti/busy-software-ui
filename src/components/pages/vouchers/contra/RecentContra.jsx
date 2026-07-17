// components/pages/vouchers/contra/RecentContra.jsx

"use client";

import Card from "@/components/molecules/Card";
import Badge from "@/components/common/Badge";

const RecentContra = ({ data = [] }) => {

    return (

        <Card>

            <div className="mb-4 flex items-center justify-between">

                <h2 className="text-base font-semibold text-gray-800">
                    Recent Contra Vouchers
                </h2>

                <span className="text-sm text-gray-500">
                    Latest {data.length}
                </span>

            </div>

            <div className="grid grid-cols-1 gap-4  md:gap-5 md:grid-cols-2 ">

                {data.map((item) => (

                    <div
                        key={item.id}
                        className="flex items-center justify-between rounded-lg border border-gray-200 p-3 hover:bg-gray-50"
                    >

                        <div className="space-y-1">

                            <p className="text-sm font-medium text-gray-800">
                                {item.voucherNo}
                            </p>

                            <p className="text-xs text-gray-500">
                                {item.reference}
                            </p>

                        </div>

                        <div className="text-right">

                            <p className="text-sm font-semibold text-gray-800">
                                ₹{Number(item.amount).toLocaleString()}
                            </p>

                            <Badge text={item.status} />

                        </div>

                    </div>

                ))}

                {data.length === 0 && (

                    <p className="py-6 text-center text-sm text-gray-500">
                        No recent contra vouchers
                    </p>

                )}

            </div>

        </Card>

    );

};

export default RecentContra;