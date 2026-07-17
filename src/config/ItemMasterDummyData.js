export const itemTypes = [
    { value: "goods", label: "Goods" },
    { value: "service", label: "Service" },
];

export const unitOptions = [
    { value: "pcs", label: "PCS" },
    { value: "kg", label: "KG" },
    { value: "ltr", label: "LTR" },
];

export const items = [
    {
        id: 1,
        name: "Laptop Dell i5",
        type: "goods",
        unit: "pcs",
        hsn: "8471",
        gst: 18,
        stockEnabled: true,
        openingStock: 10,
        rate: 55000,
        status: "Active",
        createdAt: "2026-01-10",
    },
    {
        id: 2,
        name: "AMC Service",
        type: "service",
        unit: "pcs",
        hsn: "9983",
        gst: 18,
        stockEnabled: false,
        openingStock: 0,
        rate: 12000,
        status: "Active",
        createdAt: "2026-02-12",
    },
];