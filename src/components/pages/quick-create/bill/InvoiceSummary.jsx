"use client";
import Input from "@/components/common/Input";
import React, { useState } from "react";

const InvoiceSummary = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-5">
      <div className="grid grid-cols-[3fr_1fr_.8fr_1.3fr] gap-4">
        <Input
          label="BILL SUNDRY (APPLY TAX F4)"
          type="select"
          placeholder="Select Bill Sundry"
          options={[
            { label: "GST 3%", value: "GST 3%" },
            { label: "GST 5%", value: "GST 5%" },
            { label: "GST 12%", value: "GST 12%" },
            { label: "GST 18%", value: "GST 18%" },
          ]}
          labelClass="text-sm font-bold uppercase text-[#333]"
        />

        <Input
          label="TYPE"
          type="select"
          placeholder="Select Type"
          options={[
            { label: "Add", value: "Add" },
            { label: "Less", value: "Less" },
          ]}
          labelClass="text-sm font-bold uppercase text-[#333]"
        />

        <Input
          label="@"
          placeholder="0"
          labelClass="text-sm font-bold uppercase text-[#333] text-center"
        />

        <Input
          label="AMOUNT"
          placeholder="0.00"
          labelClass="text-sm font-bold uppercase text-[#333]"
        />
      </div>
      <div className="mt-5">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-bold uppercase text-blue-600"
        >
          NARRATION
          <i
            className={
              open
                ? "ri-arrow-up-s-line text-lg"
                : "ri-arrow-down-s-line text-lg"
            }
          />
        </button>

        {open && (
          <div className="mt-3">
            <Input
              type="textarea"
              placeholder="Enter Narration"
              className="min-h-28"
            />
          </div>
        )}
      </div>
      
     
    </div>
  );
};

export default InvoiceSummary;
