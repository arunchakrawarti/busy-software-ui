"use client";
import React from "react";
import {
  Search,
  BarChart3,
  AlignLeft,
  Calendar,
  ChevronDown,
  Menu,
  ListFilter,
} from "lucide-react";
import Button from "@/components/common/Button";
import ReturnTable from "./ReturnTable";

export default function ReturnTab() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-white border border-slate-200 rounded-xl shadow-sm">
        <span className="text-xs sm:text-sm font-medium text-slate-700 select-none">
          From 01-04-2026 to 17-07-2026
        </span>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-slate-500">
          <button
            type="button"
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            type="button"
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            type="button"
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
          >
            <AlignLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 cursor-pointer text-xs sm:text-sm text-slate-600 transition-colors">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>01 Apr 2026 – 17 Jul 2026</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
          </div>

          <Button variant="outline" className="p-2 border-slate-200 rounded-lg">
            <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
          </Button>

          <Button variant="outline" className="p-2 border-slate-200 rounded-lg">
            <ListFilter className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
          </Button>
        </div>
      </div>
      <ReturnTable />
    </div>
  );
}
