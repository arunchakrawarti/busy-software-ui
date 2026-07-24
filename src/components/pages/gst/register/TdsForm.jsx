import React from "react";
import Input from "@/components/common/Input";
import Switch from "@/components/common/Switch";
import TdsDetails from "./TdsDetails";

export default function TdsForm() {
  const greenBg = "peer-checked:bg-[#22C55E] bg-slate-200";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 items-center">
      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">ENABLE REPORTING</label>
        <div className="flex items-center gap-3 w-1/2">
          <Switch dynamicBg={greenBg} defaultChecked />
          <div className="w-full">
            <Input type="select" options={["GST", "VAT"]} defaultValue="GST" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">GSTIN</label>
        <div className="w-1/2">
          <Input type="text" defaultValue="33AAACI1607G2Z5" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">DEALER TYPE</label>
        <div className="w-1/2">
          <Input type="select" options={["Regular", "Composition"]} defaultValue="Regular" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">FILLING FREQ.</label>
        <div className="w-1/2">
          <Input type="select" options={["Default", "Monthly", "Quarterly"]} defaultValue="Default" />
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <label className="uppercase tracking-wider">TAN GSTIN</label>
          <p className="text-[10px] font-normal text-slate-400 capitalize">(If Tax Deductor)</p>
        </div>
        <div className="w-1/2">
          <Input type="text" placeholder="Enter TAN GSTIN" />
        </div>
      </div>

      <div className="hidden lg:block"></div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">GST PORTAL USER NAME</label>
        <div className="w-1/2">
          <Input type="text" placeholder="Enter user name" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">GST PORTAL PASSWORD</label>
        <div className="w-1/2">
          <Input type="password" placeholder="Enter password" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">E-INVOICE</label>
        <div className="flex items-center justify-between gap-3 w-1/2">
          <Switch dynamicBg={greenBg} defaultChecked />
          <button
            type="button"
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition"
          >
            Configure
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">E-WAY BILL</label>
        <div className="flex items-center justify-between gap-3 w-1/2">
          <Switch dynamicBg={greenBg} defaultChecked />
          <button
            type="button"
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition"
          >
            Configure
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">LOCAL DELIVERY DETAILS</label>
        <div className="w-1/2 flex justify-start">
          <Switch dynamicBg={greenBg} defaultChecked />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">ITC TAGGING</label>
        <div className="w-1/2 flex justify-start">
          <Switch dynamicBg={greenBg} defaultChecked />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">B2C QR CODE</label>
        <div className="w-1/2 flex justify-start">
          <Switch dynamicBg={greenBg} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">DEFAULT HSN</label>
        <div className="flex items-center gap-2 w-1/2">
          <div className="w-1/2">
            <Input type="text" placeholder="HSN" />
          </div>
          <div className="w-1/2">
            <Input type="text" defaultValue="0" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">DEFAULT TAX CATEGORY</label>
        <div className="w-1/2">
          <Input type="select" options={["Enter tax category"]} defaultValue="Enter tax category" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">ENABLE TAX ON ADVANCE RECEIPTS</label>
        <div className="w-1/2 flex justify-start">
          <Switch dynamicBg={greenBg} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">CESS</label>
        <div className="flex items-center gap-3 w-1/2">
          <Switch dynamicBg={greenBg} defaultChecked />
          <div className="w-full">
            <Input type="text" defaultValue="Cess" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider">ADDITIONAL CESS</label>
        <div className="w-1/2 flex justify-start">
          <Switch dynamicBg={greenBg} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <label className="uppercase tracking-wider max-w-[200px] leading-snug">
          SALES / PURCHASES AMT. AS TAXABLE AMT. IN GST REPORT
        </label>
        <div className="w-1/2 flex justify-start">
          <Switch dynamicBg={greenBg} />
        </div>
      </div>
      <TdsDetails/>
    </div>
  );
}