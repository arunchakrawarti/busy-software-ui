"use client";
import React from "react";
import { ListFilter, ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input"; // Aapke folder structure ke hisaab se path adjust kar lein
import Switch from "@/components/common/Switch"; // Aapke folder structure ke hisaab se path adjust kar lein

export default function UpdateCategory() {
  const commonLabelClass = "text-xs font-bold uppercase tracking-wider text-slate-700";

  return (
    <div className="w-full flex flex-col min-h-[500px] bg-slate-50/50 p-6 font-sans antialiased text-slate-700">
      
      {/* Top Header Controls */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-6">
          
          {/* Custom Switch Component */}
          <Switch 
            label="UPDATE DATEWISE HSN CODE" 
            dynamicBg="bg-emerald-500" 
          />

          {/* Date Input Box */}
          <div className="flex items-center gap-3">
            <span className={commonLabelClass}>
              DATE
            </span>
            <input
              type="text"
              defaultValue="01-04-2026"
              className="px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none w-32 text-center text-slate-600"
            />
          </div>
        </div>

        {/* Top Right Filter Icon Button */}
        <Button variant="outline" className="p-2 border-slate-200 rounded-lg shadow-sm bg-white">
          <ListFilter className="w-4 h-4 text-slate-600" />
        </Button>
      </div>

      {/* Inputs Form Container */}
      <div className="flex-1 w-full mt-6">
        <div className="w-full bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden max-w-5xl">
          
          {/* Form Header */}
          <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 text-left">
            <div className="col-span-1 text-center text-slate-400">#</div>
            <div className="col-span-4 pl-2">Name</div>
            <div className="col-span-3 pl-2">HSN Code</div>
            <div className="col-span-4 pl-2">Tax Category</div>
          </div>

          {/* Form Row with Converted Custom Inputs */}
          <div className="divide-y divide-slate-100">
            <div className="grid grid-cols-12 items-start px-4 py-4 bg-white gap-2">
              
              {/* Index Column */}
              <div className="col-span-1 text-center text-sm text-slate-400 pt-9">
                1
              </div>
              
              {/* Name (Using Custom Select Input) */}
              <div className="col-span-4 px-2">
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

              {/* HSN Code Input */}
              <div className="col-span-3 px-2 border-l border-slate-100">
                <div className="flex flex-col gap-1.5">
                  <label className={commonLabelClass}>HSN CODE</label>
                  <input
                    type="text"
                    defaultValue="Dfv"
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 transition text-slate-700"
                  />
                </div>
              </div>

              {/* Tax Category Input */}
              <div className="col-span-4 px-2 border-l border-slate-100">
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

      {/* Bottom Actions Footer */}
      <div className="w-full border-t border-slate-200/60 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="px-5 py-2 text-sm font-medium bg-white border border-slate-200 text-slate-700 rounded-lg shadow-sm hover:bg-slate-50 transition">
            Filter
          </button>
          <button type="button" className="px-4 py-2 text-sm font-medium bg-white border border-slate-200 text-slate-700 rounded-lg shadow-sm hover:bg-slate-50 transition">
            Update 'HSN Code' in All Rows
          </button>
          <button type="button" className="px-4 py-2 text-sm font-medium bg-white border border-slate-200 text-slate-700 rounded-lg shadow-sm hover:bg-slate-50 transition">
            Update 'Tax Category' in All Rows
          </button>
        </div>

        {/* Right Save Button */}
        <button type="button" className="flex items-center gap-2 px-6 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          <span>Save</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}