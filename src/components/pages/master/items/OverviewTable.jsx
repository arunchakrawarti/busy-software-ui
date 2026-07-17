"use client";

import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

const OverviewTable = ({ data, onEdit, onDelete }) => {
    const columns = [
        { key: "name", label: "Item Name" },

        {
            key: "type",
            label: "Type",
            render: (v) => <Badge text={v} />,
        },

        { key: "unit", label: "Unit" },
        { key: "hsn", label: "HSN/SAC" },
        { key: "gst", label: "GST %" },

        {
            key: "stockEnabled",
            label: "Stock",
            render: (v) =>
                v ? (
                    <Badge text="Enabled" />
                ) : (
                    <Badge text="Disabled" />
                ),
        },

        { key: "rate", label: "Rate" },
        { key: "status", label: "Status", render: (v) => <Badge text={v} /> },
    ];

    const actions = [

        ({ row }) => (
            <button
                title="Edit"
                onClick={() => onEdit(row)}
                className="cursor-pointer text-blue-600 transition hover:text-blue-800"
            >
                <i className="ri-pencil-line text-lg" />
            </button>
        ),

        ({ row }) => (
            <button
                title="Delete"
                onClick={() => onDelete(row)}
                className="cursor-pointer text-red-600 transition hover:text-red-800"
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

export default OverviewTable;