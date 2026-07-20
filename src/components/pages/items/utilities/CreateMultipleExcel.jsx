"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Switch from "@/components/common/Switch";
import React from "react";

export default function CreateMultipleExcel() {
  const columns = [
    { label: "ITEM FIELDS", key: "itemFields" },
    { label: "EXCEL FIELD", key: "excelField" },
  ];

  const tableData = []; 

  const commonLabelClass = "text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block";

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-[#f8f9fa] text-slate-700 font-sans antialiased">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-bold uppercase tracking-wider text-slate-700">
          <Switch 
            label="Excel" 
            defaultChecked 
            dynamicBg="bg-emerald-500" 
          />
          <Switch 
            label="Google Sheet" 
            dynamicBg="bg-emerald-500" 
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-bold uppercase tracking-wider text-slate-700 md:justify-end">
          <Switch 
            label="Add New Masters" 
            defaultChecked 
            dynamicBg="bg-emerald-500" 
          />
          <Switch 
            label="Modify Existing Masters" 
            dynamicBg="bg-emerald-500" 
          />
        </div>
      </div>

      <div className="border border-slate-200 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8 bg-white shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-5">
          CONNECT FIELDS OF BUSY AND EXCEL / GOOGLE SHEET
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          {/* Inputs */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="ITEM FIELDS"
              type="select"
              defaultValue="Search"
              labelClass={commonLabelClass}
              options={[{ label: "Search", value: "Search" }]}
            />
            <Input
              label="EXCEL FIELD"
              type="select"
              defaultValue="Select"
              labelClass={commonLabelClass}
              options={[{ label: "Select", value: "Select" }]}
            />
          </div>

          {/* Action Arrow Buttons */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col justify-center gap-3 my-2 lg:my-0">
            <button type="button" className="flex items-center justify-center border border-blue-200 text-blue-500 h-9 w-9 bg-white rounded hover:bg-slate-50 active:scale-95 transition-all text-xs font-semibold rotate-90 lg:rotate-0">⇒</button>
            <button type="button" className="flex items-center justify-center border border-blue-200 text-blue-500 h-9 w-9 bg-white rounded hover:bg-slate-50 active:scale-95 transition-all text-xs font-semibold rotate-90 lg:rotate-0">⇦</button>
          </div>

          {/* Table Field */}
          <div className="lg:col-span-6 overflow-hidden w-full bg-white border border-slate-200 rounded-xl">
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

      <div className="mb-6 sm:mb-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-5">
          DEFAULT VALUES FOR NEW MASTERS
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          <Input
            label="PARENT GROUP"
            type="select"
            defaultValue="Select"
            labelClass={commonLabelClass}
            options={[{ label: "Select", value: "Select" }]}
          />

          <Input
            label="MAIN UNIT"
            type="select"
            defaultValue="Select"
            labelClass={commonLabelClass}
            options={[{ label: "Select", value: "Select" }]}
          />

          <div className="flex flex-col gap-2 pb-1">
            <span className={commonLabelClass}>DATE WISE HSN</span>
            <div className="h-10 flex items-center">
              <Switch dynamicBg="bg-emerald-500" />
            </div>
          </div>

          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-3 flex flex-col gap-1">
            <span>ALT UNIT</span>
            <span className="text-[10px] text-slate-300">CON TYPE</span>
          </div>

          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-3 flex flex-col gap-1">
            <span>PACKAGING UNIT</span>
          </div>

          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-3">
            DATE WISE PRICING
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8 pt-4 border-t border-slate-200">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-5">
          MODIFICATION OF MASTERS
        </h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">ON THE BASIS OF</span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-bold uppercase tracking-wider text-slate-700">
            <Switch 
              label="OVERWRITE EXISTING ACC CATEGORY" 
              dynamicBg="bg-emerald-500" 
            />
            <Switch 
              label="OVERWRITE EXISTING ITEM CATEGORY" 
              dynamicBg="bg-emerald-500" 
            />
          </div>
        </div>

        {/* Path Grid Panel */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-end bg-white p-4 sm:p-5 border border-slate-200 rounded-xl shadow-sm">
          <div className="xl:col-span-6 w-full">
            <div className="w-full flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 block">
                EXCEL FILE PATH :
              </span>
              <div className="relative w-full flex items-center bg-white rounded-lg border border-slate-200 pr-3">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Select path"
                    className="border-0 focus:ring-0 shadow-none w-full"
                  />
                </div>
                <span className="text-slate-600 cursor-pointer text-base">📄</span>
              </div>
            </div>
          </div>

          {/* Row Inputs Configuration */}
          <div className="xl:col-span-6 grid grid-cols-3 gap-4 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-2 sm:gap-3 w-full">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 text-right sm:w-24 leading-tight">
                EXCEL SHEET NO.
              </label>
              <div className="w-full sm:w-16 bg-white">
                <Input type="number" defaultValue={1} className="text-center" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-2 sm:gap-3 w-full">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 text-right sm:w-20 leading-tight">
                START ROW
              </label>
              <div className="w-full sm:w-16 bg-white">
                <Input type="number" defaultValue={1} className="text-center" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-2 sm:gap-3 w-full">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 text-right sm:w-20 leading-tight">
                END ROW
              </label>
              <div className="w-full sm:w-16 bg-white">
                <Input type="number" defaultValue={0} className="text-center" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-6 pt-4 border-t border-slate-200">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
          <Switch 
            label="SAVE CURRENT CONFIGURATION WHILE IMPORTING" 
            defaultChecked 
            dynamicBg="bg-emerald-500" 
          />
        </div>
                
      </div>
      <div className="w-full md:w-auto flex flex-col sm:flex-row sm:justify-between gap-3 sm:items-center">
          <Button variant="outline" className="w-full sm:w-auto px-5 py-2">
            Download Sample
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto bg-[#007bff] hover:bg-[#0069d9] text-white px-6 py-2 rounded-lg font-medium text-sm">
            Import <span>➔</span>
          </Button>
        </div>

    </div>
  );
}