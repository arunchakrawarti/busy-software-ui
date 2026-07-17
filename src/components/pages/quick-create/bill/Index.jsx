import Input from "@/components/common/Input";
import React from "react";
import InvoiceSummary from "./InvoiceSummary";
import TaxSummary from "./TaxSummary";
import InvoiceTable from "./InvoiceTable";

const Mainbill = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-end gap-5 bg-white p-3 rounded-md">
        <Input
          label="SERIES"
          type="select"
          defaultValue="Main"
          options={[
            { label: "Main", value: "Main" },
            { label: "Sales", value: "Sales" },
            { label: "Purchase", value: "Purchase" },
          ]}
        />
        <Input
          label="VCH NO"
          defaultValue="1"
        />
        <Input
          label="DATE"
          type="date"
          defaultValue="2026-07-16"
        />
      </div>
      <InvoiceTable/>
      <InvoiceSummary/>
      <TaxSummary/>
    </div>
  );
};

export default Mainbill;
