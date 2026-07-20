"use client";
import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";
import { Pencil, Trash2 } from "lucide-react";

const data = [
  {
    "item name": "Laptop",
    alias: "LP-001",
    group: "Electronics",
    "main type": "Nos",
    "sale price": "₹55,000",
    status: "Active",
  },
  {
    "item name": "Keyboard",
    alias: "KB-101",
    group: "Accessories",
    "main type": "Nos",
    "sale price": "₹1,200",
    status: "Active",
  },
  {
    "item name": "Mouse",
    alias: "MS-205",
    group: "Accessories",
    "main type": "Nos",
    "sale price": "₹850",
    status: "Inactive",
  },
  {
    "item name": "Monitor",
    alias: "MN-301",
    group: "Electronics",
    "main type": "Nos",
    "sale price": "₹12,500",
    status: "Active",
  },
  {
    "item name": "Printer",
    alias: "PR-450",
    group: "Office",
    "main type": "Nos",
    "sale price": "₹18,000",
    status: "Inactive",
  },
];

const columns = [
  {
    label: (
      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
    ),
    key: "select",
    render: () => (
      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
    ),
  },

  {
    label: "ITEM NAME",
    key: "item name",
  },

  {
    label: "ALIAS",
    key: "alias",
  },

  {
    label: "GROUP",
    key: "group",
  },

  {
    label: "MAIN UNIT",
    key: "main type",
  },
  {
    label: "SALE PRICE",
    key: "sale price",
  },
  {
    label: "STATUS",
    key: "status",
    render: (value) => <Badge text={value} />,
  },
];

const actions = [
  () => (
    <button>
      <Pencil size={18} className="text-blue-500" />
    </button>
  ),

  () => (
    <button>
      <Trash2 size={18} className="text-red-500" />
    </button>
  )
];

export default function InactiveTable() {
  return (
    <div>
      <BasicTable
        columns={columns}
        data={data}
        actions={actions}
        wrapperClassName="rounded-none border-0"
        theadClassName="uppercase text-[12px] font-bold text-[#5C667A]"
      />
    </div>
  );
}
