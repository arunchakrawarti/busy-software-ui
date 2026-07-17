"use client";
import { useState } from "react";
import Input from "@/components/common/Input";
import Card from "@/components/molecules/Card";

import { customers } from "@/config/SalesDummyData";

const CustomerCard = () => {
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    return (
        <Card
            title="Customer Information"
            subtitle="Select customer for this voucher."
            bodyClassName="space-y-4"
        >
            <Input
                type="select"
                label="Customer"
                placeholder="Select customer"
                options={customers}
                valueKey="name"
                labelKey="name"
                value={selectedCustomer}
                onChange={(e) => setSelectedCustomer(e.target.value)}
            />

            <Input
                label="GSTIN"
                value="07ABCDE1234F1Z5"
                readOnly
            />

            <Input
                label="Phone"
                value="9876543210"
                readOnly
            />

            <Input
                label="City"
                value="New Delhi"
                readOnly
            />

            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">

                <p className="text-xs uppercase tracking-wide text-slate-500">
                    Current Balance
                </p>

                <h4 className="mt-1 text-lg font-semibold text-emerald-700">
                    ₹ 15,250.00 Dr
                </h4>

            </div>
        </Card>
    );
};

export default CustomerCard;