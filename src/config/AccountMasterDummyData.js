export const accountTypes = [
    { value: "customer", label: "Customer" },
    { value: "supplier", label: "Supplier" },
    { value: "both", label: "Both" },
];

export const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
];

export const accounts = [
    {
        id: 1,
        name: "Rahul Traders",
        type: "customer",
        phone: "9876543210",
        email: "rahul@traders.com",
        city: "Delhi",
        status: "Active",
        createdAt: "2025-01-10",
    },
    {
        id: 2,
        name: "Sharma Suppliers",
        type: "supplier",
        phone: "9123456780",
        email: "sharma@supply.com",
        city: "Noida",
        status: "Inactive",
        createdAt: "2025-02-15",
    },
];

export const defaultAccount = {
    name: "",
    type: "",
    phone: "",
    email: "",
    city: "",
    status: "Active",
};