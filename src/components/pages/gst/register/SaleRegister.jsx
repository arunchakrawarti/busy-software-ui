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
    "bill no": "BILL-001",
    date: "01-04-2026",
    "name & address of dealer": "ABC Traders, Delhi",
    gstin: "07ABCDE1234F1Z5",
    "sale type": "Regular",
    "bill amount": "50,000.00",
    "igst txbl amt@ 40%": "0.00",
    "igst tax amt@ 40%": "0.00",
    "other amount": "0.00",
  },
  {
    srNo: 2,
    "bill no": "BILL-002",
    date: "05-04-2026",
    "name & address of dealer": "Sharma Enterprises, Noida",
    gstin: "09ABCDE5678F1Z2",
    "sale type": "Inter-State",
    "bill amount": "75,000.00",
    "igst txbl amt@ 40%": "75,000.00",
    "igst tax amt@ 40%": "13,500.00",
    "other amount": "0.00",
  },
  {
    srNo: 3,
    "bill no": "BILL-003",
    date: "10-04-2026",
    "name & address of dealer": "Raj Suppliers, Ghaziabad",
    gstin: "09FGHIJ1234K1Z6",
    "sale type": "Regular",
    "bill amount": "1,20,000.00",
    "igst txbl amt@ 40%": "0.00",
    "igst tax amt@ 40%": "0.00",
    "other amount": "2,000.00",
  },
  {
    srNo: 4,
    "bill no": "BILL-004",
    date: "15-04-2026",
    "name & address of dealer": "Delhi Wholesale Mart, Delhi",
    gstin: "07KLMNO5678P1Z3",
    "sale type": "Intra-State",
    "bill amount": "2,70,921.00",
    "igst txbl amt@ 40%": "0.00",
    "igst tax amt@ 40%": "0.00",
    "other amount": "1,500.00",
  },
  {
    srNo: 5,
    "bill no": "BILL-005",
    date: "20-04-2026",
    "name & address of dealer": "Global Electronics, Noida",
    gstin: "09PQRST1234U1Z8",
    "sale type": "Inter-State",
    "bill amount": "95,500.00",
    "igst txbl amt@ 40%": "95,500.00",
    "igst tax amt@ 40%": "17,190.00",
    "other amount": "0.00",
  },
  {
    srNo: 6,
    "bill no": "BILL-006",
    date: "25-04-2026",
    "name & address of dealer": "Krishna Enterprises, Delhi",
    gstin: "07VWXYZ5678A1Z4",
    "sale type": "Regular",
    "bill amount": "45,000.00",
    "igst txbl amt@ 40%": "0.00",
    "igst tax amt@ 40%": "0.00",
    "other amount": "500.00",
  },
  {
    srNo: 7,
    "bill no": "BILL-007",
    date: "02-05-2026",
    "name & address of dealer": "Agarwal Traders, Faridabad",
    gstin: "06ABCDE9876F1Z1",
    "sale type": "Intra-State",
    "bill amount": "68,750.00",
    "igst txbl amt@ 40%": "0.00",
    "igst tax amt@ 40%": "0.00",
    "other amount": "750.00",
  },
  {
    srNo: 8,
    "bill no": "BILL-008",
    date: "08-05-2026",
    "name & address of dealer": "Modern Sales, Gurugram",
    gstin: "06FGHIJ5432K1Z7",
    "sale type": "Inter-State",
    "bill amount": "1,50,000.00",
    "igst txbl amt@ 40%": "1,50,000.00",
    "igst tax amt@ 40%": "27,000.00",
    "other amount": "0.00",
  },
  {
    srNo: 9,
    "bill no": "BILL-009",
    date: "15-05-2026",
    "name & address of dealer": "Shree Balaji Traders, Delhi",
    gstin: "07KLMNO4321P1Z9",
    "sale type": "Regular",
    "bill amount": "82,300.00",
    "igst txbl amt@ 40%": "0.00",
    "igst tax amt@ 40%": "0.00",
    "other amount": "1,000.00",
  },
  {
    srNo: 10,
    "bill no": "BILL-010",
    date: "25-05-2026",
    "name & address of dealer": "National Suppliers, Noida",
    gstin: "09PQRST9876U1Z5",
    "sale type": "Inter-State",
    "bill amount": "1,10,000.00",
    "igst txbl amt@ 40%": "1,10,000.00",
    "igst tax amt@ 40%": "19,800.00",
    "other amount": "0.00",
  },
  {
    srNo: 11,
    "bill no": "BILL-011",
    date: "05-06-2026",
    "name & address of dealer": "Bright Solutions, Delhi",
    gstin: "07VWXYZ1234A1Z6",
    "sale type": "Intra-State",
    "bill amount": "62,500.00",
    "igst txbl amt@ 40%": "0.00",
    "igst tax amt@ 40%": "0.00",
    "other amount": "1,250.00",
  },
  {
    srNo: 12,
    "bill no": "BILL-012",
    date: "20-06-2026",
    "name & address of dealer": "Sunrise Enterprises, Ghaziabad",
    gstin: "09ABCDE2468F1Z3",
    "sale type": "Regular",
    "bill amount": "90,000.00",
    "igst txbl amt@ 40%": "0.00",
    "igst tax amt@ 40%": "0.00",
    "other amount": "900.00",
  },
  {
    srNo: 13,
    "bill no": "BILL-013",
    date: "17-07-2026",
    "name & address of dealer": "Shivam Traders, Delhi",
    gstin: "07FGHIJ1357K1Z8",
    "sale type": "Intra-State",
    "bill amount": "2,00,000.00",
    "igst txbl amt@ 40%": "0.00",
    "igst tax amt@ 40%": "0.00",
    "other amount": "2,500.00",
  },
];

export default function SaleRegister() {
  const [dontRefresh, setDontRefresh] = useState(false);


 const columns = [
  {
    key: "srNo",
    value: "#",
  },
  {
    key: "bill no",
    value: "BILL NO.",
  },
  {
    key: "date",
    value: "DATE",
  },
  {
    key: "name & address of dealer",
    value: "NAME & ADDRESS OF DEALER",
  },
  {
    key: "gstin",
    value: "GSTIN",
  },
  {
    key: "sale type",
    value: "SALE TYPE",
  },
  {
    key: "bill amount",
    value: "BILL AMOUNT",
  },
  {
    key: "igst txbl amt@ 40%",
    value: "IGST TXBL AMT@ 40%",
  },
  {
    key: "igst tax amt@ 40%",
    value: "IGST TAX AMT@ 40%",
  },
  {
    key: "other amount",
    value: "OTHER AMOUNT",
  },
];

  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-100/60  font-sans text-slate-700 antialiased">
      <div className="w-full flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-slate-200 bg-white">
          <div className="text-xs sm:text-sm font-medium text-slate-800">
            All Account
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