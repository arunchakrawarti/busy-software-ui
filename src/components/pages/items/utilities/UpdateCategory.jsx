"use client";
import React from "react";
import { ListFilter, ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input"; 
import Switch from "@/components/common/Switch"; 

export default function UpdateCategory() {
  const commonLabelClass = "text-xs font-bold uppercase tracking-wider text-slate-700";

  return (
    <div className="w-full flex flex-col min-h-screen sm:min-h-[500px] bg-slate-50/50  font-sans antialiased text-slate-700">
      
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
          
          <div className="w-full sm:w-auto overflow-x-auto whitespace-nowrap hidden-scrollbar">
            <Switch 
              label="UPDATE DATEWISE HSN CODE" 
              dynamicBg="bg-emerald-500" 
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <span className={commonLabelClass}>
              DATE
            </span>
            <input
              type="text"
              defaultValue="01-04-2026"
              className="px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none w-full sm:w-32 text-center text-slate-600"
            />
          </div>
        </div>

        <Button variant="outline" className="p-2 border-slate-200 rounded-lg shadow-sm bg-white self-end sm:self-auto">
          <ListFilter className="w-4 h-4 text-slate-600" />
        </Button>
      </div>

      <div className="flex-1 w-full mt-6">
        <div className="w-full bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100">
            
            <div className="grid grid-cols-1 md:grid-cols-12 items-start p-4 bg-white gap-4 md:gap-2">
              
              <div className="col-span-1 md:text-center text-sm font-bold md:font-normal text-slate-400 md:pt-9 flex items-center gap-2 md:block">
                <span className="md:hidden text-xs text-slate-500 uppercase tracking-wider">Row:</span>
                1
              </div>
              
              <div className="col-span-1 md:col-span-4 md:px-2">
                <Input
                  label="NAME"
                  labelClass={commonLabelClass}
                  type="select"
                  defaultValue="Bjnj"
                  options={[
                    { label: "Bjnj", value: "Bjnj" },
                    { label: "Select name", value: "Select name" }
                  ]}
                />
              </div>

              <div className="col-span-1 md:col-span-3 md:px-2 md:border-l border-slate-100">
                <div className="flex flex-col gap-1.5">
                  <label className={commonLabelClass}>HSN CODE</label>
                  <input
                    type="text"
                    defaultValue="Dfv"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 transition text-slate-700"
                  />
                </div>
              </div>

              <div className="col-span-1 md:col-span-4 md:px-2 md:border-l border-slate-100">
                <div className="flex flex-col gap-1.5">
                  <label className={commonLabelClass}>TAX CATEGORY</label>
                  <input
                    type="text"
                    defaultValue="Services 5%"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 transition text-slate-700"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-slate-200/60 mt-8 pt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3 w-full md:w-auto">
          <Button variant="outline" className="w-full sm:w-auto justify-center">
            Filter
          </Button>
          <Button variant="outline" className="w-full sm:w-auto justify-center text-center">
            Update 'HSN Code' in All Rows
          </Button>
          <Button variant="outline" className="w-full sm:w-auto justify-center text-center">
            Update 'Tax Category' in All Rows
          </Button>
        </div>

        <Button variant="secondary" className="w-full md:w-auto justify-center gap-2">
          <span>Save</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

    </div>
  );
}