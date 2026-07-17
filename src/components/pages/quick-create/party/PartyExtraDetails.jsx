"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown,ChevronRight,} from "lucide-react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const PartyExtraDetails = () => {
  const [showRegulatory, setShowRegulatory] = useState(true);
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="mt-6 pt-4">
        <button
          type="button"
          onClick={() => setShowRegulatory(!showRegulatory)}
          className="flex items-center gap-2 text-blue-600 font-semibold uppercase"
        >
          Regulatory
          {showRegulatory ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {showRegulatory && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
            <Input label="AADHAAR NO." placeholder="Enter Aadhaar" />

            <Input label="TIN" placeholder="Enter TIN" />

            <Input label="IT PAN" placeholder="Enter PAN" />

            <Input label="WARD" placeholder="Enter Ward" />

            <Input label="CST NO." placeholder="Enter CST" />

            <Input label="LST NO." placeholder="Enter LST" />

            <Input
              label="IE CODE"
              placeholder="Enter IE Code"
              className="lg:col-span-2"
            />
          </div>
        )}
      </div>
      <div className="mt-8 pt-4">
        <button
          type="button"
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-2 text-blue-600 font-semibold uppercase"
        >
          More
          {showMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {showMore && (
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-3">
              <label className="font-semibold w-48">DEFAULT SALE TYPE</label>

              <input type="checkbox" className="toggle" />
            </div>

            <div className="flex items-center gap-3">
              <label className="font-semibold w-48">DEFAULT PURC. TYPE</label>

              <input type="checkbox" className="toggle" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <Input
                label="CONTACT PERSON"
                placeholder="Enter Contact Person"
              />

              <Input label="TEL. NO." placeholder="Enter Tel." />

              <Input label="FAX" placeholder="Enter Fax" />
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end mt-10">
        <Button variant="secondary">
          Save
          <ChevronRight size={18} />
        </Button>
      </div>
    </>
  );
};

export default PartyExtraDetails;
