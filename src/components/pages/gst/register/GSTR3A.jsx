import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

export default function GSTR3A() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-slate-100">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <h2 className="text-base font-semibold text-slate-800">
            Select Report Period
          </h2>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 transition"
          >
            <i className="ri-close-line text-lg" />
          </button>
        </div>

        <div className="my-5 rounded-xl bg-[#F8F9FA] p-4 space-y-4 border border-slate-100/80">
          <Input
            type="select"
            label="START MONTH"
            labelClass="text-[11px] font-bold text-slate-400 tracking-wider"
            options={months}
            defaultValue="May"
            className="bg-white border-slate-200 text-slate-700 shadow-sm"
          />
          <Input
            type="select"
            label="END MONTH"
            labelClass="text-[11px] font-bold text-slate-400 tracking-wider"
            options={months}
            defaultValue="July"
            className="bg-white border-slate-200 text-slate-700 shadow-sm"
          />
        </div>

        <div className="flex items-center justify-end gap-3 pt-1">
          <Button variant="outline">Cancel</Button>

          <Button href="/gst/register/gstin-monthlist" variant="secondary">OK</Button>
        </div>
      </div>
    </div>
  );
}
