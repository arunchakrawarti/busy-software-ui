"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Switch from "@/components/common/Switch";
import React from "react";

export default function DeactivateMaster() {
  const commonLabelClass = "text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 block";

  return (
    <div className="w-full  p-4 sm:p-6 bg-white text-slate-700 font-sans antialiased min-h-[250px] flex flex-col justify-between border border-slate-100 rounded-xl shadow-sm">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 items-end">
        
        <div className="w-full bg-white rounded-lg">
          <Input
            label="MASTER TYPE"
            labelClass={commonLabelClass}
            type="select"
            defaultValue="Account"
            options={[{ label: "Account", value: "Account" }]}
          />
        </div>

        <div className="w-full bg-white rounded-lg">
          <Input
            label="RANGE"
            labelClass={commonLabelClass}
            type="select"
            defaultValue="One / Group"
            options={[{ label: "One / Group", value: "One / Group" }]}
          />
        </div>

        <div className="w-full bg-white rounded-lg">
          <Input
            label="MASTER NAME"
            labelClass={commonLabelClass}
            type="select"
            defaultValue="Select name"
            options={[{ label: "Select name", value: "Select name" }]}
          />
        </div>

        <div className="flex flex-col gap-2 w-full justify-end h-full pb-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            DE-ACTIVATE
          </span>
          <div className="flex items-center h-10">
            <Switch dynamicBg="bg-blue-500" />
          </div>
        </div>

      </div>

      <div className="flex justify-end mt-8 pt-4 border-t border-slate-100">
        <Button variant="secondary"
        >
          Save <span>➔</span>
        </Button>
      </div>

    </div>
  );
}