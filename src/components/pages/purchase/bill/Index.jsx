"use client";
import { useState } from "react";
import {  ChevronDown } from "lucide-react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import InvoiceTable from "./InvoiceTable";
import PendingTable from "./PendingTable";
import OverdueTable from "./OverdueTable";
import AccTable from "./AccTable";
import HoldTable from "./HoldTable";


export default function MainBill() {
  const tabs = [
    {
      label: "All(2)",
      component: <InvoiceTable/>,
    },
    {
      label: "Pending(0)",
      component: <PendingTable/>,
    },
    {
      label: "Overdue(0)",
      component: <OverdueTable/>,
    },
    {
      label: "On Acc(0)",
      component: <AccTable/>,
    },
    {
      label: "Hold(0)",
      component: <HoldTable/>,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const activeContent = tabs.find((tab) => tab.label === activeTab)?.component;

  return (
    <div>
      <div className="mb-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="bg-gray-100 rounded-xl p-1 flex flex-wrap gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === tab.label
                  ? "bg-white border border-dashed border-gray-400 shadow-sm"
                  : "text-gray-600 hover:bg-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <div className="w-full lg:w-72">
            <Input
              placeholder="Search..."
              icon="ri-search-line" 
              className="w-full h-11 border rounded-xl"
            />
          </div>

          <Button
            variant="outline"
            icon="calendar-todo-line"
            className="border rounded-xl px-4 h-11 flex items-center gap-2"
          >
            Last 30 Days
            <ChevronDown size={16} className="ml-1" />
          </Button>

          <Button
            variant="outline"
            icon="menu-line"
            className="w-11 h-11 border rounded-xl"
          />
        </div>
      </div>

      {activeContent}
    </div>
  );
}
