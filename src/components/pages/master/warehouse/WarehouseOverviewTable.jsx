"use client";

import { useState } from "react";

import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";

import { warehouses } from "@/config/WarehouseDummyData";

import WarehouseFormModal from "./WarehouseFormModal";
import WarehouseDeleteModal from "./WarehouseDeleteModal";

const WarehouseOverviewTable = () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const actions = [
        ({ row }) => (
            <button
                title="Edit"
                onClick={() => {
                    setSelectedWarehouse(row);
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
                    setSelectedWarehouse(row);
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
                    data={warehouses}
                    actions={actions}
                    pagination
                    total={warehouses.length}
                    pageSize={10}
                />
            </div>

            <WarehouseFormModal
                isOpen={isFormOpen}
                onClose={() => {
                    setIsFormOpen(false);
                    setSelectedWarehouse(null);
                }}
                selected={selectedWarehouse}
            />

            <WarehouseDeleteModal
                isOpen={isDeleteOpen}
                onClose={() => {
                    setIsDeleteOpen(false);
                    setSelectedWarehouse(null);
                }}
                selected={selectedWarehouse}
            />
        </>
    );
};

export default WarehouseOverviewTable;

const columns = [
    {
        key: "name",
        label: "Warehouse Name",
    },
    {
        key: "code",
        label: "Code",
    },
    {
        key: "contactPerson",
        label: "Contact Person",
    },
    {
        key: "phone",
        label: "Phone",
    },
    {
        key: "city",
        label: "City",
    },
    {
        key: "status",
        label: "Status",
        render: (status) => (
            <Badge text={status} />
        ),
    },
];