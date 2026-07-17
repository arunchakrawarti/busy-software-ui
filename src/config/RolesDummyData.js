export const defaultRole = {
    id: null,
    roleName: "",
    description: "",
    status: "Active",
    permissions: [],
};

export const rolesData = [
    {
        id: 1,
        roleName: "Admin",
        description: "Full access to all system features",
        status: "Active",
        permissions: ["All"],
        usersCount: 2,
    },
    {
        id: 2,
        roleName: "Manager",
        description: "Access to reporting and voucher approvals",
        status: "Active",
        permissions: ["Reports", "Vouchers", "Inventory"],
        usersCount: 5,
    },
    {
        id: 3,
        roleName: "Data Entry Operator",
        description: "Can enter vouchers but cannot approve",
        status: "Active",
        permissions: ["Vouchers Create", "Inventory View"],
        usersCount: 12,
    },
    {
        id: 4,
        roleName: "Auditor",
        description: "Read-only access to all reports",
        status: "Inactive",
        permissions: ["Reports View"],
        usersCount: 1,
    },
];
