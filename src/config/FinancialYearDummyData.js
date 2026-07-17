export const companyOptions = [
    {
        value: "abc-pvt-ltd",
        label: "ABC Pvt Ltd",
    },
    {
        value: "xyz-industries",
        label: "XYZ Industries",
    },
    {
        value: "busy-software",
        label: "BUSY Software",
    },
];

export const statusOptions = [
    {
        value: "Active",
        label: "Active",
    },
    {
        value: "Inactive",
        label: "Inactive",
    },
];

export const financialYears = [
    {
        id: 1,
        company: "ABC Pvt Ltd",
        financialYear: "2025-2026",
        fromDate: "01 Apr 2025",
        toDate: "31 Mar 2026",
        current: true,
        status: "Active",
        createdAt: "12 Apr 2025",
        remarks: "Default Financial Year",
    },
    {
        id: 2,
        company: "XYZ Industries",
        financialYear: "2024-2025",
        fromDate: "01 Apr 2024",
        toDate: "31 Mar 2025",
        current: false,
        status: "Inactive",
        createdAt: "18 Apr 2024",
        remarks: "",
    },
    {
        id: 3,
        company: "BUSY Software",
        financialYear: "2025-2026",
        fromDate: "01 Apr 2025",
        toDate: "31 Mar 2026",
        current: true,
        status: "Active",
        createdAt: "01 Apr 2025",
        remarks: "",
    },
];

export const defaultFinancialYear = {
    company: "",
    financialYear: "",
    fromDate: "",
    toDate: "",
    current: false,
    status: "Active",
    remarks: "",
};