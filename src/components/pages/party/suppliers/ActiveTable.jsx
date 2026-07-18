"use client";
import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";
import {
  Pencil,
  Trash2,
} from "lucide-react";

const data = [
  {
    date: "16-07-2026",
    alias: "Cash",
    group: "Cash-in-Hand",
    type: "Primary",
    status: "Active",
  },
  {
    date: "16-07-2026",
    alias: "Bank A/C",
    group: "Bank Accounts",
    type: "Primary",
    status: "Active",
  },
  {
    date: "16-07-2026",
    alias: "Sales A/C",
    group: "Sales Accounts",
    type: "Ledger",
    status: "Active",
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
    label: "DATE",
    key: "date",
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
    label: "TYPE",
    key: "type",
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

export default function ActiveTable() {
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
