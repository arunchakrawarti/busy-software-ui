"use client";
import BasicTable from "@/components/common/BasicTable";
import Input from "@/components/common/Input";
import Switch from "@/components/common/Switch";
import React from "react";

export default function TaxCategory() {
  const columns = [
    { label: "#", key: "index" },
    { label: "W.E.F", key: "wef" },
    { label: "GST RATE", key: "gstRateTable" },
    { label: "TAX TYPE", key: "taxTypeTable" },
    { label: "PRICE BASE...", key: "priceBased" },
    { label: "BASIS", key: "basis" },
    { label: "OPERATOR", key: "operator" },
    { label: "PRICE", key: "price" },
    { label: "GST RATE", key: "gstRateTable2" },
    { label: "TAX TYPE", key: "taxTypeTable2" },
  ];

  const tableData = [
    {
      index: 1,
      wef: "01-04-2026",
      gstRateTable: "18.00%",
      taxTypeTable: "Regular",
      priceBased: "No",
      basis: "Net Price",
      operator: ">=",
      price: "1000.00",
      gstRateTable2: "18.00%",
      taxTypeTable2: "Regular",
    },
    {
      index: 2,
      wef: "01-07-2026",
      gstRateTable: "12.00%",
      taxTypeTable: "Regular",
      priceBased: "Yes",
      basis: "MRP",
      operator: "<",
      price: "500.00",
      gstRateTable2: "5.00%",
      taxTypeTable2: "Concessional",
    }
  ];

  const commonLabelClass = "text-xs font-bold uppercase tracking-wider text-slate-700 min-w-[120px] sm:w-32 flex-shrink-0";

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-[#f8f9fa] text-slate-700 font-sans antialiased">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mb-8">
        
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className={commonLabelClass}>
              NAME <span className="text-red-500">*</span>
            </label>
            <div className="w-full bg-white rounded-lg shadow-sm">
              <Input
                type="text"
                placeholder="Enter name"
                className="w-full border-blue-400 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className={commonLabelClass}>GST RATE</label>
            <div className="w-full bg-white rounded-lg shadow-sm">
              <Input
                type="text"
                placeholder="0.00"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
            <label className={commonLabelClass}>TAX ON MRP</label>
            <div className="h-9 flex items-center">
              <Switch dynamicBg="bg-blue-500" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className={commonLabelClass}>PRICE BASED TAX</label>
            <div className="h-9 flex items-center">
              <Switch dynamicBg="bg-blue-500" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className={commonLabelClass}>TYPE</label>
            <div className="w-full bg-white rounded-lg shadow-sm">
              <Input
                type="select"
                defaultValue="Enter type"
                options={[{ label: "Enter type", value: "Enter type" }]}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className={commonLabelClass}>TAX TYPE</label>
            <div className="w-full bg-white rounded-lg shadow-sm">
              <Input
                type="select"
                defaultValue="Select zero tax type"
                options={[{ label: "Select zero tax type", value: "Select zero tax type" }]}
              />
            </div>
          </div>
        </div>

      </div>

      <div className="mt-6">
        <h3 className="text-sm font-bold text-slate-800 mb-4 tracking-wide">
          Change in Tax Rates
        </h3>
        
        <div className="w-full overflow-hidden bg-white border border-slate-200 rounded-xl shadow-sm">
          <BasicTable
            columns={columns}
            data={tableData}
            pagination={false}
            bordered={true}
            theadClassName="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-50"
            wrapperClassName="overflow-x-auto w-full max-h-[350px]"
          />
        </div>
      </div>

    </div>
  );
}