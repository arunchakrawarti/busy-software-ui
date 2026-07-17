export const gstTypes = [
    {
        label: "Goods",
        value: "Goods",
    },
    {
        label: "Services",
        value: "Services",
    },
];

export const statusOptions = [
    {
        label: "Active",
        value: "Active",
    },
    {
        label: "Inactive",
        value: "Inactive",
    },
];

export const gstMasters = [
    {
        id: 1,
        name: "GST 0%",
        cgst: 0,
        sgst: 0,
        igst: 0,
        type: "Goods",
        status: "Active",
    },
    {
        id: 2,
        name: "GST 5%",
        cgst: 2.5,
        sgst: 2.5,
        igst: 5,
        type: "Goods",
        status: "Active",
    },
    {
        id: 3,
        name: "GST 12%",
        cgst: 6,
        sgst: 6,
        igst: 12,
        type: "Goods",
        status: "Active",
    },
    {
        id: 4,
        name: "GST 18%",
        cgst: 9,
        sgst: 9,
        igst: 18,
        type: "Goods",
        status: "Active",
    },
    {
        id: 5,
        name: "GST 28%",
        cgst: 14,
        sgst: 14,
        igst: 28,
        type: "Goods",
        status: "Active",
    },
    {
        id: 6,
        name: "Service GST 18%",
        cgst: 9,
        sgst: 9,
        igst: 18,
        type: "Services",
        status: "Active",
    },
    {
        id: 7,
        name: "Exempt",
        cgst: 0,
        sgst: 0,
        igst: 0,
        type: "Services",
        status: "Inactive",
    },
];