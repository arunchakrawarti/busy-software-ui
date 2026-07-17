import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";
import TransportTable from "./TrnasportTable";

const TransportReport = () => {
  return (
    <div>
      <div className="w-full bg-white border border-slate-200 rounded-lg px-5 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-400 font-medium">Mode</span>
          <span className="text-slate-800 font-bold">Data Wise</span>
        </div>

        <Button
          variant="outline"
          icon="filter-3-line"
          className="w-10 h-10 border border-slate-200 rounded-xl flex items-center justify-center p-0 text-slate-500 hover:bg-slate-50"
        />
      </div>
      <div className="grid mt-5 bg-white p-3 rounded-lg grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        <Input
          label="SERIES"
          type="select"
          defaultValue="all"
          options={[
            { label: "<<-ALL->>", value: "all" },
            { label: "Main", value: "main" },
          ]}
          className="w-full h-11"
        />

        <Input
          label="FROM"
          type="date"
          defaultValue="2026-04-01"
          className="w-full h-11"
        />

        <Input
          label="TO"
          type="date"
          defaultValue="2026-07-17"
          className="w-full h-11"
        />

        <Input
          label="VOUCHER TYPE"
          type="select"
          defaultValue="Sales"
          options={[
            { label: "Sales", value: "Sales" },
            { label: "Purchase", value: "Purchase" },
          ]}
          className="w-full h-11"
        />
      </div>
      <TransportTable />
    </div>
  );
};

export default TransportReport;
