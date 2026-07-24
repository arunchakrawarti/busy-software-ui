import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function GstinMonthList() {
  const months = [
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
    "JANUARY",
    "FEBRUARY",
    "MARCH",
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-4 sm:p-6 rounded-xl border border-slate-100 font-sans shadow-sm">
      <h2 className="text-sm sm:text-base font-bold text-slate-600 mb-4 sm:mb-5 break-all">
        GSTIN - 33AAAC11607G2Z5
      </h2>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-6">
        <label className="text-xs font-bold text-slate-700 tracking-wide leading-tight">
          SELECT SAVING MODE
        </label>
        <div className="w-full sm:w-48">
          <Input
            type="select"
            options={["Automatic", "Manual"]}
            defaultValue="Automatic"
            className="bg-white border-slate-200 text-slate-700 text-sm py-1.5 shadow-sm w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 pb-2 sm:pb-3 text-xs font-bold text-slate-700 tracking-wider border-b sm:border-b-0 border-slate-100">
        <div>MONTH</div>
        <div className="hidden sm:block">STATUS</div>
        <div className="text-right sm:text-left">ACTION</div>
      </div>

      <div className="space-y-2.5 sm:space-y-3 pt-2 sm:pt-0">
        {months.map((month) => (
          <div
            key={month}
            className="grid grid-cols-2 sm:grid-cols-3 items-center gap-2 sm:gap-4 py-1 border-b border-slate-50 sm:border-b-0"
          >
            <div className="text-xs font-bold text-slate-600">{month}</div>

            <div className="hidden sm:block"></div>

            <div className="text-right">
              <Button
                variant="secondary"
                className="w-full sm:w-auto min-w-[110px] justify-center gap-1.5 text-xs sm:text-sm py-1.5 sm:py-2"
              >
                Download
                <i className="ri-arrow-right-line text-sm sm:text-base" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}