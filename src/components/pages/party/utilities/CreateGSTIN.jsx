import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import React from 'react';

export default function CreateGSTIN() {
  return (
    <div className='bg-white'>
      
      <div className="bg-white border border-gray-200 rounded-sm  p-6 mb-6">
        <h2 className="text-base font-bold text-gray-700 mb-6 uppercase tracking-wider border-b pb-2">
          Master Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Input
            label="GSTIN"
            type="text"
            defaultValue="Df"
            labelClass="text-sm font-bold uppercase text-[#333]"
            placeholder="Enter GSTIN"
          />

          <Input
            label="Party Name"
            type="text"
            defaultValue=""
            labelClass="text-sm font-bold uppercase text-[#333]"
            placeholder="Enter Party Name"
          />

          <Input
            label="Parent Group"
            type="select"
            defaultValue="Expenses (Direct/Mfg.)"
            labelClass="text-sm font-bold uppercase text-[#333]"
            options={[
              { label: "Expenses (Direct/Mfg.)", value: "Expenses (Direct/Mfg.)" },
              { label: "Central-40%", value: "Central-40%" },
              { label: "Central-18%", value: "Central-18%" },
              { label: "Local-12%", value: "Local-12%" },
            ]}
          />

          <Input
            label="Type of Dealer"
            type="select"
            defaultValue="Registered"
            labelClass="text-sm font-bold uppercase text-[#333]"
            options={[
              { label: "Registered", value: "Registered" },
              { label: "Unregistered", value: "Unregistered" },
              { label: "Composition", value: "Composition" },
            ]}
          />

          <Input
            label="Address 1"
            type="text"
            defaultValue="Gvhj"
            labelClass="text-sm font-bold uppercase text-[#333]"
            placeholder="Enter Address Line 1"
          />

          <Input
            label="Address 2"
            type="text"
            defaultValue=""
            labelClass="text-sm font-bold uppercase text-[#333]"
            placeholder="Enter Address Line 2"
          />

        </div>
      </div>

      <div className=" p-4">
        <Input
          label="Parent Group for New Master"
          type="select"
          defaultValue=""
          labelClass="text-sm font-bold uppercase text-[#333]"
          options={[
            { label: "Expenses (Direct/Mfg.)", value: "Expenses (Direct/Mfg.)" },
            { label: "Central-40%", value: "Central-40%" },
            { label: "Central-18%", value: "Central-18%" },
            { label: "Local-12%", value: "Local-12%" },
          ]}
        />
      </div>
      <div className="flex justify-between p-4 items-center">
        <div className="flex gap-3">
          <Button variant='outline'>
            Add Rows
          </Button>
          <Button variant='outline'>
            Delete Rows
          </Button>
          <Button variant='outline'>
            Clear All
          </Button>
        </div>

        <div className="flex gap-3">
          <Button variant='outline'>
            Validate GSTIN
          </Button>
          <Button variant='secondary'>
            Save <span>&rarr;</span>
          </Button>
        </div>
      </div>

    </div>
  );
}