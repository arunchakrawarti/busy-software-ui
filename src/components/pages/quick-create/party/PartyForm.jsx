import React from "react";
import Input from "@/components/common/Input";
import PartyExtraDetails from "./PartyExtraDetails";

const PartyForm = () => {
  return (
    <div className="bg-white rounded-md p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex gap-3 items-end">
          <Input label="GSTIN" placeholder="Enter GSTIN" />

          <button className="h-11 px-6 border rounded-md font-medium hover:bg-gray-100">
            Validate
          </button>
        </div>

        <Input
          label="GROUP *"
          type="select"
          defaultValue="Sundry Debtors"
          options={[
            {
              label: "Sundry Debtors",
              value: "Sundry Debtors",
            },
          ]}
        />

        <Input label="ALIAS" placeholder="Enter alias" />
        <Input label="PIN CODE" placeholder="Enter pin code" />

        <div className="lg:col-span-2 w-full">
          <Input
            label="ADDRESS"
            type="textarea"
            placeholder="Enter complete address"
            className="w-full"
          />
        </div>

        <Input
          label="COUNTRY"
          type="select"
          defaultValue="India"
          options={[
            {
              label: "India",
              value: "India",
            },
          ]}
        />

        <Input
          label="TYPE OF DEALER"
          type="select"
          defaultValue="Registered"
          options={[
            {
              label: "Registered",
              value: "Registered",
            },
          ]}
        />

        <Input label="TRANSPORT" type="select" options={[]} />

        <div className="flex items-center gap-2 mt-6">
          <label className="text-sm font-semibold">BILL BY BILL</label>

          <input type="checkbox" className="toggle" defaultChecked />
        </div>

        <Input label="CREDIT DAYS (SALE)" placeholder="Enter Credit Days" />

        <Input label="BANK NAME" placeholder="Enter bank name" />

        <Input label="A/C NO." placeholder="Enter A/C No." />

        <Input label="NAME *" placeholder="Enter name" />

        <Input label="PRINT NAME" placeholder="Enter print name" />

        <Input label="MOBILE" placeholder="Enter mobile" />

        <Input label="WHATSAPP" placeholder="Enter WhatsApp" />

        <Input label="EMAIL" placeholder="Enter email" />

        <Input
          label="STATE"
          type="select"
          defaultValue="Tamil Nadu"
          options={[
            {
              label: "Tamil Nadu",
              value: "Tamil Nadu",
            },
          ]}
        />

        <Input label="STATION" placeholder="Enter station" />

        <Input
          label="FILLING FREQ."
          type="select"
          defaultValue="Not Known"
          options={[
            {
              label: "Not Known",
              value: "Not Known",
            },
          ]}
        />

        <div className="flex gap-3 items-end">
          <Input label="DISTANCE" placeholder="Enter distance" />

          <button className="h-11 whitespace-nowrap px-5 border rounded-md font-medium hover:bg-gray-100">
            Check Distance
          </button>
        </div>

        <Input label="CREDIT DAYS (PURC.)" placeholder="Enter Credit Days" />

        <Input label="IFSC CODE" placeholder="Enter IFSC Code" />

        <Input label="SWIFT CODE" placeholder="Enter Swift code" />

        <Input label="OP. BAL." defaultValue="0.00" />

        <Input
          label="DR./CR."
          type="select"
          defaultValue="D"
          options={[
            {
              label: "D",
              value: "D",
            },
            {
              label: "C",
              value: "C",
            },
          ]}
        />
      </div>
      <PartyExtraDetails />
    </div>
  );
};

export default PartyForm;
