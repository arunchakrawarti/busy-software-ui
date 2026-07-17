"use client";

import { useRouter } from "next/navigation";

import BasicTable from "@/components/common/BasicTable";
import Badge from "@/components/common/Badge";

const StockTable = ({
    data,
    onEdit,
    onDelete,
}) => {

    const router = useRouter();

  const columns = [
    {
        key: "itemCode",
        label: "Item Code",
    },
    {
        key: "itemName",
        label: "Item Name",
    },
    {
        key: "warehouse",
        label: "Warehouse",
    },
    {
        key: "unit",
        label: "Unit",
    },
    {
        key: "openingStock",
        label: "Opening",
    },
    {
        key: "inward",
        label: "Inward",
    },
    {
        key: "outward",
        label: "Outward",
    },
    {
        key: "closingStock",
        label: "Closing",
    },
    {
        key: "status",
        label: "Status",
        render: (value) => <Badge text={value} />,
    },
];

    const actions = [

        ({ row }) => (

            <button
                title="View"
                onClick={() => router.push(`/inventory/stock/${row.id}`)}
                className="cursor-pointer text-slate-600 hover:text-slate-800"
            >
                <i className="ri-eye-line text-lg" />
            </button>

        ),

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

export default StockTable;