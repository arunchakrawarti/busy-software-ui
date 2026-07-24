"use client";
import BasicTable from "@/components/common/BasicTable";

// Columns ki exact keys ke hisab se audit expenditure data
const data = [
  {
    id: 1,
    sectionName: "Capital Goods Purchase",
    totalAmount: "5,50,000.00",
    exemptedGst: "50,000.00",
    expComposition: "0.00",
    expRegistered: "5,00,000.00",
    totalPaymentReg: "5,90,000.00",
    expUnregistered: "0.00",
  },
  {
    id: 2,
    sectionName: "Raw Material Expenses",
    totalAmount: "8,20,000.00",
    exemptedGst: "1,20,000.00",
    expComposition: "1,00,000.00",
    expRegistered: "5,50,000.00",
    totalPaymentReg: "6,49,000.00",
    expUnregistered: "50,000.00",
  },
  {
    id: 3,
    sectionName: "Legal & Professional Fees",
    totalAmount: "1,50,000.00",
    exemptedGst: "0.00",
    expComposition: "0.00",
    expRegistered: "1,20,000.00",
    totalPaymentReg: "1,41,600.00",
    expUnregistered: "30,000.00",
  },
  {
    id: 4,
    sectionName: "Freight & Cartage Charges",
    totalAmount: "95,000.00",
    exemptedGst: "15,000.00",
    expComposition: "20,000.00",
    expRegistered: "40,000.00",
    totalPaymentReg: "42,000.00",
    expUnregistered: "20,000.00",
  },
  {
    id: 5,
    sectionName: "Office Supplies & Maintenance",
    totalAmount: "65,000.00",
    exemptedGst: "10,000.00",
    expComposition: "15,000.00",
    expRegistered: "25,000.00",
    totalPaymentReg: "29,500.00",
    expUnregistered: "15,000.00",
  },
];

const columns = [
  {
    label: "#",
    key: "id",
  },
  {
    label: "PARTICULAR OF EXPENDITURE",
    key: "sectionName", // Key corrected to camelCase matching data
  },
  {
    label: "TOTAL AMOUNT",
    key: "totalAmount",
  },
  {
    label: "EXEMPTED FROM GST(REG. ENTITY)",
    key: "exemptedGst",
  },
  {
    label: "EXP. UNDER COMPOSITION SCHEME",
    key: "expComposition",
  },
  {
    label: "EXP. UNDER REGISTERED ENTITY",
    key: "expRegistered",
  },
  {
    label: "TOTAL PAYMENT OF REGISTERED ENTITY",
    key: "totalPaymentReg",
  },
  {
    label: "EXP. UNDER UN-REGISTERED ENTITY",
    key: "expUnregistered",
  },
];

export default function AuditTable() {
  return (
    <div className="w-full mt-5 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
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