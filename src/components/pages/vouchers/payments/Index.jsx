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
        voucherNo: "PAY-0001",
        date: "03 Jul 2026",
        account: "ABC Traders",
        mode: "Bank",
        bank: "HDFC Bank",
        amount: 25000,
        status: "Completed",
        remarks: "Vendor Payment",
    },
    {
        id: 2,
        voucherNo: "PAY-0002",
        date: "03 Jul 2026",
        account: "R.K Enterprises",
        mode: "Cash",
        bank: "-",
        amount: 8500,
        status: "Pending",
        remarks: "Office Expense",
    },
    {
        id: 3,
        voucherNo: "PAY-0003",
        date: "02 Jul 2026",
        account: "Modern Pvt Ltd",
        mode: "UPI",
        bank: "-",
        amount: 12500,
        status: "Completed",
        remarks: "Raw Material",
    },
];

const MainPaymentVoucher = () => {

    const [payments, setPayments] = useState(initialData);

    const [selected, setSelected] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);

    const [deleteModal, setDeleteModal] = useState({
        open: false,
        data: null,
    });
     const [deleteRow, setDeleteRow] = useState(null);

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

      const handleDelete = (row) => {
        setDeleteRow(row);
    };

    const filteredData = useMemo(() => {

        return payments.filter((item) => {

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

    }, [payments, filters]);

    const stats = useMemo(() => {

        const total = payments.reduce(
            (sum, item) => sum + item.amount,
            0
        );

        const completed = payments
            .filter((i) => i.status === "Completed")
            .reduce((sum, i) => sum + i.amount, 0);

        const pending = payments
            .filter((i) => i.status === "Pending")
            .reduce((sum, i) => sum + i.amount, 0);

        return {
            total,
            completed,
            pending,
            vouchers: payments.length,
        };

    }, [payments]);

    const handleAdd = () => {

        setSelected(null);

        setModalOpen(true);

    };

    const handleEdit = (row) => {

        setSelected(row);

        setModalOpen(true);

    };

    const confirmDelete = () => {

        setPayments((prev) =>
            prev.filter((item) => item.id !== deleteModal.data.id)
        );

        setDeleteModal({
            open: false,
            data: null,
        });

    };

    return (

        <>
            <div className="space-y-6">

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                    <StatCard
                        title="Total Payments"
                        value={stats.vouchers}
                        icon="ri-bank-card-line"
                    />

                    <StatCard
                        title="Paid Amount"
                        value={`₹ ${stats.completed.toLocaleString()}`}
                        icon="ri-checkbox-circle-line"
                    />

                    <StatCard
                        title="Pending"
                        value={`₹ ${stats.pending.toLocaleString()}`}
                        icon="ri-time-line"
                    />

                    <StatCard
                        title="Overall Value"
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
                modalClass="max-w-2xl h-full mt-4 pb-4"
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
                    title="Delete Payment Voucher"
                    message="Are you sure you want to delete this payment voucher?"
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

export default MainPaymentVoucher;