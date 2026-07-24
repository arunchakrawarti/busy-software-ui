"use client";
import BasicTable from "@/components/common/BasicTable";

// Naye columns ke mutabiq 4 Dummy Data Rows
const data = [
  {
    id: 1,
    date: "01-04-2024",
    type: "Sales Invoice",
    voucherNo: "INV-2024-001",
    itemName: "Laptop Dell XPS 15",
    itemIgst: "18,000.00",
    itemCgst: "0.00",
    itemSgst: "0.00",
  },
  {
    id: 2,
    date: "05-04-2024",
    type: "Sales Invoice",
    voucherNo: "INV-2024-002",
    itemName: "Wireless Mouse & Keyboard",
    itemIgst: "0.00",
    itemCgst: "225.00",
    itemSgst: "225.00",
  },
  {
    id: 3,
    date: "12-04-2024",
    type: "Purchase Voucher",
    voucherNo: "PUR-2024-089",
    itemName: "Office Chair Ergonomic",
    itemIgst: "0.00",
    itemCgst: "1,080.00",
    itemSgst: "1,080.00",
  },
  {
    id: 4,
    date: "18-04-2024",
    type: "Credit Note",
    voucherNo: "CN-2024-012",
    itemName: "4K LED Monitor 27-inch",
    itemIgst: "4,500.00",
    itemCgst: "0.00",
    itemSgst: "0.00",
  },
];

// Columns mapping with unique keys
const columns = [
  {
    label: "#",
    key: "id",
  },
  {
    label: "DATE",
    key: "date",
  },
  {
    label: "TYPE",
    key: "type",
  },
  {
    label: "VOUCHER NO",
    key: "voucherNo",
  },
  {
    label: "ITEM NAME",
    key: "itemName",
  },
  {
    label: "ITEM IGST",
    key: "itemIgst",
  },
  {
    label: "ITEM CGST",
    key: "itemCgst",
  },
  {
    label: "ITEM SGST",
    key: "itemSgst",
  },
];

export default function InvalidTaxTable() {
  return (
    <div className="w-full mt-5 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm font-sans">
      <BasicTable
        columns={columns}
        data={data}
        wrapperClassName="rounded-none border-0 overflow-x-auto min-h-[300px]"
        theadClassName="uppercase text-[12px] font-bold text-[#5C667A] bg-slate-50 border-b border-slate-200"
      />

      <div className="w-full border-t border-slate-200 p-4 sm:px-6 sm:py-4 bg-white flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
          <span className="text-slate-500 font-medium">
            Showing {data.length} of {data.length} rows
          </span>
          <button
            type="button"
            className="text-blue-600 font-semibold hover:underline"
          >
            F3: Search
          </button>
          <button
            type="button"
            className="text-blue-600 font-semibold hover:underline"
          >
            F5: Summary
          </button>
          <button
            type="button"
            className="text-blue-600 font-semibold hover:underline"
          >
            F7: Filter
          </button>
        </div>

        <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-blue-600 hover:text-blue-700 select-none w-fit pt-1">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
          />
          <span>Don&apos;t refresh report after data modification</span>
        </label>
      </div>
    </div>
  );
}