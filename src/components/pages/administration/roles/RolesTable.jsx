"use client";

import { useRouter } from "next/navigation";

import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";

const RolesTable = ({
    data,
    onEdit,
    onDelete,
}) => {
    const columns = [
        { key: "roleName", label: "Role Name" },
        { key: "description", label: "Description" },
        { key: "usersCount", label: "Total Users" },
        {
            key: "status",
            label: "Status",
            render: (value) => <Badge text={value} />,
        },
    ];

    const actions = [
        ({ row }) => (
            <button
                title="Edit"
                onClick={() => onEdit(row)}
                className="cursor-pointer text-blue-600 hover:text-blue-800"
            >
                <i className="ri-pencil-line text-lg" />
            </button>
        ),
        ({ row }) => (
            <button
                title="Delete"
                onClick={() => onDelete(row)}
                className="cursor-pointer text-red-600 hover:text-red-800"
            >
                <i className="ri-delete-bin-6-line text-lg" />
            </button>
        ),
    ];

    return (
        <div className="mt-5">
            <BasicTable
                columns={columns}
                data={data}
                actions={actions}
                pagination
                total={data.length}
            />
        </div>
    );
};

export default RolesTable;
