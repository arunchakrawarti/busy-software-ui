"use client"
import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Input from '@/components/common/Input';

export default function MoreSection() {
  const [showMore, setShowMore] = useState(true);

  return (
    <div className="w-full bg-white rounded-lg p-4 sm:p-6">
      <button
        type="button"
        onClick={() => setShowMore(!showMore)}
        className="flex items-center gap-2 text-blue-600 font-semibold uppercase mb-6 focus:outline-none"
      >
        MORE
        {showMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {showMore && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  ACCOUNTS POSTING
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <label className="font-semibold text-xs text-gray-700 w-full sm:w-48 uppercase">
                    FOR SALE
                  </label>
                  <Input
                    type="select"
                    placeholder="Select"
                    options={[{ label: "Select", value: "" }]}
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  DEFAULT
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between sm:justify-start gap-3">
                    <label className="font-semibold text-xs text-gray-700 max-w-[70%] sm:w-48 uppercase">
                      SKIP IN GST
                    </label>
                    <div className="flex items-center gap-2 shrink-0">
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-start gap-3">
                    <label className="font-semibold text-xs text-gray-700 max-w-[70%] sm:w-48 uppercase">
                      DON'T MAINTAIN STOCK
                    </label>
                    <div className="flex items-center gap-2 shrink-0">
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-start gap-3 sm:col-span-2">
                    <label className="font-semibold text-xs text-gray-700 max-w-[70%] sm:w-48 uppercase">
                      CRITICAL LEVEL
                    </label>
                    <div className="flex items-center gap-2 shrink-0">
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  TAX INCLUSIVE PRICE
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between sm:justify-start gap-3">
                    <label className="font-semibold text-xs text-gray-700 max-w-[70%] sm:w-48 uppercase">
                      FOR SALE
                    </label>
                    <div className="flex items-center gap-2 shrink-0">
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-start gap-3">
                    <label className="font-semibold text-xs text-gray-700 max-w-[70%] sm:w-48 uppercase">
                      FOR PURC.
                    </label>
                    <div className="flex items-center gap-2 shrink-0">
                      <input type="checkbox" className="toggle" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                  <label className="font-semibold text-xs text-gray-700 w-full sm:w-48 uppercase">
                    FOR PURC.
                  </label>
                  <Input
                    type="select"
                    placeholder="Select"
                    options={[{ label: "Select", value: "" }]}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow transition-colors"
            >
              Save <span>➔</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}