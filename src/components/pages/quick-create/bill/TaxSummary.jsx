"use client";
import { useState } from "react";
import Button from "@/components/common/Button";

export default function TaxSummary() {
  const [open, setOpen] = useState(false);

  return (
    <div>
        <div className="mt-6 rounded-lg border border-gray-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3"
      >
        <h1 className="text-lg font-bold uppercase text-blue-600">
          Tax Summary
        </h1>

        <i
          className={`text-xl transition-transform ${
            open ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
          }`}
        />
      </button>
      {open && (
        <div className="border-t border-gray-200 px-4 py-4">

          <div className="flex items-center justify-between">
            <h1 className="text-sm font-bold uppercase text-[#333]">
              TAX RATE
            </h1>

            <p className="text-base font-medium text-gray-700">
              0%
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <h1 className="text-sm font-bold uppercase text-[#333]">
              TAXABLE
            </h1>

            <p className="text-base font-medium text-gray-700">
              Rs.0.00
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <h1 className="text-sm font-bold uppercase text-[#333]">
              CGST
            </h1>

            <p className="text-base font-medium text-gray-700">
              Rs.0.00
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <h1 className="text-sm font-bold uppercase text-[#333]">
              SGST
            </h1>

            <p className="text-base font-medium text-gray-700">
              Rs.0.00
            </p>
          </div>

        </div>
      )}
       
    </div>
    <div className="space-y-5 mt-5">
        <div className="rounded-2xl border border-blue-200 bg-white p-6">
          <h2 className="text-md font-semibold uppercase text-[#2D3B55]">
            GRAND TOTAL
          </h2>

          <h1 className="mt-2 text-4xl font-bold text-[#2563EB]">Rs.0.00</h1>
        </div>

        <Button type="button" variant="bluebutton" className="">
          Save Invoice
          <i className="ri-arrow-right-line text-2xl"></i>
        </Button>
      </div>
    </div>
  );
}