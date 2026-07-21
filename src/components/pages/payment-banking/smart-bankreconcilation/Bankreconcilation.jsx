"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Switch from "@/components/common/Switch";
import React from "react";

export default function BankStatementImport() {
  const columns = [
    { label: "#", key: "id" },
    { label: "ACCOUNT", key: "account" },
  ];

  const tableData = [
    { id: 1, account: "" },
    { id: 2, account: "" },
    { id: 3, account: "" },
    { id: 4, account: "" },
    { id: 5, account: "" },
  ];

  const labelClass =
    "text-xs font-bold uppercase tracking-wider text-slate-500 sm:w-32 shrink-0";

  return (
    <div className="w-full max-w-7xl mx-auto p-3 sm:p-6 bg-[#f8f9fa] text-slate-700 font-sans antialiased">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 mb-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className={labelClass}>BANK FORMAT</span>
            <div className="flex-1 flex gap-2">
              <div className="flex-1">
                <Input
                  type="select"
                  defaultValue="AXIS Bank"
                  options={[{ label: "AXIS Bank", value: "AXIS Bank" }]}
                />
              </div>
              <Button
                variant="outline"
                className="px-4 py-2 border-slate-300 rounded-lg text-slate-600 font-medium shrink-0"
              >
                Config
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className={labelClass}>RECEIPT SERIES</span>
            <div className="flex-1">
              <Input
                type="select"
                defaultValue="Main"
                options={[{ label: "Main", value: "Main" }]}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className={labelClass}>DEFAULT ACCOUNT</span>
            <div className="flex items-center gap-2">
              <Switch defaultChecked dynamicBg="bg-emerald-500" />
              <span className="text-xs text-slate-400">
                (For Bank A/c list)
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className={labelClass}>MANUAL ENTRY</span>
            <div>
              <Switch defaultChecked dynamicBg="bg-emerald-500" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className={labelClass}>IMPORT FROM</span>
            <div className="flex-1">
              <Input
                type="select"
                defaultValue="Excel"
                options={[{ label: "Excel", value: "Excel" }]}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className={labelClass}>SHEET NO</span>
            <div className="flex-1">
              <Input type="number" defaultValue={1} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className={labelClass}>BANK</span>
            <div className="flex-1">
              <Input
                type="select"
                defaultValue=""
                options={[{ label: "Select Bank", value: "" }]}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className={labelClass}>PYMT SERIES</span>
            <div className="flex-1">
              <Input
                type="select"
                defaultValue="Main"
                options={[{ label: "Main", value: "Main" }]}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className={labelClass}>ACC NAME</span>
            <div className="flex-1">
              <Input
                type="select"
                defaultValue=""
                options={[{ label: "Select Account", value: "" }]}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className={labelClass}>BILL REF-FIFO</span>
            <div className="flex items-center gap-2">
              <Switch defaultChecked dynamicBg="bg-emerald-500" />
              <div className="flex gap-1 ml-2">
                <button
                  type="button"
                  className="p-1.5 border border-slate-200 rounded-md bg-white hover:bg-slate-50 text-slate-500"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="p-1.5 border border-slate-200 rounded-md bg-white hover:bg-slate-50 text-slate-500"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className={labelClass}>START ROW</span>
            <div className="flex items-center flex-wrap gap-2 w-full sm:w-auto">
              <div className="w-20 sm:w-24">
                <Input type="number" defaultValue={1} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 sm:ml-2">
                END ROW
              </span>
              <div className="w-20 sm:w-24">
                <Input type="number" defaultValue={0} />
              </div>
              <span className="text-xs text-slate-400 w-full sm:w-auto">
                (Incl till end rows)
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <span className={labelClass}>PATH</span>
            <div className="flex-1 flex gap-2">
              <div className="flex-1">
                <Input type="text" placeholder="" />
              </div>
              <button
                type="button"
                className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 rounded text-slate-600 font-bold text-sm shrink-0"
              >
                ...
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <Button variant="outline">
          Load <span>➔</span>
        </Button>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        <BasicTable
          columns={columns}
          data={tableData}
          pagination={false}
          bordered={true}
          theadClassName="text-xs uppercase tracking-wider font-bold text-slate-700 bg-slate-50 border-b border-slate-200"
          wrapperClassName="overflow-x-auto w-full"
        />
      </div>
    </div>
  );
}
