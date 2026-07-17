"use client"
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Input from '@/components/common/Input';

export default function PricingSection() {
  const [showMore, setShowMore] = useState(true);

  return (
    <div className="w-full bg-white rounded-lg p-4 sm:p-6">
      <button
        type="button"
        onClick={() => setShowMore(!showMore)}
        className="flex items-center gap-2 text-blue-600 font-semibold uppercase mb-6 focus:outline-none"
      >
        PRICING
        {showMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {showMore && (
        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
              DISCOUNT DETAILS
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <label className="font-semibold text-xs text-gray-700 w-full sm:w-48 uppercase">SALE DISC.</label>
                <Input
                  type="number"
                  defaultValue="0.00"
                  className="w-full"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <label className="font-semibold text-xs text-gray-700 w-full sm:w-48 uppercase">PURC. DISC.</label>
                <Input
                  type="number"
                  defaultValue="0.00"
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between sm:justify-start gap-3 lg:col-span-1 lg:col-start-1">
                <label className="font-semibold text-xs text-gray-700 max-w-[70%] sm:w-48 uppercase">
                  SPECIFY SALE DISC. STRUCTURE
                </label>
                <div className="flex items-center gap-2 shrink-0">
                  <input type="checkbox" className="toggle" />
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-start gap-3 lg:col-span-1 lg:col-start-2">
                <label className="font-semibold text-xs text-gray-700 max-w-[70%] sm:w-48 uppercase">
                  SPECIFY PURC. DISC. STRUCTURE
                </label>
                <div className="flex items-center gap-2 shrink-0">
                  <input type="checkbox" className="toggle" />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
              MARKUP DETAILS
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <label className="font-semibold text-xs text-gray-700 w-full sm:w-48 uppercase">SALE MARKUP</label>
                <Input
                  type="number"
                  defaultValue="0.00"
                  className="w-full"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <label className="font-semibold text-xs text-gray-700 w-full sm:w-48 uppercase">PURC. MARKUP</label>
                <Input
                  type="number"
                  defaultValue="0.00"
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between sm:justify-start gap-3 lg:col-span-1 lg:col-start-1">
                <label className="font-semibold text-xs text-gray-700 max-w-[70%] sm:w-48 uppercase">
                  SPECIFY SALE MARKUP STRUCTURE
                </label>
                <div className="flex items-center gap-2 shrink-0">
                  <input type="checkbox" className="toggle" />
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-start gap-3 lg:col-span-1 lg:col-start-2">
                <label className="font-semibold text-xs text-gray-700 max-w-[70%] sm:w-48 uppercase">
                  SPECIFY PURC. MARKUP STRUCTURE
                </label>
                <div className="flex items-center gap-2 shrink-0">
                  <input type="checkbox" className="toggle" />
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}