export const statusOptions = [
    {
        value: "Pending",
        label: "Pending",
    },
    {
        value: "Completed",
        label: "Completed",
    },
];

export const vendors = [
    {
        value: "ABC Traders",
        label: "ABC Traders",
    },
    {
        value: "Sharma Suppliers",
        label: "Sharma Suppliers",
    },
];

export const purchases = [
    {
        id: 1,
        voucherNo: "PUR-1001",
        vendor: "ABC Traders",
        billNo: "B-4578",
        amount: "45000",
        gst: "8100",
        date: "2026-07-01",
        status: "Completed",
    },
    {
        id: 2,
        voucherNo: "PUR-1002",
        vendor: "Sharma Suppliers",
        billNo: "B-4579",
        amount: "22000",
        gst: "3960",
        date: "2026-07-02",
        status: "Pending",
    },
];

export const defaultPurchase = {
    voucherNo: "",
    vendor: "",
    billNo: "",
    amount: "",
    gst: "",
    date: "",
    status: "Pending",
};

export const purchaseStats = [
    {
        title: "Total Purchase",
        value: "₹6,70,000",
        change: "+14%",
        positive: true,
        color: "bg-blue-100 text-blue-600",
        icon: "ri-shopping-cart-2-line",
    },
    {
        title: "Pending Bills",
        value: "18",
        change: "+3",
        positive: false,
        color: "bg-orange-100 text-orange-600",
        icon: "ri-file-list-3-line",
    },
    {
        title: "GST Paid",
        value: "₹72,000",
        change: "+9%",
        positive: true,
        color: "bg-green-100 text-green-600",
        icon: "ri-percent-line",
    },
    {
        title: "Suppliers",
        value: "42",
        change: "+5",
        positive: true,
        color: "bg-purple-100 text-purple-600",
        icon: "ri-user-3-line",
    },
];

