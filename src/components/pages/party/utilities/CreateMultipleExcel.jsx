"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Switch from "@/components/common/Switch"; // Aapke Switch component ka path
import React from "react";

export default function CreateMultipleExcel() {
  const columns = [
    { label: "Account Fields", key: "accountField" },
    { label: "Excel Field", key: "excelField" },
  ];

  const tableData = []; 

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-white text-slate-700 font-sans antialiased">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-slate-100 sm:border-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs font-bold uppercase tracking-wider text-slate-700">
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

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs font-bold uppercase tracking-wider text-slate-700 md:justify-end">
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
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 sm:mb-5">
          Connect Fields of Busy and Excel / Google Sheet
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Account Fields"
              type="select"
              defaultValue="Search"
              labelClass="text-xs font-bold uppercase tracking-wider text-slate-700"
              options={[{ label: "Search", value: "Search" }]}
            />
            <Input
              label="Excel Field"
              type="select"
              defaultValue="Select"
              labelClass="text-xs font-bold uppercase tracking-wider text-slate-700"
              options={[{ label: "Select", value: "Select" }]}
            />
          </div>

          <div className="lg:col-span-1 flex flex-row lg:flex-col justify-center gap-3 my-2 lg:my-0">
            <button type="button" className="flex items-center justify-center border border-slate-200 text-slate-500 h-9 w-9 rounded-lg hover:bg-slate-50 active:scale-95 transition-all font-semibold rotate-90 lg:rotate-0">➔</button>
            <button type="button" className="flex items-center justify-center border border-slate-200 text-slate-500 h-9 w-9 rounded-lg hover:bg-slate-50 active:scale-95 transition-all font-semibold rotate-90 lg:rotate-0">➔</button>
          </div>

          <div className="lg:col-span-6 overflow-hidden w-full">
            <BasicTable 
              columns={columns} 
              data={tableData} 
              pagination={false}
              bordered={true}
              theadClassName="text-xs uppercase tracking-wider"
              wrapperClassName="border border-slate-200 rounded-xl overflow-x-auto w-full"
            />
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 sm:mb-5 border-b border-slate-200 pb-2">
          Default Values for New Masters
        </h3>
        
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8 lg:gap-12">
          <div className="w-full sm:w-72">
            <Input
              label="Parent Group"
              type="select"
              defaultValue="Expenses (Direct/Mfg.)"
              labelClass="text-xs font-bold uppercase tracking-wider text-slate-700"
              options={[
                { label: "Expenses (Direct/Mfg.)", value: "Expenses (Direct/Mfg.)" },
                { label: "Central-40%", value: "Central-40%" },
                { label: "Central-18%", value: "Central-18%" },
                { label: "Local-12%", value: "Local-12%" },
              ]}
            />
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-8 w-full sm:w-auto h-10 text-xs font-bold uppercase tracking-wider text-slate-700">
            <Switch 
              label="Date Wise HSN" 
              dynamicBg="bg-emerald-500" 
            />

            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 cursor-not-allowed flex items-center">
              Date Wise Pricing
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6 sm:mb-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 sm:mb-5 border-b border-slate-200 pb-2">
          Modification of Masters
        </h3>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 mb-4 sm:mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">On The Basis Of</span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-bold uppercase tracking-wider text-slate-700">
            <Switch 
              label="Overwrite Existing Acc Category" 
              dynamicBg="bg-emerald-500" 
            />
            <Switch 
              label="Overwrite Existing Item Category" 
              dynamicBg="bg-emerald-500" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-white p-4 sm:p-5 border border-slate-200 rounded-xl shadow-sm">
          <div className="md:col-span-6 lg:col-span-7 w-full">
            <Input
              label="Excel File Path :"
              type="text"
              placeholder="Select path"
              labelClass="text-xs font-bold uppercase tracking-wider text-slate-700"
            />
          </div>

          <div className="md:col-span-6 lg:col-span-5 grid grid-cols-3 gap-3 w-full">
            <Input
              label="Excel Sheet"
              type="number"
              defaultValue={1}
              labelClass="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 text-center block"
              className="text-center"
            />
            <Input
              label="Start Row"
              type="number"
              defaultValue={1}
              labelClass="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 text-center block"
              className="text-center"
            />
            <Input
              label="End Row"
              type="number"
              defaultValue={0}
              labelClass="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 text-center block"
              className="text-center"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-100">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-700 order-2 md:order-1">
          <Switch 
            label="Save Current Configuration While Importing" 
            defaultChecked 
            dynamicBg="bg-emerald-500" 
          />
        </div>
        
        <span className="text-xs font-bold tracking-wide italic text-red-500 order-1 md:order-2">
          Important : Predefined Masters Won't Be Modified
        </span>
      </div>
      <div className="mt-5 w-auto lg:flex flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:justify-between">
        <Button variant="outline">
            Download Sample
        </Button>
        <Button variant="secondary">
            Import
        </Button>
      </div>

    </div>
  );
}