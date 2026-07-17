// components/pages/vouchers/journal/RecentJournal.jsx

"use client";

import Card from "@/components/molecules/Card";
import Badge from "@/components/common/Badge";

const RecentJournal = ({
    data = [],
}) => {

    return (

        <Card>

            <div className="mb-4 flex items-center justify-between">

                <h3 className="text-lg font-semibold">
                    Recent Journal
                </h3>

                <span className="text-sm text-gray-500">
                    Last 5 Entries
                </span>

            </div>

            <div className=" grid grid-cols-1 gap-4  md:gap-5 md:grid-cols-2">

                {data.map((item) => (

                    <div
                        key={item.id}
                        className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
                    >

                        <div>

                            <h5 className="font-medium">
                                {item.voucherNo}
                            </h5>

                            <p className="text-sm text-gray-500">
                                {item.account}
                            </p>

                        </div>

                        <div className="text-right">

                            <p className="font-semibold">
                                ₹ {item.amount}
                            </p>

                            <Badge
                                text={item.status}
                            />

                        </div>

                    </div>

                ))}

            </div>

        </Card>

    );
};

export default RecentJournal;