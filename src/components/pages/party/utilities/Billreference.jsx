"use client";

import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Switch from "@/components/common/Switch";
import React from "react";

export default function Billreference() {
  const columns = [
    { label: "PICKED FIELD", key: "pickedField" },
    { label: "COL.", key: "col" },
  ];

  const tableData = []; 

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-white text-slate-700 font-sans antialiased min-h-screen flex flex-col justify-between">
      
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 sm:w-32">
            IMPORT FROM
          </span>
          <div className="w-full sm:w-48 bg-white rounded-lg">
            <Input
              type="select"
              defaultValue="Excel"
              options={[{ label: "Excel", value: "Excel" }]}
            />
          </div>
        </div>

        <div className="border border-slate-200 rounded-xl p-4 sm:p-6 mb-8 bg-[#fdfdfd] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="FIELD NAME"
                type="select"
                defaultValue="Select field"
                labelClass="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2"
                options={[{ label: "Select field", value: "Select field" }]}
              />
              <Input
                label="EXCEL COL."
                type="select"
                defaultValue="Select"
                labelClass="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2"
                options={[{ label: "Select", value: "Select" }]}
              />
            </div>

            <div className="lg:col-span-1 flex flex-row lg:flex-col justify-center gap-3 my-2 lg:my-0">
              <button type="button" className="flex items-center justify-center border border-blue-200 text-blue-500 h-9 w-9 bg-white rounded hover:bg-slate-50 active:scale-95 transition-all text-xs font-semibold rotate-90 lg:rotate-0">⇒</button>
              <button type="button" className="flex items-center justify-center border border-blue-200 text-blue-500 h-9 w-9 bg-white rounded hover:bg-slate-50 active:scale-95 transition-all text-xs font-semibold rotate-90 lg:rotate-0">⇐</button>
            </div>

            <div className="lg:col-span-6 overflow-hidden w-full bg-white border border-slate-200 rounded-lg">
              <BasicTable 
                columns={columns} 
                data={tableData} 
                pagination={false}
                bordered={true}
                theadClassName="text-xs uppercase tracking-wider font-bold text-slate-700 bg-slate-50"
                wrapperClassName="overflow-x-auto w-full max-h-[140px]"
              />
            </div>

          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            SPECIFY DEFAULT VALUES FOR ADDITION OF NEW MASTERS
          </h3>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 sm:w-32">
              PARENT GROUP
            </span>
            <div className="w-full sm:w-48 bg-white rounded-lg">
              <Input
                type="select"
                defaultValue="Select"
                options={[{ label: "Select", value: "Select" }]}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-end mb-6 pt-4 border-t border-slate-100">
          
          <div className="xl:col-span-6 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 sm:w-32 flex-shrink-0">
                EXCEL FILE PATH
              </span>
              <div className="relative w-full flex items-center bg-white rounded-lg border border-slate-200 shadow-sm pr-3">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Select path"
                    className="border-0 focus:ring-0 shadow-none w-full"
                  />
                </div>
                <span className="text-slate-600 cursor-pointer text-lg">📄</span>
              </div>
            </div>
          </div>

          <div className="xl:col-span-6 grid grid-cols-3 gap-4 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-2 sm:gap-4 w-full">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 text-right sm:w-24 leading-tight">
                EXCEL SHEET NO.
              </label>
              <div className="w-full sm:w-16 bg-white">
                <Input type="number" defaultValue={1} className="text-center" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-2 sm:gap-4 w-full">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 text-right sm:w-20 leading-tight">
                START ROW
              </label>
              <div className="w-full sm:w-16 bg-white">
                <Input type="number" defaultValue={1} className="text-center" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-2 sm:gap-4 w-full">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 text-right sm:w-20 leading-tight">
                END ROW
              </label>
              <div className="w-full sm:w-16 bg-white">
                <Input type="number" defaultValue={0} className="text-center" />
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6 pt-4 border-t border-slate-100">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              UPDATE TOTALS OF BILL REFERENCE AMOUNT AS ACCOUNT OPENING BALANCE
            </span>
            <span className="text-xs font-normal tracking-wide italic text-slate-400">
              (To import Till the end of the file, Leave 'End Row' as 0)
            </span>
          </div>

          <div className="flex-shrink-0">
            <Switch 
              defaultChecked 
              dynamicBg="bg-emerald-500" 
            />
          </div>
        </div>

      </div>

      <div className="flex justify-end mt-12">
        <Button variant="secondary"
        >
          Import <span>➔</span>
        </Button>
      </div>

    </div>
  );
}