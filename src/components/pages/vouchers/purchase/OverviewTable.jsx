"use client";

import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";

const OverviewTable = ({
    data,
    onEdit,
    onDelete,
}) => {

    const columns = [

        {
            key: "voucherNo",
            label: "Voucher No",
        },

        {
            key: "vendor",
            label: "Vendor",
        },

        {
            key: "billNo",
            label: "Bill No",
        },

        {
            key: "amount",
            label: "Amount",
        },

        {
            key: "gst",
            label: "GST",
        },

        {
            key: "date",
            label: "Date",
        },

        {
            key: "status",
            label: "Status",
            render: (v) => (
                <Badge text={v} />
            ),
        },

    ];

    const actions = [

        ({ row }) => (

            <button
                title="Edit"
                onClick={() => onEdit(row)}
                className="text-blue-600 hover:text-blue-800 cursor-pointer"
            >
                <i className="ri-pencil-line text-lg" />
            </button>

        ),

        ({ row }) => (

            <button
                title="Delete"
                onClick={() => onDelete(row)}
                className="text-red-600 hover:text-red-800 cursor-pointer"
            >
                <i className="ri-delete-bin-6-line text-lg " />
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