"use client";

import Card from "@/components/molecules/Card";
import Input from "@/components/common/Input";
import { useState } from "react";
import {
    warehouses,
    paymentModes,
    salesmen,
    gstTypes,
} from "@/config/SalesDummyData";

const VoucherInfoCard = () => {
    const today = new Date().toISOString().split("T")[0];
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [selectedPaymentMode, setSelectedPaymentMode] = useState(null);
    const [selectedSalesman, setSelectedSalesman] = useState(null);
    const [selectedGstType, setSelectedGstType] = useState(null);
    const [selectedReferenceNo, setSelectedReferenceNo] = useState("");

    return (
        <Card
            title="Voucher Information"
            subtitle="Manage voucher details."
            bodyClassName="space-y-4"
        >
            <div className="grid gap-4 md:grid-cols-2">

                <Input
                    label="Voucher No."
                    value="SV-00001"
                    readOnly
                    onChange={(e) => setSelectedReferenceNo(e.target.value)}
                />

                <Input
                    type="date"
                    label="Voucher Date"
                    value={today}
                    readOnly
                    onChange={(e) => setSelectedReferenceNo(e.target.value)}
                />

            </div>

            <Input
                type="select"
                label="Warehouse"
                placeholder="Select warehouse"
                options={warehouses}
                valueKey="value"
                labelKey="label"
                value={selectedWarehouse}
                onChange={(e) => setSelectedWarehouse(e.target.value)}
            />

            <Input
                type="select"
                label="Payment Mode"
                placeholder="Select payment mode"
                options={paymentModes}
                valueKey="value"
                labelKey="label"
                value={selectedPaymentMode}
                onChange={(e) => setSelectedPaymentMode(e.target.value)}
            />

            <Input
                type="select"
                label="Salesman"
                placeholder="Select salesman"
                options={salesmen}
                valueKey="value"
                labelKey="label"
                value={selectedSalesman}
                onChange={(e) => setSelectedSalesman(e.target.value)}
            />

            <Input
                type="select"
                label="GST Type"
                placeholder="Select GST type"
                options={gstTypes}
                valueKey="value"
                labelKey="label"
                value={selectedGstType}
                onChange={(e) => setSelectedGstType(e.target.value)}
            />

            <Input
                label="Reference No."
                placeholder="Enter reference number"
                value={selectedReferenceNo}
                onChange={(e) => setSelectedReferenceNo(e.target.value)}
            />

            <Input
                type="textarea"
                label="Remarks"
                placeholder="Enter remarks (optional)"
                value={selectedReferenceNo}
                onChange={(e) => setSelectedReferenceNo(e.target.value)}
            />
        </Card>
    );
};

export default VoucherInfoCard;