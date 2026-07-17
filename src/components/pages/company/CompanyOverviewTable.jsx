"use client";

import { useState } from "react";
import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";
import {
    companies,
} from "@/config/CompanyDummyData";
import CompanyFormModal from "./CompanyFormModal";
import CompanyDeleteModal from "./CompanyDeleteModal";

const CompanyOverviewTable = () => {
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const actions = [
        ({ row }) => (
            <button
                onClick={() => {
                    setSelectedCompany(row);
                    setIsFormOpen(true);
                }}
                className="cursor-pointer text-blue-600 hover:text-blue-800"
                title="Edit"
            >
                <i className="ri-pencil-line text-lg" />
            </button>
        ),

        ({ row }) => (
            <button
                onClick={() => {
                    setSelectedCompany(row);
                    setIsDeleteOpen(true);
                }}
                className="cursor-pointer text-red-600 hover:text-red-800"
                title="Delete"
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
                    data={companies}
                    actions={actions}
                    pagination
                    total={companies.length}
                    pageSize={10}
                />
            </div>

            <CompanyFormModal
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                company={selectedCompany}
            />

            <CompanyDeleteModal
                isOpen={isDeleteOpen}
                onClose={() => setIsDeleteOpen(false)}
                company={selectedCompany}
            />
        </>
    );
};

export default CompanyOverviewTable;

const columns = [
    {
        key: "name",
        label: "Company Name",
    },
    {
        key: "owner",
        label: "Owner",
    },
    {
        key: "gst",
        label: "GSTIN",
    },
    {
        key: "state",
        label: "State",
    },
    {
        key: "phone",
        label: "Phone",
    },
    {
        key: "email",
        label: "Email",
    },
    {
        key: "status",
        label: "Status",
        render: (status) => (
            <Badge text={status} />
        ),
    },
];