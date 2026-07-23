"use client";

import React, { useState } from "react";
import { 
  Search, 
  BarChart2, 
  AlignLeft, 
  Calendar, 
  ChevronDown, 
  Menu, 
  Filter, 
  Wind 
} from "lucide-react";

export default function SupplyInword() {
  const [dontRefresh, setDontRefresh] = useState(false);

  return (
    <div className="w-full flex flex-col min-h-[500px] sm:min-h-[600px] bg-slate-100/60 font-sans text-slate-700 antialiased">
      <div className="w-full flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-slate-200 bg-white">
          <div className="text-xs sm:text-sm font-medium text-slate-800">
            From 01-04-2026 to 17-07-2026
          </div>
          
          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2 sm:gap-3 text-slate-500 w-full lg:w-auto">
            <div className="flex items-center gap-1 sm:gap-2">
              <button 
                type="button" 
                className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>
              
              <button 
                type="button" 
                className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                aria-label="Analytics"
              >
                <BarChart2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>

              <button 
                type="button" 
                className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                aria-label="Align"
              >
                <AlignLeft className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* Date Range Picker Dropdown */}
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-600 bg-white cursor-pointer hover:border-slate-300 transition-colors">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 shrink-0" />
                <span className="whitespace-nowrap">01 Apr 2026 – 17 Jul 2026</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5 shrink-0" />
              </div>

              <button 
                type="button" 
                className="p-1.5 text-slate-500 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                aria-label="Menu"
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button 
                type="button" 
                className="p-1.5 text-slate-500 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                aria-label="Filter"
              >
                <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center p-6 text-center bg-white">
          <div className="text-slate-300 mb-3 select-none">
            <Wind className="w-12 h-12 sm:w-16 sm:h-16 mx-auto stroke-[1.25]" />
          </div>
          
          <h3 className="text-sm sm:text-base font-semibold text-slate-700 mb-1">
            No data to display
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xs sm:max-w-none">
            Try adjusting your filters or date range
          </p>
        </div>

        <div className="w-full border-t border-slate-200 px-4 sm:px-6 py-3 bg-white flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2">
            <span className="text-slate-400">No entries found</span>
            <button type="button" className="text-blue-600 font-semibold hover:underline">
              F3: Search
            </button>
            <button type="button" className="text-blue-600 font-semibold hover:underline">
              F5: Summary
            </button>
            <button type="button" className="text-blue-600 font-semibold hover:underline">
              F7: Filter
            </button>
          </div>

          <label className="flex items-center gap-2 cursor-pointer select-none shrink-0">
            <input 
              type="checkbox" 
              checked={dontRefresh}
              onChange={(e) => setDontRefresh(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer" 
            />
            <span className="text-blue-600 hover:text-blue-700 font-medium">
              Don't refresh report after data modification
            </span>
          </label>
        </div>

      </div>
    </div>
  );
}