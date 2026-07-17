export const statusOptions = [
    {
        label: "Posted",
        value: "Posted",
    },
    {
        label: "Draft",
        value: "Draft",
    },
    {
        label: "Cancelled",
        value: "Cancelled",
    },
];

export const accountOptions = [
    {
        label: "Cash",
        value: "Cash",
    },
    {
        label: "HDFC Bank",
        value: "HDFC Bank",
    },
    {
        label: "ICICI Bank",
        value: "ICICI Bank",
    },
    {
        label: "Axis Bank",
        value: "Axis Bank",
    },
    {
        label: "SBI Bank",
        value: "SBI Bank",
    },
];

export const defaultContra = {
    voucherNo: "",
    date: new Date().toISOString().split("T")[0],
    reference: "",
    narration: "",
    status: "Posted",

    entries: [
        {
            fromAccount: "",
            toAccount: "",
            amount: "",
            remark: "",
        },
    ],
};

export const contraData = [
    {
        id: 1,
        voucherNo: "CON-0001",
        date: "2026-07-04",
        reference: "ATM Withdrawal",
        narration: "Cash withdrawn from HDFC Bank",
        status: "Posted",

        account: "HDFC Bank",

        amount: 25000,

        entries: [
            {
                fromAccount: "HDFC Bank",
                toAccount: "Cash",
                amount: 25000,
                remark: "Cash Withdrawal",
            },
        ],
    },

    {
        id: 2,
        voucherNo: "CON-0002",
        date: "2026-07-03",
        reference: "Cash Deposit",
        narration: "Cash deposited into ICICI Bank",
        status: "Posted",

        account: "Cash",

        amount: 18000,

        entries: [
            {
                fromAccount: "Cash",
                toAccount: "ICICI Bank",
                amount: 18000,
                remark: "Cash Deposit",
            },
        ],
    },

    {
        id: 3,
        voucherNo: "CON-0003",
        date: "2026-07-02",
        reference: "Bank Transfer",
        narration: "Transfer from Axis to SBI",
        status: "Draft",

        account: "Axis Bank",

        amount: 60000,

        entries: [
            {
                fromAccount: "Axis Bank",
                toAccount: "SBI Bank",
                amount: 60000,
                remark: "Fund Transfer",
            },
        ],
    },

    {
        id: 4,
        voucherNo: "CON-0004",
        date: "2026-07-01",
        reference: "Office Cash",
        narration: "Cash transferred to office cash account",
        status: "Posted",

        account: "HDFC Bank",

        amount: 12000,

        entries: [
            {
                fromAccount: "HDFC Bank",
                toAccount: "Cash",
                amount: 12000,
                remark: "Office Expenses",
            },
        ],
    },

    {
        id: 5,
        voucherNo: "CON-0005",
        date: "2026-06-30",
        reference: "Cash Deposit",
        narration: "Cash deposited to SBI",
        status: "Cancelled",

        account: "Cash",

        amount: 35000,

        entries: [
            {
                fromAccount: "Cash",
                toAccount: "SBI Bank",
                amount: 35000,
                remark: "Cancelled Entry",
            },
        ],
    },
];