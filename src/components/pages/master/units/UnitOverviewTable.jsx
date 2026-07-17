"use client";

import { useState } from "react";

import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";

import { units } from "@/config/UnitMasterDummyData";

import UnitFormModal from "./UnitFormModal";
import UnitDeleteModal from "./UnitDeleteModal";

const UnitOverviewTable = () => {
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const actions = [
        ({ row }) => (
            <button
                title="Edit"
                onClick={() => {
                    setSelectedUnit(row);
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
                    setSelectedUnit(row);
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
                    data={units}
                    actions={actions}
                    pagination
                    total={units.length}
                    pageSize={10}
                />
            </div>

            <UnitFormModal
                isOpen={isFormOpen}
                onClose={() => {
                    setIsFormOpen(false);
                    setSelectedUnit(null);
                }}
                selected={selectedUnit}
            />

            <UnitDeleteModal
                isOpen={isDeleteOpen}
                onClose={() => {
                    setIsDeleteOpen(false);
                    setSelectedUnit(null);
                }}
                selected={selectedUnit}
            />
        </>
    );
};

export default UnitOverviewTable;

const columns = [
    {
        key: "name",
        label: "Unit Name",
    },
    {
        key: "symbol",
        label: "Symbol",
    },
    {
        key: "type",
        label: "Type",
    },
    {
        key: "decimal",
        label: "Decimal Places",
    },
    {
        key: "status",
        label: "Status",
        render: (status) => (
            <Badge text={status} />
        ),
    },
];