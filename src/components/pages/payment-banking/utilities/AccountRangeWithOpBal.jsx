"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Switch from "@/components/common/Switch";
import React from "react";

export default function AccountRangeWithOpBal() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-white text-slate-700 font-sans antialiased rounded-lg">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-4 flex-1 max-w-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
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

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span>RETAIN OP. BAL. REFERENCES</span>
            <div className="flex items-center">
              <Switch defaultChecked dynamicBg="bg-emerald-500" />
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full lg:w-auto">
          <Button variant="secondary">
            Proceed <span>➔</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
