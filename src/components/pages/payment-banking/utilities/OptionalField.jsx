import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

export default function Optionalfied() {
  return (
    <div>
      <div className="w-full bg-white border border-slate-200 rounded-lg px-5 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-400 font-medium">Mode</span>
          <span className="text-slate-800 font-bold">Voucher No. Wise</span>
        </div>
        
        <Button
          variant="outline"
          icon="filter-3-line"
          className="w-10 h-10 border border-slate-200 rounded-xl flex items-center justify-center p-0 text-slate-500 hover:bg-slate-50"
        />
      </div>
      <div className="w-full mt-5 bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <Input
            label="VCH TYPE"
            type="select"
            defaultValue="Sales"
            options={[
              { label: "Sales", value: "Sales" },
              { label: "Purchase", value: "Purchase" },
            ]}
            className="w-full h-11"
          />

          <Input
            label="VCH SERIES"
            type="select"
            defaultValue="Main"
            options={[{ label: "Main", value: "Main" }]}
            className="w-full h-11"
          />

          <Input
            label="VCH NO."
            type="text"
            placeholder="Enter Vch No."
            className="w-full h-11"
          />

          <Input
            label="VCH DATE"
            type="date"
            placeholder="DD-MM-YYYY"
            className="w-full h-11"
          />
        </div>

        <div className="mt-4 pt-2 border-t border-slate-100">
          <p className="text-xs text-slate-400 font-medium italic">
            Updation Details-Billing/Shipping Details Party Name
          </p>
        </div>
      </div>
    </div>
  );
}
