"use client";

import React, { useState } from "react";
import { 
  Search, 
  BarChart2, 
  AlignLeft, 
  Calendar, 
  ChevronDown, 
  Menu, 
  Filter, 
  ChevronsUpDown 
} from "lucide-react";
import BasicTable from "@/components/common/BasicTable"; // Apne path ke according check karein

const tableData = [
  { srNo: 1, details: "CGST (RCM)", taxableAmt: "0.00", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "0.00" },
  { srNo: 2, details: "Opening Balance", taxableAmt: "", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "0.00" },
  { srNo: 3, details: "Input GST", taxableAmt: "0.00", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "0.00" },
  { srNo: 4, details: "ITC Adjustment (Reversal / Reclaim / Other Adj.)", taxableAmt: "", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "0.00", isDashedIgst: true },
  { srNo: 5, details: "RCM Input Adjusted (As Feeded)", taxableAmt: "", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "0.00" },
  { srNo: 6, details: "Output GST", taxableAmt: "2,70,921.00", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "0.00" },
  { srNo: 7, details: "Regular Tax Adjustment (As Feeded)", taxableAmt: "2,70,921.00", igst: "0.00", cgst: "0.00", sgst: "", totalTax: "", isBoxedTaxable: true },
  { srNo: 8, details: "GST Payable", taxableAmt: "", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "0.00" },
  { srNo: 9, details: "IGST", taxableAmt: "0.00", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "0.00" },
  { srNo: 10, details: "CGST", taxableAmt: "0.00", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "0.00" },
  { srNo: 11, details: "Total", taxableAmt: "0.00", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "" },
  { srNo: 12, details: "IGST (RCM)", taxableAmt: "0.00", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "0.00" },
  { srNo: 13, details: "SGST", taxableAmt: "0.00", igst: "0.00", cgst: "0.00", sgst: "0.00", totalTax: "0.00" },
];

export default function GSTSummary() {
  const [dontRefresh, setDontRefresh] = useState(false);

  const renderHeader = (label) => (
    <div className="flex items-center gap-1 cursor-pointer select-none">
      <span>{label}</span>
      <ChevronsUpDown className="w-3 h-3 text-slate-300" />
    </div>
  );

  const columns = [
    {
      key: "srNo",
      label: "#",
      render: (val) => <span className="text-slate-400">{val}</span>,
    },
    {
      key: "details",
      label: renderHeader("DETAILS"),
      render: (val) => <span className="font-medium text-slate-700">{val}</span>,
    },
    {
      key: "taxableAmt",
      label: <div className="text-right">{renderHeader("TAXABLE AMT.")}</div>,
      render: (val, row) => (
        <div className="text-right font-mono">
          {row.isBoxedTaxable ? (
            <span className="px-2 py-0.5 border border-slate-300 bg-white rounded shadow-2xs inline-block">
              {val}
            </span>
          ) : (
            val
          )}
        </div>
      ),
    },
    {
      key: "igst",
      label: <div className="text-right">{renderHeader("IGST")}</div>,
      render: (val, row) => (
        <div className="text-right font-mono">
          {row.isDashedIgst ? (
            <span className="px-3 py-1 border border-dashed border-slate-400 bg-slate-100 rounded inline-block">
              {val}
            </span>
          ) : (
            val
          )}
        </div>
      ),
    },
    {
      key: "cgst",
      label: <div className="text-right">{renderHeader("CGST")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    },
    {
      key: "sgst",
      label: <div className="text-right">{renderHeader("SGST")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    },
    {
      key: "totalTax",
      label: <div className="text-right">{renderHeader("TOTAL TAX")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    },
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-100/60 p-2 sm:p-4 font-sans text-slate-700 antialiased">
      <div className="w-full flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-slate-200 bg-white">
          <div className="text-xs sm:text-sm font-medium text-slate-800">
            From 01-04-2026 to 17-07-2026
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-500">
            <button type="button" className="p-1.5 hover:bg-slate-100 rounded-md transition-colors" aria-label="Search">
              <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
            <button type="button" className="p-1.5 hover:bg-slate-100 rounded-md transition-colors" aria-label="Analytics">
              <BarChart2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
            <button type="button" className="p-1.5 hover:bg-slate-100 rounded-md transition-colors" aria-label="Alignment">
              <AlignLeft className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>

            <div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-600 bg-white cursor-pointer hover:border-slate-300">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>01 Apr 2026 – 17 Jul 2026</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
            </div>

            <button type="button" className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors" aria-label="Menu">
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </button>

            <button type="button" className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors" aria-label="Filter">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </button>
          </div>
        </div>

        <BasicTable
          columns={columns}
          data={tableData}
          bordered={false}
          wrapperClassName="w-full rounded-none"
          theadClassName="uppercase tracking-wider font-semibold text-slate-400 bg-white border-b border-slate-200 text-[11px]"
        />

        <div className="w-full border-t border-slate-200 px-4 sm:px-6 py-3 bg-white flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2">
            <span className="text-slate-400">Showing 4 of 27 rows</span>
            <button type="button" className="text-blue-600 font-semibold hover:underline">
              F4=&gt;Post Adjustment/Payment Voucher
            </button>
            <button type="button" className="text-blue-600 font-semibold hover:underline">
              F3: Search
            </button>
            <button type="button" className="text-blue-600 font-semibold hover:underline">
              F5: Summary
            </button>
            <button type="button" className="text-blue-600 font-semibold hover:underline">
              F7: Filter
            </button>
          </div>

          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input 
              type="checkbox" 
              checked={dontRefresh}
              onChange={(e) => setDontRefresh(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer" 
            />
            <span className="text-blue-600 hover:text-blue-700 font-medium">
              Don't refresh report after data modification
            </span>
          </label>
        </div>

      </div>
    </div>
  );
}