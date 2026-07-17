"use client";
import Input from "@/components/common/Input";

const InvoiceTable = () => {
  return (
    <div className="mt-5 space-y-5">
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Input
            label="PARTY"
            type="select"
            defaultValue="Cash"
            labelClass="text-sm font-bold uppercase text-[#333]"
            options={[
              { label: "Cash", value: "Cash" },
              { label: "Customer A", value: "Customer A" },
              { label: "Customer B", value: "Customer B" },
            ]}
          />

          <Input
            label="SALE TYPE"
            type="select"
            defaultValue="Central-40%"
            labelClass="text-sm font-bold uppercase text-[#333]"
            options={[
              { label: "Central-40%", value: "Central-40%" },
              { label: "Central-18%", value: "Central-18%" },
              { label: "Local-12%", value: "Local-12%" },
            ]}
          />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-3">
        <Input
          label="ITEM NAME"
          type="select"
          defaultValue="Bjnj"
          options={[
            { label: "Bjnj", value: "Bjnj" },
            { label: "Ring", value: "Ring" },
            { label: "Chain", value: "Chain" },
            { label: "Necklace", value: "Necklace" },
          ]}
        />

        <Input label="QTY." defaultValue="56.00" />

        <Input
          label="UNIT"
          type="select"
          defaultValue="Gms."
          options={[
            { label: "Gms.", value: "Gms." },
            { label: "Kg", value: "Kg" },
            { label: "Pcs", value: "Pcs" },
          ]}
        />

        <Input label="PRICE" defaultValue="4655.00" />

        <Input label="DISCOUNT" defaultValue="0.00" />

        <Input label="TOTAL DISCOUNT" defaultValue="0.00" />

        <Input label="AMOUNT" defaultValue="2,60,680.00" />
      </div>
    </div>
  );
};

export default InvoiceTable;
