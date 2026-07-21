"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

export default function Clearbill() {

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-white text-slate-700 font-sans antialiased rounded-lg">
      
      <div className="flex flex-col  sm:flex-row sm:items-center justify-between gap-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full sm:w-auto flex-1 max-w-lg">
          <div className="w-full sm:w-80">
            <Input
            label="ACC RANGE"
              type="select"
              defaultValue="All Accounts"
              options={[
                { label: "All Accounts", value: "All Accounts" },
                { label: "Group", value: "Group" },
                { label: "Selected Accounts", value: "Selected Accounts" },
              ]}
            />
          </div>
        </div>
        <div className="flex justify-end w-full sm:w-auto mt-2 sm:mt-0">
          <Button
            variant="secondary"
            className="w-full sm:w-auto bg-[#007bff] hover:bg-[#0069d9] text-white px-6 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            Proceed <span>➔</span>
          </Button>
        </div>

      </div>

    </div>
  );
}