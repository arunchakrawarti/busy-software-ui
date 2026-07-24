import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function Electroniccreditdetails() {
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

      {/* Bottom Action Buttons */}
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end items-stretch sm:items-center gap-2.5 sm:gap-4 w-full pt-4 border-t border-slate-200/60">
        <Button variant="outline">GSP Configuration</Button>
        <Button variant="outline">Create Default GST Masters</Button>
        <Button variant="secondary" className="flex items-center justify-center gap-2">
          <span>Save</span>
          <i className="ri-arrow-right-line text-sm" />
        </Button>
      </div>
    </div>
  );
}