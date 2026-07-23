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
  {
    srNo: 1,
    name: "CGST (RCM)",
    sales: "0.00",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "0.00",
    "nett sales": "0.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
  },
  {
    srNo: 2,
    name: "Opening Balance",
    sales: "",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "0.00",
    "nett sales": "0.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
  },
  {
    srNo: 3,
    name: "Input GST",
    sales: "0.00",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "0.00",
    "nett sales": "0.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
  },
  {
    srNo: 4,
    name: "ITC Adjustment (Reversal / Reclaim / Other Adj.)",
    sales: "",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "0.00",
    "nett sales": "0.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
    isDashedIgst: true,
  },
  {
    srNo: 5,
    name: "RCM Input Adjusted (As Feeded)",
    sales: "",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "0.00",
    "nett sales": "0.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
  },
  {
    srNo: 6,
    name: "Output GST",
    sales: "2,70,921.00",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "0.00",
    "nett sales": "2,70,921.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
  },
  {
    srNo: 7,
    name: "Regular Tax Adjustment (As Feeded)",
    sales: "2,70,921.00",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "",
    "sale return": "",
    "nett sales": "2,70,921.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "",
    isBoxedTaxable: true,
  },
  {
    srNo: 8,
    name: "GST Payable",
    sales: "",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "0.00",
    "nett sales": "0.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
  },
  {
    srNo: 9,
    name: "IGST",
    sales: "0.00",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "0.00",
    "nett sales": "0.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
  },
  {
    srNo: 10,
    name: "CGST",
    sales: "0.00",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "0.00",
    "nett sales": "0.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
  },
  {
    srNo: 11,
    name: "Total",
    sales: "0.00",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "",
    "nett sales": "0.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
  },
  {
    srNo: 12,
    name: "IGST (RCM)",
    sales: "0.00",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "0.00",
    "nett sales": "0.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
  },
  {
    srNo: 13,
    name: "SGST",
    sales: "0.00",
    "igst amt": "0.00",
    "cgst amt": "0.00",
    "sgst amt": "0.00",
    "sale return": "0.00",
    "nett sales": "0.00",
    "nett igst amt": "0.00",
    "nett cgst amt": "0.00",
    "nett sgst amt": "0.00",
  },
];

export default function SaleSummary() {
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
      key: "name",
      label: renderHeader("DETAILS"),
      render: (val) => <span className="font-medium text-slate-700">{val}</span>,
    },
    {
      key: "sales",
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
      key: "igst amt",
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
      key: "cgst amt",
      label: <div className="text-right">{renderHeader("CGST")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    },
    {
      key: "sgst amt",
      label: <div className="text-right">{renderHeader("SGST")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    },
    {
      key: "sale return",
      label: <div className="text-right">{renderHeader("TOTAL TAX")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    },
    {
      key: "igst amt",
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
      key: "cgst amt",
      label: <div className="text-right">{renderHeader("CGST")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    },
    {
      key: "sgst amt",
      label: <div className="text-right">{renderHeader("SGST")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    },
    {
      key: "nett sales",
      label: <div className="text-right">{renderHeader("SGST")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    },
     {
      key: "nett igst amt",
      label: <div className="text-right">{renderHeader("SGST")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    },
     {
      key: "nett cgst amt",
      label: <div className="text-right">{renderHeader("SGST")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    },
     {
      key: "nett sgst amt",
      label: <div className="text-right">{renderHeader("SGST")}</div>,
      render: (val) => <div className="text-right font-mono">{val}</div>,
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-100/60  font-sans text-slate-700 antialiased">
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