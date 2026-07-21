"use client";
import BasicTable from "@/components/common/BasicTable";

const data = [
  {
    id: 1,
    sectionName: "4A - B2B Regular",
    noOfRecords: 12,
    totalInvoiceAmt: "2,50,000.00",
    totalTaxableAmt: "2,10,000.00",
    totalTaxLiability: "37,800.00",
    totalCgstAmt: "18,900.00",
    totalSgstAmt: "18,900.00",
    totalIgstAmt: "0.00",
    totalCess: "0.00",
  },
  {
    id: 2,
    sectionName: "4B - B2B Reverse Charge",
    noOfRecords: 5,
    totalInvoiceAmt: "1,20,000.00",
    totalTaxableAmt: "1,00,000.00",
    totalTaxLiability: "18,000.00",
    totalCgstAmt: "9,000.00",
    totalSgstAmt: "9,000.00",
    totalIgstAmt: "0.00",
    totalCess: "0.00",
  },
  {
    id: 3,
    sectionName: "4C - B2C Large",
    noOfRecords: 8,
    totalInvoiceAmt: "3,75,000.00",
    totalTaxableAmt: "3,25,000.00",
    totalTaxLiability: "58,500.00",
    totalCgstAmt: "0.00",
    totalSgstAmt: "0.00",
    totalIgstAmt: "58,500.00",
    totalCess: "0.00",
  }
];

const columns = [
  {
    label: "#",
    key: "id",
  },
  {
    label: "SECTION NAME",
    key: "sectionname",
  },
  {
    label: "NO. OF RECORDS",
    key: "noOfRecords",
  },
  {
    label: "TOTAL INVOICE AMT.",
    key: "totalInvoiceAmt",
  },
  {
    label: "TOTAL TAXABLE AMT.",
    key: "totalTaxableAmt",
  },
  {
    label: "TOTAL TAX LIABILITY",
    key: "totalTaxLiability",
  },
  {
    label: "TOTAL CGST AMT.",
    key: "totalCgstAmt",
  },
  {
    label: "TOTAL SGST AMT.",
    key: "totalSgstAmt",
  },
  {
    label: "TOTAL IGST AMT.",
    key: "totalIgstAmt",
  },
  {
    label: "TOTAL CESS",
    key: "totalCess",
  },
];

export default function ReturnTable() {
  return (
    <div className="w-full mt-5 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <BasicTable
        columns={columns}
        data={data}
        wrapperClassName="rounded-none border-0 overflow-x-auto min-h-[300px]"
        theadClassName="uppercase text-[12px] font-bold text-[#5C667A] bg-slate-50 border-b border-slate-200"
      />

      <div className="w-full border-t border-slate-200 p-4 sm:px-6 sm:py-4 bg-white flex flex-col gap-3">
        <p className="text-xs sm:text-sm text-blue-600 font-medium">
          4A - B2B Regular : Taxable outward supplies made to registered persons (other than reverse charge supplies).
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
          <span className="text-slate-500 font-medium">
            Showing 1 of 8 rows
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
          <span>Don't refresh report after data modification</span>
        </label>
      </div>
    </div>
  );
}