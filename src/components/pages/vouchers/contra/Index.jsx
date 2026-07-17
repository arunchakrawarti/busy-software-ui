// components/pages/vouchers/contra/Index/MainContraVoucher.jsx

"use client";

import { useState } from "react";

import QuickActions from "@/components/molecules/QuickActions";
import Card from "@/components/molecules/Card";

import OverlayModal from "@/components/common/OverlayModal";
import { AlertModal } from "@/components/common/AlertModal";

import Toolbar from "./Toolbar";
import ContraFilters from "./ContraFilters";
import RecentContra from "./RecentContra";
import OverviewTable from "./OverviewTable";
import Modal from "./Modal";

import {
    contraData,
    defaultContra,
} from "@/config/ContraDummyData";

const MainContraVoucher = () => {

    const [rows, setRows] = useState(contraData);

    const [open, setOpen] = useState(false);

    const [editing, setEditing] = useState(null);

    const [deleteRow, setDeleteRow] = useState(null);

    const handleAdd = () => {
        setEditing(null);
        setOpen(true);
    };

    const handleEdit = (row) => {
        setEditing(row);
        setOpen(true);
    };

    const handleDelete = (row) => {
        setDeleteRow(row);
    };

    const handleSave = (data) => {

        if (editing) {

            setRows((prev) =>
                prev.map((item) =>
                    item.id === editing.id
                        ? {
                            ...data,
                            id: editing.id,
                        }
                        : item
                )
            );

        } else {

            setRows((prev) => [
                {
                    ...data,
                    id: Date.now(),
                },
                ...prev,
            ]);

        }

        setOpen(false);

    };

    const confirmDelete = () => {

        setRows((prev) =>
            prev.filter((item) => item.id !== deleteRow.id)
        );

        setDeleteRow(null);

    };

    return (

        <div className="space-y-6">

            <QuickActions
                actions={[
                    {
                        label: "New Contra",
                        icon: "add-line",
                        onClick: handleAdd,
                    },
                    {
                        label: "Export",
                        icon: "download-line",
                        variant: "outline",
                    },
                    {
                        label: "Print",
                        icon: "printer-line",
                        variant: "outline",
                    },
                ]}
            />

            <RecentContra
                data={rows.slice(0, 5)}
            />

            <ContraFilters />

            <Card>

                <Toolbar
                    onAdd={handleAdd}
                />

                <OverviewTable
                    data={rows}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />

            </Card>

            <OverlayModal
                isOpen={open}
                onClose={() => setOpen(false)}
                modalClass="max-w-6xl h-full mt-4 pb-4"
            >
                <Modal
                    initialData={editing || defaultContra}
                    onClose={() => setOpen(false)}
                    onSave={handleSave}
                />
            </OverlayModal>

            <OverlayModal
                isOpen={!!deleteRow}
                onClose={() => setDeleteRow(null)}
                modalClass="max-w-md"
            >
                <AlertModal
                    icon="delete"
                    title="Delete Contra Voucher"
                    message={`Delete "${deleteRow?.voucherNo}" ?`}
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

        </div>

    );

};

export default MainContraVoucher;