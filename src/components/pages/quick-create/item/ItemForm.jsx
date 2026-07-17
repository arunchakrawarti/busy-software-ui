import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import PricingSection from "./PricingSection";
import MoreSection from "./MoreSection";

export default function ItemForm() {
  return (
    <div>
      <div className="bg-white rounded-lg p-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Input label="NAME *" placeholder="Enter item name" />

        <Input
          label="UNIT *"
          type="select"
          options={[{ label: "Select unit", value: "" }]}
        />

        <Input
          label="GROUP *"
          type="select"
          options={[{ label: "Select group", value: "" }]}
        />

        <Input label="ALIAS" placeholder="Enter alias" />

        <Input label="PRINT NAME" placeholder="Enter print name" />

        <Input label="SALE PRICE" defaultValue="0.00" />

        <Input label="PURC. PRICE" defaultValue="0.00" />

        <Input label="MRP (MAIN)" defaultValue="0.00" />

        <Input label="MIN. SALE PRICE" defaultValue="0.00" />

        <Input label="SELF-VAL" defaultValue="0.00" />

        <Input
          label="TAX CAT *"
          type="select"
          options={[{ label: "Select tax category", value: "" }]}
        />

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">HSN / SAC</label>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter HSN code"
              className="w-full sm:flex-1 h-11 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />

            <Button variant="outline" className="h-11 w-full sm:w-auto px-4">
              ...
            </Button>

            <Button variant="outline" className="h-11 w-full sm:w-auto px-5">
              Validate
            </Button>

            <Button variant="outline" className="h-11 w-full sm:w-auto px-5">
              Search
            </Button>
          </div>
        </div>

        <Input label="OP. QTY" defaultValue="0.00" />

        <Input label="OP. VALUE" defaultValue="0.00" />

        <div className="lg:col-span-2">
          <Input
            label="ITEM DESC"
            type="textarea"
            placeholder="Enter item description..."
          />
        </div>
      </div>
      <PricingSection />
      <MoreSection />
    </div>
  );
}
