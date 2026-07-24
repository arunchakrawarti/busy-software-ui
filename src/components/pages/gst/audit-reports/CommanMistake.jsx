"use client";

import React from "react";
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

export default function CommanMistake() {
  return (
    <div className="w-full flex flex-col min-h-[500px] sm:min-h-[600px] bg-white font-sans antialiased border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-end gap-3 px-4 sm:px-6 py-3 border-b border-slate-100 bg-white">
        
        {/* Search Icon */}
        <button 
          type="button" 
          className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Search"
        >
          <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </button>
        
        {/* Analytics/Chart Icon */}
        <button 
          type="button" 
          className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Analytics"
        >
          <BarChart2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </button>

        {/* Alignment Icon */}
        <button 
          type="button" 
          className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Align"
        >
          <AlignLeft className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </button>
        {/* Filter Button */}
        <button 
          type="button" 
          className="p-1.5 text-slate-500 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
          aria-label="Filter"
        >
          <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

      </div>

      {/* Main Empty State Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white">
        <div className="text-slate-300 mb-3 select-none">
          <Wind className="w-12 h-12 sm:w-16 sm:h-16 mx-auto stroke-[1.25]" />
        </div>
        
        <h3 className="text-sm sm:text-base font-semibold text-slate-700 mb-1">
          No data to display
        </h3>
        <p className="text-xs text-slate-400">
          Try adjusting your filters or date range
        </p>
      </div>

      {/* Footer Bar */}
      <div className="w-full border-t border-slate-100 px-4 sm:px-6 py-3 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="text-slate-400">No entries found</span>
          <button type="button" className="text-blue-600 font-semibold hover:underline">F3: Search</button>
          <button type="button" className="text-blue-600 font-semibold hover:underline">F5: Summary</button>
          <button type="button" className="text-blue-600 font-semibold hover:underline">F7: Filter</button>
        </div>

        <label className="flex items-center gap-2 cursor-pointer text-blue-600 select-none">
          <input 
            type="checkbox" 
            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer" 
          />
          <span className="text-slate-500 font-medium hover:text-slate-700">
            Don't refresh report after data modification
          </span>
        </label>
      </div>

    </div>
  );
}