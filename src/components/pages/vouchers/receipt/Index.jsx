"use client";

import { useMemo, useState } from "react";

import Card from "@/components/molecules/Card";
import StatCard from "@/components/molecules/StatCard";
import OverlayModal from "@/components/common/OverlayModal";
import { AlertModal } from "@/components/common/AlertModal";

import Toolbar from "./Toolbar";
import OverviewTable from "./OverviewTable";
import Modal from "./Modal";

const initialData = [
    {
        id: 1,
        voucherNo: "REC-0001",
        date: "03 Jul 2026",
        account: "ABC Traders",
        mode: "Bank",
        amount: 42000,
        receivedFrom: "ABC Traders",
        referenceNo: "TXN234523",
        status: "Received",
        remarks: "Invoice Payment",
    },
    {
        id: 2,
        voucherNo: "REC-0002",
        date: "03 Jul 2026",
        account: "Sharma Agencies",
        mode: "Cash",
        amount: 8500,
        receivedFrom: "Cash Counter",
        referenceNo: "-",
        status: "Pending",
        remarks: "Advance",
    },
    {
        id: 3,
        voucherNo: "REC-0003",
        date: "02 Jul 2026",
        account: "Metro Sales",
        mode: "UPI",
        amount: 12000,
        receivedFrom: "Metro Sales",
        referenceNo: "UPI44562",
        status: "Received",
        remarks: "Outstanding Clearance",
    },
];

const MainReceiptVoucher = () => {
    const [receipts, setReceipts] = useState(initialData);
    const [selected, setSelected] = useState(null);
    const [deleteRow, setDeleteRow] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);

    const [loading] = useState(false);

    const [filters, setFilters] = useState({
        search: "",
        status: "all",
    });

    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        total: initialData.length,
    });

    const filteredData = useMemo(() => {

        return receipts.filter((item) => {

            const searchMatch =
                item.voucherNo
                    .toLowerCase()
                    .includes(filters.search.toLowerCase()) ||

                item.account
                    .toLowerCase()
                    .includes(filters.search.toLowerCase());

            const statusMatch =
                filters.status === "all"
                    ? true
                    : item.status === filters.status;

            return searchMatch && statusMatch;

        });

    }, [receipts, filters]);

    const stats = useMemo(() => {

        const total = receipts.reduce(
            (sum, item) => sum + item.amount,
            0
        );

        const received = receipts
            .filter((i) => i.status === "Received")
            .reduce((sum, i) => sum + i.amount, 0);

        const pending = receipts
            .filter((i) => i.status === "Pending")
            .reduce((sum, i) => sum + i.amount, 0);

        return {
            total,
            received,
            pending,
            vouchers: receipts.length,
        };

    }, [receipts]);

    const handleAdd = () => {
        setSelected(null);
        setModalOpen(true);
    };

    const handleEdit = (row) => {
        setSelected(row);
        setModalOpen(true);
    };



    const handleDelete = (row) => {
        setDeleteRow(row);
    };

    const confirmDelete = () => {
        console.log("confirmDelete:", deleteRow);

        if (!deleteRow) return;

        setReceipts((prev) =>
            prev.filter((item) => item.id !== deleteRow.id)
        );

        setDeleteRow(null);
    };

    return (
        <>
            <div className="space-y-6">

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                    <StatCard
                        title="Receipt Vouchers"
                        value={stats.vouchers}
                        icon="ri-file-list-3-line"
                    />

                    <StatCard
                        title="Received Today"
                        value={`₹ ${stats.received.toLocaleString()}`}
                        icon="ri-money-rupee-circle-line"
                    />

                    <StatCard
                        title="Pending Collection"
                        value={`₹ ${stats.pending.toLocaleString()}`}
                        icon="ri-time-line"
                    />

                    <StatCard
                        title="Collection Value"
                        value={`₹ ${stats.total.toLocaleString()}`}
                        icon="ri-wallet-3-line"
                    />

                </div>

                <Card>

                    <Toolbar
                        filters={filters}
                        setFilters={setFilters}
                        onAdd={handleAdd}
                    />

                    <OverviewTable
                        data={filteredData}
                        loading={loading}
                        pagination={pagination}
                        setPagination={setPagination}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                </Card>

            </div>

            <OverlayModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                modalClass="max-w-2xl h-full mt-4 pb-4 rounded2"
            >
                <Modal
                    data={selected}
                    onClose={() => setModalOpen(false)}
                />
            </OverlayModal>

            <OverlayModal
                isOpen={!!deleteRow}
                onClose={() => setDeleteRow(null)}
                modalClass="max-w-md"
            >
                <AlertModal
                    icon="delete"
                    title="Delete Receipt Voucher"
                    message="Are you sure you want to delete this receipt voucher?"
                    iconWrapperClass="bg-red-100 text-red-600"
                    buttons={[
                        {
                            text: "Cancel",
                            colorClass:
                                "bg-gray-100 text-gray-700 hover:bg-gray-200",
                            onClick: () => setDeleteRow(null),
                        },
                        {
                            text: "Delete",
                            colorClass:
                                "bg-red-600 text-white hover:bg-red-700",
                            onClick: confirmDelete,
                        },
                    ]}
                />
            </OverlayModal>

        </>
    );

}

export default MainReceiptVoucher;