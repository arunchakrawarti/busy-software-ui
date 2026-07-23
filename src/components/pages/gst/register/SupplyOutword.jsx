"use client";

import React, { useState } from "react";
import { 
  Search, 
  BarChart2, 
  AlignLeft, 
  Calendar, 
  ChevronDown, 
  Menu, 
  Filter 
} from "lucide-react";
import BasicTable from "@/components/common/BasicTable";

const tableData = [
  {
    srNo: 1,
    "Error description": "Invalid GSTIN",
    "gstr1-section": "B2B",
    "gstr3b-section": "3.1(a)",
    party: "ABC Traders, Delhi",
    "gstn/uin": "07ABCDE1234F1Z5",
    "place of supply": "Delhi",
    "doc no": "BILL-001",
    "doc date": "01-04-2026",
    "invoice value": "50,000.00",
    "taxble value": "42,372.88",
    "tax rate": "18%",
    igst: "0.00",
    cgst: "3,813.56",
    sgst: "3,813.56",
    cess: "0.00",
  },
  {
    srNo: 2,
    "Error description": "",
    "gstr1-section": "B2B",
    "gstr3b-section": "3.1(a)",
    party: "Sharma Enterprises, Noida",
    "gstn/uin": "09ABCDE5678F1Z2",
    "place of supply": "Uttar Pradesh",
    "doc no": "BILL-002",
    "doc date": "05-04-2026",
    "invoice value": "75,000.00",
    "taxble value": "63,559.32",
    "tax rate": "18%",
    igst: "11,440.68",
    cgst: "0.00",
    sgst: "0.00",
    cess: "0.00",
  },
  {
    srNo: 3,
    "Error description": "Missing document date",
    "gstr1-section": "B2B",
    "gstr3b-section": "3.1(a)",
    party: "Raj Suppliers, Ghaziabad",
    "gstn/uin": "09FGHIJ1234K1Z6",
    "place of supply": "Uttar Pradesh",
    "doc no": "BILL-003",
    "doc date": "10-04-2026",
    "invoice value": "1,20,000.00",
    "taxble value": "1,01,694.92",
    "tax rate": "18%",
    igst: "0.00",
    cgst: "9,152.54",
    sgst: "9,152.54",
    cess: "2,000.00",
  },
  {
    srNo: 4,
    "Error description": "",
    "gstr1-section": "B2C",
    "gstr3b-section": "3.1(a)",
    party: "Delhi Wholesale Mart, Delhi",
    "gstn/uin": "07KLMNO5678P1Z3",
    "place of supply": "Delhi",
    "doc no": "BILL-004",
    "doc date": "15-04-2026",
    "invoice value": "2,70,921.00",
    "taxble value": "2,28,746.61",
    "tax rate": "18%",
    igst: "0.00",
    cgst: "20,587.19",
    sgst: "20,587.19",
    cess: "1,500.00",
  },
  {
    srNo: 5,
    "Error description": "GSTIN mismatch",
    "gstr1-section": "B2B",
    "gstr3b-section": "3.1(a)",
    party: "Global Electronics, Noida",
    "gstn/uin": "09PQRST1234U1Z8",
    "place of supply": "Uttar Pradesh",
    "doc no": "BILL-005",
    "doc date": "20-04-2026",
    "invoice value": "95,500.00",
    "taxble value": "80,932.20",
    "tax rate": "18%",
    igst: "14,566.80",
    cgst: "0.00",
    sgst: "0.00",
    cess: "0.00",
  },
  {
    srNo: 6,
    "Error description": "",
    "gstr1-section": "B2B",
    "gstr3b-section": "3.1(a)",
    party: "Krishna Enterprises, Delhi",
    "gstn/uin": "07VWXYZ5678A1Z4",
    "place of supply": "Delhi",
    "doc no": "BILL-006",
    "doc date": "25-04-2026",
    "invoice value": "45,000.00",
    "taxble value": "38,135.59",
    "tax rate": "18%",
    igst: "0.00",
    cgst: "3,432.20",
    sgst: "3,432.20",
    cess: "500.00",
  },
  {
    srNo: 7,
    "Error description": "Invalid place of supply",
    "gstr1-section": "B2C",
    "gstr3b-section": "3.1(a)",
    party: "Agarwal Traders, Faridabad",
    "gstn/uin": "06ABCDE9876F1Z1",
    "place of supply": "Haryana",
    "doc no": "BILL-007",
    "doc date": "02-05-2026",
    "invoice value": "68,750.00",
    "taxble value": "58,262.71",
    "tax rate": "18%",
    igst: "0.00",
    cgst: "5,243.64",
    sgst: "5,243.64",
    cess: "750.00",
  },
  {
    srNo: 8,
    "Error description": "",
    "gstr1-section": "B2B",
    "gstr3b-section": "3.1(a)",
    party: "Modern Sales, Gurugram",
    "gstn/uin": "06FGHIJ5432K1Z7",
    "place of supply": "Haryana",
    "doc no": "BILL-008",
    "doc date": "08-05-2026",
    "invoice value": "1,50,000.00",
    "taxble value": "1,27,118.64",
    "tax rate": "18%",
    igst: "22,881.36",
    cgst: "0.00",
    sgst: "0.00",
    cess: "0.00",
  },
  {
    srNo: 9,
    "Error description": "Tax rate mismatch",
    "gstr1-section": "B2B",
    "gstr3b-section": "3.1(a)",
    party: "Shree Balaji Traders, Delhi",
    "gstn/uin": "07KLMNO4321P1Z9",
    "place of supply": "Delhi",
    "doc no": "BILL-009",
    "doc date": "15-05-2026",
    "invoice value": "82,300.00",
    "taxble value": "69,745.76",
    "tax rate": "18%",
    igst: "0.00",
    cgst: "6,277.12",
    sgst: "6,277.12",
    cess: "1,000.00",
  },
  {
    srNo: 10,
    "Error description": "",
    "gstr1-section": "B2B",
    "gstr3b-section": "3.1(a)",
    party: "National Suppliers, Noida",
    "gstn/uin": "09PQRST9876U1Z5",
    "place of supply": "Uttar Pradesh",
    "doc no": "BILL-010",
    "doc date": "25-05-2026",
    "invoice value": "1,10,000.00",
    "taxble value": "93,220.34",
    "tax rate": "18%",
    igst: "16,779.66",
    cgst: "0.00",
    sgst: "0.00",
    cess: "0.00",
  },
  {
    srNo: 11,
    "Error description": "Missing GSTIN",
    "gstr1-section": "B2C",
    "gstr3b-section": "3.1(a)",
    party: "Bright Solutions, Delhi",
    "gstn/uin": "07VWXYZ1234A1Z6",
    "place of supply": "Delhi",
    "doc no": "BILL-011",
    "doc date": "05-06-2026",
    "invoice value": "62,500.00",
    "taxble value": "52,966.10",
    "tax rate": "18%",
    igst: "0.00",
    cgst: "4,766.95",
    sgst: "4,766.95",
    cess: "1,250.00",
  },
  {
    srNo: 12,
    "Error description": "",
    "gstr1-section": "B2B",
    "gstr3b-section": "3.1(a)",
    party: "Sunrise Enterprises, Ghaziabad",
    "gstn/uin": "09ABCDE2468F1Z3",
    "place of supply": "Uttar Pradesh",
    "doc no": "BILL-012",
    "doc date": "20-06-2026",
    "invoice value": "90,000.00",
    "taxble value": "76,271.19",
    "tax rate": "18%",
    igst: "0.00",
    cgst: "6,864.41",
    sgst: "6,864.41",
    cess: "900.00",
  },
  {
    srNo: 13,
    "Error description": "Invalid invoice value",
    "gstr1-section": "B2C",
    "gstr3b-section": "3.1(a)",
    party: "Shivam Traders, Delhi",
    "gstn/uin": "07FGHIJ1357K1Z8",
    "place of supply": "Delhi",
    "doc no": "BILL-013",
    "doc date": "17-07-2026",
    "invoice value": "2,00,000.00",
    "taxble value": "1,69,491.53",
    "tax rate": "18%",
    igst: "0.00",
    cgst: "15,254.24",
    sgst: "15,254.24",
    cess: "2,500.00",
  },
];

const columns = [
  { key: "srNo", label: "#", value: "#" },
  { key: "Error description", label: "ERROR DESC", value: "ERROR DESC" },
  { key: "gstr1-section", label: "GSTR-1 SEC", value: "GSTR-1 SEC" },
  { key: "gstr3b-section", label: "GSTR-3B SEC", value: "GSTR-3B SEC" },
  { key: "party", label: "PARTY NAME", value: "PARTY NAME" },
  { key: "gstn/uin", label: "GSTIN / UIN", value: "GSTIN / UIN" },
  { key: "place of supply", label: "PLACE OF SUPPLY", value: "PLACE OF SUPPLY" },
  { key: "doc no", label: "DOC NO.", value: "DOC NO." },
  { key: "doc date", label: "DOC DATE", value: "DOC DATE" },
  { key: "invoice value", label: "INVOICE VALUE", value: "INVOICE VALUE" },
  { key: "taxble value", label: "TAXABLE VALUE", value: "TAXABLE VALUE" },
  { key: "tax rate", label: "TAX RATE", value: "TAX RATE" },
  { key: "igst", label: "IGST", value: "IGST" },
  { key: "cgst", label: "CGST", value: "CGST" },
  { key: "sgst", label: "SGST", value: "SGST" },
  { key: "cess", label: "CESS", value: "CESS" },
];

export default function SupplyOutword() {
  const [dontRefresh, setDontRefresh] = useState(false);

  return (
    <div className="w-full flex flex-col min-h-screen bg-slate-100/60 font-sans text-slate-700 antialiased">
      <div className="w-full flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-slate-200 bg-white">
          <div className="text-xs sm:text-sm font-medium text-slate-800">
            Form 01-04-2026 to 17-07-2026
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
          wrapperClassName="w-full rounded-none overflow-x-auto"
          theadClassName="uppercase tracking-wider font-semibold text-slate-400 bg-white border-b border-slate-200 text-[11px]"
        />

        <div className="w-full border-t border-slate-200 px-4 sm:px-6 py-3 bg-white flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2">
            <span className="text-slate-400">Showing {tableData.length} of 27 rows</span>
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