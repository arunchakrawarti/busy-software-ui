"use client";
import Badge from "@/components/common/Badge";
import BasicTable from "@/components/common/BasicTable";
import { Mail, Printer, MoreVertical } from "lucide-react";

const data = [
  {
    date: "16-07-2026",
    invoiceNo: "1/2026-27",
    originalInvoiceNo: "SI-001",
    party: "Cash",
    amount: "2,60,680.00",
    pendingAmount: "0.00",
    dueDate: "16-07-2026",
    status: "On Acc",
  },
  {
    date: "16-07-2026",
    invoiceNo: "2/2026-27",
    originalInvoiceNo: "SI-002",
    party: "ABC Traders",
    amount: "10,241.00",
    pendingAmount: "2,500.00",
    dueDate: "20-07-2026",
    status: "Pending",
  },
  {
    date: "17-07-2026",
    invoiceNo: "3/2026-27",
    originalInvoiceNo: "SI-003",
    party: "XYZ Enterprises",
    amount: "35,500.00",
    pendingAmount: "35,500.00",
    dueDate: "25-07-2026",
    status: "Hold",
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
    label: "INVOICE NO.",
    key: "invoiceNo",
    render: (value) => (
      <span className="font-semibold text-slate-800">{value}</span>
    ),
  },
  {
    label: "ORIGINAL INVOICE NO",
    key: "party",
  },

  {
    label: "CUSTOMER/PARTY NAME",
    key: "party",
  },

  {
    label: "AMOUNT",
    key: "amount",
    render: (value) => (
      <span className="font-bold text-slate-900">{value}</span>
    ),
  },

  {
  label: "STATUS",
  key: "status",
  render: (value) => (
    <Badge
      text={value}
    />
  ),
},
];

const actions = [
  () => (
    <button>
      <Mail size={18} className="text-slate-500" />
    </button>
  ),

  () => (
    <button>
      <Printer size={18} className="text-slate-500" />
    </button>
  ),

  () => (
    <button>
      <MoreVertical size={18} className="text-slate-500" />
    </button>
  ),
];

export default function AllnoteTable() {
  return (
    <div>
      <BasicTable
        columns={columns}
        data={data}
        actions={actions}
        wrapperClassName="rounded-none border-0"
        theadClassName="uppercase text-[12px] font-bold text-[#5C667A]"
      />

      <div className="flex justify-end gap-16 border-t px-6 py-5 font-semibold text-lg">
        <div>
          <span className="text-gray-500 mr-2">Total Amount:</span>
          ₹2,70,921.00
        </div>

        <div>
          <span className="text-gray-500 mr-2">Total Pending Amount:</span>
          ₹0.00
        </div>
      </div>
    </div>
  );
}
