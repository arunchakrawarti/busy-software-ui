"use client";

import { useState } from "react";

import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";
import Switch from "@/components/common/Switch";

import {
    financialYears,
} from "@/config/FinancialYearDummyData";

import Modal from "./Modal";
import DeleteModal from "./DeleteModal";

const OverviewTable = () => {
    const [selectedFinancialYear, setSelectedFinancialYear] = useState(null);

    const [isFormOpen, setIsFormOpen] = useState(false);

    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const actions = [

        ({ row }) => (
            <button
                title="Edit"
                onClick={() => {
                    setSelectedFinancialYear(row);
                    setIsFormOpen(true);
                }}
                className="cursor-pointer text-blue-600 transition hover:text-blue-800"
            >
                <i className="ri-pencil-line text-lg" />
            </button>
        ),

        ({ row }) => (
            <button
                title="Delete"
                onClick={() => {
                    setSelectedFinancialYear(row);
                    setIsDeleteOpen(true);
                }}
                className="cursor-pointer text-red-600 transition hover:text-red-800"
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
                    data={financialYears}
                    actions={actions}
                    pagination
                    total={financialYears.length}
                    pageSize={10}
                />

            </div>

            <Modal
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                financialYear={selectedFinancialYear}
            />

            <DeleteModal
                isOpen={isDeleteOpen}
                onClose={() => setIsDeleteOpen(false)}
                financialYear={selectedFinancialYear}
            />

        </>
    );
};

export default OverviewTable;

const columns = [

    {
        key: "company",
        label: "Company",
    },

    {
        key: "financialYear",
        label: "Financial Year",
    },

    {
        key: "fromDate",
        label: "From Date",
    },

    {
        key: "toDate",
        label: "To Date",
    },

    {
        key: "current",
        label: "Current FY",

        render: (value) => (
            <Switch
                checked={value}
                isBlocked
                dynamicBg="bg-green-500"
            />
        ),
    },

    {
        key: "status",
        label: "Status",

        render: (status) => (
            <Badge text={status} />
        ),
    },

    {
        key: "createdAt",
        label: "Created On",
    },

];