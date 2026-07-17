"use client";

import { useState, useEffect } from "react";
import OverlayModal from "@/components/common/OverlayModal";
import Card from "@/components/molecules/Card";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const initialState = {
  name: "",
  owner: "",
  gst: "",
  phone: "",
  email: "",
  state: "",
  address: "",
  status: "Active",
};

const CompanyFormModal = ({
  isOpen,
  onClose,
  company = null,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (company) {
      setFormData(company);
    } else {
      setFormData(initialState);
    }
  }, [company, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    onClose();
  };

  return (
    <OverlayModal
      isOpen={isOpen}
      onClose={onClose}
      modalClass="max-w-2xl h-full mt-4 pb-4"
    >
      <Card
        title={company ? "Edit Company" : "Add Company"}
        subtitle="Enter company information"
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            <Input
              label="Company Name"
              name="name"
              placeholder="Enter company name"
              value={formData.name}
              onChange={handleChange}
            />

            <Input
              label="Owner Name"
              name="owner"
              placeholder="Enter owner name"
              value={formData.owner}
              onChange={handleChange}
            />

            <Input
              label="GSTIN"
              name="gst"
              placeholder="Enter GST number"
              value={formData.gst}
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              name="phone"
              placeholder="Enter mobile number"
              value={formData.phone}
              onChange={handleChange}
            />

            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              label="State"
              name="state"
              placeholder="Enter state"
              value={formData.state}
              onChange={handleChange}
            />

            <div className="md:col-span-2">
              <Input
                label="Address"
                type="textarea"
                name="address"
                placeholder="Enter company address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <Input
              label="Status"
              type="select"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={[
                {
                  label: "Active",
                  value: "Active",
                },
                {
                  label: "Inactive",
                  value: "Inactive",
                },
              ]}
            />

          </div>

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">

            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="primary"
              icon={company ? "save-line" : "add-line"}
            >
              {company
                ? "Update Company"
                : "Save Company"}
            </Button>

          </div>
        </form>
      </Card>
    </OverlayModal>
  );
};

export default CompanyFormModal;