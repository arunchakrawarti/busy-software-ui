import React from "react";
import Input from "@/components/common/Input";

export default function CashDetails() {
  return (
    <div className="space-y-6 pt-4 border-t border-slate-200/60">
      <h3 className="text-xs font-bold text-slate-500 capitalize">
        Signatory&apos;s Details
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 items-center">
        {/* Row 1 */}
        <div className="flex items-center justify-between gap-4">
          <label className="uppercase tracking-wider">NAME</label>
          <div className="w-1/2">
            <Input type="text" placeholder="Enter name" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <label className="uppercase tracking-wider">S/O, D/O, W/O</label>
          <div className="w-1/2">
            <Input type="text" placeholder="Enter relation" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-between gap-4">
          <label className="uppercase tracking-wider">DESIGNATION</label>
          <div className="w-1/2">
            <Input type="text" placeholder="Enter designation" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <label className="uppercase tracking-wider">MOBILE NO.</label>
          <div className="w-1/2">
            <Input type="text" placeholder="Enter mobile" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-between gap-4">
          <label className="uppercase tracking-wider">EMAIL ID</label>
          <div className="w-1/2">
            <Input type="email" placeholder="Enter email id" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <label className="uppercase tracking-wider">PAN</label>
          <div className="w-1/2">
            <Input type="text" placeholder="Enter PAN" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end items-stretch sm:items-center gap-2.5 sm:gap-4 w-full pt-4 border-t border-slate-200/60">
        <button
          type="button"
          className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition"
        >
          GSP Configuration
        </button>
        <button
          type="button"
          className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition"
        >
          Create Default GST Masters
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 px-6 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition"
        >
          <span>Save</span>
          <i className="ri-arrow-right-line text-sm" />
        </button>
      </div>
    </div>
  );
}