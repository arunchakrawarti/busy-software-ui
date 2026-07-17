// config/JournalDummyData.js

export const accountOptions = [
    {
        label: "Cash Account",
        value: "Cash Account",
    },
    {
        label: "Bank Account",
        value: "Bank Account",
    },
    {
        label: "Purchase Account",
        value: "Purchase Account",
    },
    {
        label: "Sales Account",
        value: "Sales Account",
    },
    {
        label: "GST Input",
        value: "GST Input",
    },
    {
        label: "GST Output",
        value: "GST Output",
    },
    {
        label: "Salary Account",
        value: "Salary Account",
    },
];

export const statusOptions = [
    {
        label: "Draft",
        value: "Draft",
    },
    {
        label: "Posted",
        value: "Posted",
    },
    {
        label: "Cancelled",
        value: "Cancelled",
    },
];

export const defaultJournal = {
    voucherNo: "",
    date: "",
    status: "Draft",
    reference: "",
    chequeNo: "",
    preparedBy: "",
    narration: "",

    entries: [
        {
            account: "",
            debit: "",
            credit: "",
            remark: "",
        },
        {
            account: "",
            debit: "",
            credit: "",
            remark: "",
        },
    ],
};

export const journalStats = [
    {
        title: "Total Journals",
        value: "254",
        icon: "ri-book-open-line",
        color: "bg-blue-100 text-blue-600",
        change: "+12 This Month",
        positive: true,
    },

    {
        title: "Posted",
        value: "226",
        icon: "ri-checkbox-circle-line",
        color: "bg-green-100 text-green-600",
        change: "+8%",
        positive: true,
    },

    {
        title: "Draft",
        value: "18",
        icon: "ri-file-edit-line",
        color: "bg-yellow-100 text-yellow-600",
        change: "Pending",
        positive: false,
    },

    {
        title: "Today's Amount",
        value: "₹ 4,56,200",
        icon: "ri-money-rupee-circle-line",
        color: "bg-purple-100 text-purple-600",
        change: "+15%",
        positive: true,
    },
];

export const journalData = [
    {
        id: 1,
        voucherNo: "JV-1001",
        date: "2026-07-01",
        account: "Cash Account",
        reference: "REF-001",
        amount: "25,000",
        status: "Posted",
        narration: "Cash received from customer.",

        entries: [
            {
                account: "Cash Account",
                debit: "25000",
                credit: "",
                remark: "Cash Received",
            },
            {
                account: "Sales Account",
                debit: "",
                credit: "25000",
                remark: "Sales Entry",
            },
        ],
    },

    {
        id: 2,
        voucherNo: "JV-1002",
        date: "2026-07-02",
        account: "Bank Account",
        reference: "REF-002",
        amount: "12,500",
        status: "Draft",
        narration: "Bank payment.",

        entries: [
            {
                account: "Purchase Account",
                debit: "12500",
                credit: "",
                remark: "",
            },
            {
                account: "Bank Account",
                debit: "",
                credit: "12500",
                remark: "",
            },
        ],
    },

    {
        id: 3,
        voucherNo: "JV-1003",
        date: "2026-07-02",
        account: "GST Input",
        reference: "REF-003",
        amount: "5,600",
        status: "Posted",
        narration: "GST Adjustment.",

        entries: [
            {
                account: "GST Input",
                debit: "5600",
                credit: "",
                remark: "",
            },
            {
                account: "Purchase Account",
                debit: "",
                credit: "5600",
                remark: "",
            },
        ],
    },

    {
        id: 4,
        voucherNo: "JV-1004",
        date: "2026-07-03",
        account: "Salary Account",
        reference: "REF-004",
        amount: "80,000",
        status: "Posted",
        narration: "Salary Paid.",

        entries: [
            {
                account: "Salary Account",
                debit: "80000",
                credit: "",
                remark: "",
            },
            {
                account: "Bank Account",
                debit: "",
                credit: "80000",
                remark: "",
            },
        ],
    },

    {
        id: 5,
        voucherNo: "JV-1005",
        date: "2026-07-03",
        account: "Cash Account",
        reference: "REF-005",
        amount: "18,750",
        status: "Cancelled",
        narration: "Cancelled Voucher.",

        entries: [
            {
                account: "Cash Account",
                debit: "18750",
                credit: "",
                remark: "",
            },
            {
                account: "Sales Account",
                debit: "",
                credit: "18750",
                remark: "",
            },
        ],
    },
];