"use client";
import React from "react";
import { 
  Search, 
  BarChart3, 
  Menu, 
  ListFilter, 
  AlignLeft, 
  Wind 
} from "lucide-react";
import Button from "@/components/common/Button";

export default function QueryGSTIN() {
  return (
    <div className="w-full flex flex-col min-h-[500px] sm:min-h-[600px] bg-white font-sans antialiased text-slate-600 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-slate-100 bg-white">
        <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">
          GSTIN
        </span>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-slate-400">
          <Button variant="outline" className="p-2 sm:p-3">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
          </Button>
          
          <Button variant="outline" className="p-2 sm:p-3">
            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
          </Button>

          <Button variant="outline" className="p-2 sm:p-3">
            <AlignLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
          </Button>

          <Button variant="outline" className="p-2 sm:p-3">
            <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
          </Button>

          <Button variant="outline" className="p-2 sm:p-3">
            <ListFilter className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white">
        <div className="text-slate-300 mb-4 select-none">
          <Wind className="w-12 h-12 sm:w-16 sm:h-16 mx-auto stroke-[1.5]" />
        </div>
        
        <h3 className="text-sm sm:text-base font-semibold text-slate-700 mb-1">
          No data to display
        </h3>
        <p className="text-[11px] sm:text-xs text-slate-400 max-w-[255px] sm:max-w-none mx-auto">
          Try adjusting your filters or date range
        </p>
      </div>

      <div className="w-full border-t border-slate-100 px-4 sm:px-6 py-4 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs">
          <span className="text-slate-400 w-full sm:w-auto mb-1 sm:mb-0">No entries found</span>
          <button type="button" className="text-blue-600 font-medium hover:underline">F3: Search</button>
          <button type="button" className="text-blue-600 font-medium hover:underline">F5: Summary</button>
          <button type="button" className="text-blue-600 font-medium hover:underline">F7: Filter</button>
        </div>

        <label className="flex items-start sm:items-center gap-3 cursor-pointer text-[11px] sm:text-xs font-medium text-slate-500 hover:text-slate-700 select-none">
          <input 
            type="checkbox" 
            className="w-4 h-4 mt-0.5 sm:mt-0 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer" 
          />
          <span className="leading-tight sm:leading-none">Don't refresh report after data modification</span>
        </label>
      </div>

    </div>
  );
}