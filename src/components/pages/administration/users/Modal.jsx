"use client";

import { useEffect } from "react";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useForm } from "@/components/hooks/useForm";

const Modal = ({
    initialData,
    onSave,
    onClose,
}) => {
    const {
        formData,
        setFormData,
        handleChange,
    } = useForm({
        defaultValues: initialData,
    });

    const values = formData;

    useEffect(() => {
        setFormData(initialData);
    }, [initialData, setFormData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(values);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col rounded-xl bg-white"
        >
            <div className="border-b border-gray-200 px-6 py-5">
                <h2 className="text-2xl font-semibold text-slate-800">
                    {initialData?.id ? "Edit User" : "Add User"}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    Enter user information and assign the appropriate role.
                </p>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Input
                        label="User Code"
                        name="userCode"
                        placeholder="Enter user code"
                        value={values.userCode}
                        onChange={handleChange}
                    />

                    <Input
                        label="Full Name"
                        name="fullName"
                        placeholder="Enter full name"
                        value={values.fullName}
                        onChange={handleChange}
                    />

                    <Input
                        label="Username"
                        name="username"
                        placeholder="Enter username"
                        value={values.username}
                        onChange={handleChange}
                    />

                    <Input
                        type="email"
                        label="Email"
                        name="email"
                        placeholder="Enter email address"
                        value={values.email}
                        onChange={handleChange}
                    />

                    <Input
                        label="Mobile"
                        name="mobile"
                        placeholder="Enter mobile number"
                        value={values.mobile}
                        onChange={handleChange}
                    />

                    <Input
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Enter password"
                        value={values.password}
                        onChange={handleChange}
                    />

                    <Input
                        type="select"
                        label="Role"
                        name="role"
                        value={values.role}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Select Role",
                                value: "",
                            },
                            {
                                label: "Administrator",
                                value: "Administrator",
                            },
                            {
                                label: "Accountant",
                                value: "Accountant",
                            },
                            {
                                label: "Sales Manager",
                                value: "Sales Manager",
                            },
                            {
                                label: "Purchase Officer",
                                value: "Purchase Officer",
                            },
                            {
                                label: "Inventory Executive",
                                value: "Inventory Executive",
                            },
                        ]}
                    />

                    <Input
                        type="select"
                        label="Department"
                        name="department"
                        value={values.department}
                        onChange={handleChange}
                        options={[
                            {
                                label: "Select Department",
                                value: "",
                            },
                            {
                                label: "Administration",
                                value: "Administration",
                            },
                            {
                                label: "Accounts",
                                value: "Accounts",
                            },
                            {
                                label: "Sales",
                                value: "Sales",
                            },
                            {
                                label: "Purchase",
                                value: "Purchase",
                            },
                            {
                                label: "Inventory",
                                value: "Inventory",
                            },
                        ]}
                    />

                    <Input
                        label="Designation"
                        name="designation"
                        placeholder="Enter designation"
                        value={values.designation}
                        onChange={handleChange}
                    />

                    <Input
                        type="select"
                        label="Status"
                        name="status"
                        value={values.status}
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
                            {
                                label: "Suspended",
                                value: "Suspended",
                            },
                        ]}
                    />
                </div>

                <div className="mt-5">
                    <Input
                        type="textarea"
                        rows={5}
                        label="Remarks"
                        name="remarks"
                        placeholder="Enter remarks"
                        value={values.remarks}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">
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
                    icon="save-line"
                >
                    Save User
                </Button>
            </div>
        </form>
    );
};

export default Modal;