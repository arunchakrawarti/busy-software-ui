"use client";
import React from "react";
import { 
  Search, 
  BarChart3, 
  Menu, 
  ListFilter, 
  AlignLeft, 
  Wind,
  Calendar
} from "lucide-react";
import Button from "@/components/common/Button";

export default function QueryHSN() {
  return (
    <div className="w-full flex flex-col min-h-[500px] sm:min-h-[600px] bg-slate-50/50 font-sans antialiased text-slate-600">
      
      <div className="w-full flex flex-col flex-1 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-slate-100 bg-white">
          <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">
            HSN/SAC CODE
          </span>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-400">
            <Button variant="outline">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            
            <Button variant="outline">
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <Button variant="outline" >
              <AlignLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <div className="relative flex items-center border border-slate-200 rounded-lg px-3 py-1.5 bg-white text-slate-700 text-xs sm:text-sm shadow-sm min-w-[140px]">
              <Calendar className="w-3.5 h-3.5 mr-2 text-slate-400" />
              <span>17 Jul 2026</span>
            </div>

            <Button variant="outline">
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </Button>

            <Button variant="outline">
              <ListFilter className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white">
          <div className="text-slate-300 mb-4 select-none">
            <Wind className="w-16 h-16 sm:w-20 sm:h-20 mx-auto stroke-[1.2]" />
          </div>
          
          <h3 className="text-base sm:text-lg font-medium text-slate-700 mb-1">
            No data to display
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-[280px] sm:max-w-none mx-auto">
            Try adjusting your filters or date range
          </p>
        </div>

        <div className="w-full border-t border-slate-100 px-4 sm:px-6 py-4 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs">
            <span className="text-slate-400">No entries found</span>
            <button type="button" className="text-blue-600 font-medium hover:underline">F3: Search</button>
            <button type="button" className="text-blue-600 font-medium hover:underline">F5: Summary</button>
            <button type="button" className="text-blue-600 font-medium hover:underline">F7: Filter</button>
          </div>

          <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-slate-500 hover:text-slate-700 select-none">
            <input 
              type="checkbox" 
              className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer" 
            />
            <span className="leading-none">Don't refresh report after data modification</span>
          </label>
        </div>

      </div>
    </div>
  );
}