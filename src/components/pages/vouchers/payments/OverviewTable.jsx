"use client";

import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";

const OverviewTable = ({
    data,
    loading,
    pagination,
    onEdit,
    onDelete,
}) => {

    const actions = [
        ({ row }) => (
            <i
                title="View"
                className="ri-eye-line text-lg text-slate-600 hover:text-slate-800 cursor-pointer"
                onClick={() => onEdit(row)}
            />
        ),

        ({ row }) => (
            <i
                title="Edit"
                className="ri-pencil-line text-lg text-blue-600 hover:text-blue-800 cursor-pointer"
                onClick={() => onEdit(row)}
            />
        ),

        ({ row }) => (
            <i
                title="Delete"
                className="ri-delete-bin-6-line text-lg text-red-600 hover:text-red-800 cursor-pointer"
                onClick={() => onDelete(row)}
            />
        ),
    ];
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
            label: "Account",
            key: "account",
        },
        {
            label: "Payment Mode",
            key: "mode",
        },
        {
            label: "Bank",
            key: "bank",
            render: (value) => (
                <span className="text-slate-600">
                    {value || "-"}
                </span>
            ),
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
                <Badge
                    variant={
                        value === "Completed"
                            ? "success"
                            : "warning"
                    }
                >
                    {value}
                </Badge>
            ),
        },
        {
            label: "Remarks",
            key: "remarks",
        },
    ];

    return (
        <BasicTable
            columns={columns}
            data={data}
            actions={actions}
            loading={loading}
            pageSize={pagination.limit}
            total={pagination.total}
            pagination
        />
    );
}

export default OverviewTable;