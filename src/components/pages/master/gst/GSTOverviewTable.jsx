"use client";

import { useState } from "react";

import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";

import { gstMasters } from "@/config/GSTMasterDummyData";

import GSTFormModal from "./GSTFormModal";
import GSTDeleteModal from "./GSTDeleteModal";

const GSTOverviewTable = () => {
    const [selectedGST, setSelectedGST] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const actions = [
        ({ row }) => (
            <button
                title="Edit"
                onClick={() => {
                    setSelectedGST(row);
                    setIsFormOpen(true);
                }}
                className="cursor-pointer text-blue-600 hover:text-blue-800"
            >
                <i className="ri-pencil-line text-lg" />
            </button>
        ),

        ({ row }) => (
            <button
                title="Delete"
                onClick={() => {
                    setSelectedGST(row);
                    setIsDeleteOpen(true);
                }}
                className="cursor-pointer text-red-600 hover:text-red-800"
            >
                <i className="ri-delete-bin-6-line text-lg" />
            </button>
        ),
    ];

    return (
        <>
            <div className="mt-6">
                <BasicTable
                    columns={columns}
                    data={gstMasters}
                    actions={actions}
                    pagination
                    total={gstMasters.length}
                    pageSize={10}
                />
            </div>

            <GSTFormModal
                isOpen={isFormOpen}
                onClose={() => {
                    setIsFormOpen(false);
                    setSelectedGST(null);
                }}
                selected={selectedGST}
            />

            <GSTDeleteModal
                isOpen={isDeleteOpen}
                onClose={() => {
                    setIsDeleteOpen(false);
                    setSelectedGST(null);
                }}
                selected={selectedGST}
            />
        </>
    );
};

export default GSTOverviewTable;

const columns = [
    {
        key: "name",
        label: "GST Name",
    },
    {
        key: "cgst",
        label: "CGST (%)",
        render: (value) => `${value}%`,
    },
    {
        key: "sgst",
        label: "SGST (%)",
        render: (value) => `${value}%`,
    },
    {
        key: "igst",
        label: "IGST (%)",
        render: (value) => `${value}%`,
    },
    {
        key: "type",
        label: "Type",
    },
    {
        key: "status",
        label: "Status",
        render: (status) => (
            <Badge text={status} />
        ),
    },
];