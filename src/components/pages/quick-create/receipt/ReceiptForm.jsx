"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function ReceiptForm() {
  const [showNarration, setShowNarration] = useState(true);

  return (
    <div className="w-full bg-white p-3 rounded-lg  flex flex-col justify-between">
      <div>
        <div className="w-full sm:w-64">
          <Input
            label="RECEIPT MODE"
            type="select"
            defaultValue="Cash"
            options={[
              { label: "Cash", value: "Cash" },
              { label: "Bank", value: "Bank" },
            ]}
            className="w-full"
          />
        </div>
      </div>
      <div className=" mt-5 space-y-6">
        <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-3 border-b border-gray-100 pb-2">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              ENTRY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Input
              label="ACCOUNT NAME"
              type="text"
              placeholder="Enter account name"
              className="w-full"
            />

            <Input
              label="AMOUNT"
              type="number"
              defaultValue="0.00"
              className="w-full"
            />

            <Input
              label="SHORT NARRATION"
              type="text"
              placeholder="Enter short narration"
              className="w-full"
            />
          </div>
        </div>
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setShowNarration(!showNarration)}
            className="flex items-center gap-2 text-blue-600 font-semibold uppercase text-sm focus:outline-none"
          >
            NARRATION
            {showNarration ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </button>

          {showNarration && (
            <textarea
              rows={3}
              placeholder="Enter complete narration details here..."
              className="w-full p-3 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
            />
          )}
        </div>
        <div className="w-full  h-16 bg-[#ebf3fe] border border-[#d2e4fd] rounded-lg"></div>
      </div>

      <div className="mt-5">
        <Button type="submit" variant="bluebutton" icon="arrow-right-line">
          Save
        </Button>
      </div>
    </div>
  );
}
