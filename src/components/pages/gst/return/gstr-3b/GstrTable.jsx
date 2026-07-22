"use client";

import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

export default function GstrTable() {
  const data = [
    {
      nature: "(a) Outward taxable supplies",
    },
    {
      nature: "(b) Outward taxable supplies (Zero Rated)",
    },
    {
      nature: "(c) Other outward supplies (Nil Rated / Exempt)",
    },
    {
      nature: "(d) Inward supplies (Reverse Charge)",
    },
    {
      nature: "(e) Non GST outward supplies",
    },
    {
      nature: "Total",
      isTotal: true,
    },
  ];

  const columns = [
    {
      label: "Nature of Supplies",
      key: "nature",
      render: (value, row) => (
        <span className={row.isTotal ? "font-semibold" : ""}>{value}</span>
      ),
    },

    {
      label: "Taxable Value",
      key: "taxable",
      render: (_, row) =>
        row.isTotal ? (
          <span className="font-semibold">2,70,921.00</span>
        ) : (
          <Input placeholder="0.00" />
        ),
    },

    {
      label: "IGST",
      key: "igst",
      render: (_, row) =>
        row.isTotal ? (
          <span className="font-semibold">0.00</span>
        ) : (
          <Input placeholder="0.00" />
        ),
    },

    {
      label: "CGST",
      key: "cgst",
      render: (_, row) =>
        row.isTotal ? (
          <span className="font-semibold">0.00</span>
        ) : (
          <Input placeholder="0.00" />
        ),
    },

    {
      label: "SGST",
      key: "sgst",
      render: (_, row) =>
        row.isTotal ? (
          <span className="font-semibold">0.00</span>
        ) : (
          <Input placeholder="0.00" />
        ),
    },

    {
      label: "CESS",
      key: "cess",
      render: (_, row) =>
        row.isTotal ? (
          <span className="font-semibold">0.00</span>
        ) : (
          <Input placeholder="0.00" />
        ),
    },
  ];

  return (
    <div className="bg-slate-100 mt-5">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <Input label="GSTIN" placeholder="33AAACI1607G2Z5" />

          <Input label="Legal Name" placeholder="INDIAN BANK" />

          <Input label="Return Period" placeholder="July 2026" />
        </div>

        <BasicTable
          columns={columns}
          data={data}
          bordered
          pagination={false}
          wrapperClassName="rounded-lg border"
        />

        <div className="flex justify-end gap-3 mt-6">
          <Button variant="outline">Reset</Button>

          <Button variant="outline">Validate</Button>

          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}
