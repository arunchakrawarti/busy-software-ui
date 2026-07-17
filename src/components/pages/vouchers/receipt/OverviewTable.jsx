"use client";

import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import BasicTable from "@/components/common/BasicTable";

const OverviewTable = ({
    data,
    loading,
    pagination,
    onEdit,
    onDelete,
}) => {

    const columns = [
        {
            label: "Voucher No",
            key: "voucherNo",
        },
        {
            label: "Date",
            key: "date",
        },
        {
            label: "Received From",
            key: "receivedFrom",
        },
        {
            label: "Account",
            key: "account",
        },
        {
            label: "Mode",
            key: "mode",
            render: (value) => (
                <div className="flex items-center gap-2">
                    <span
                        className={`h-2 w-2 rounded-full ${value === "Cash"
                            ? "bg-green-500"
                            : value === "Bank"
                                ? "bg-blue-500"
                                : value === "Cheque"
                                    ? "bg-amber-500"
                                    : "bg-purple-500"
                            }`}
                    />
                    {value}
                </div>
            ),
        },
        {
            label: "Reference No",
            key: "referenceNo",
        },
        {
            label: "Amount",
            key: "amount",
            render: (value) => (
                <span className="font-semibold text-emerald-600">
                    ₹ {Number(value).toLocaleString()}
                </span>
            ),
        },
        {
            label: "Status",
            key: "status",
            render: (value) => (
                <Badge variant={value === "Received" ? "success" : "warning"}>
                    {value}
                </Badge>
            ),
        },
        {
            label: "Remarks",
            key: "remarks",
            render: (value) => (
                <span className="text-slate-500">{value}</span>
            ),
        },
    ];

    const actions = [
        ({ row }) => (
            <i
                title="View"
                className="ri-eye-line text-lg text-slate-600 hover:text-slate-800 cursor-pointer transition-colors"
                onClick={() => onEdit(row)}
            />
        ),

        ({ row }) => (
            <i
                title="Edit"
                className="ri-pencil-line text-lg text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
                onClick={() => onEdit(row)}
            />
        ),

        ({ row }) => (
            <i
                title="Delete"
                className="ri-delete-bin-6-line text-lg text-red-600 hover:text-red-800 cursor-pointer transition-colors"
                onClick={() => onDelete(row)}
            />
        ),
    ];

    return (
        <BasicTable
            columns={columns}
            data={data}
            actions={actions}
            loading={loading}
            page={pagination.page}
            pageSize={pagination.limit}
            total={pagination.total}
        />
    );
}

export default OverviewTable;