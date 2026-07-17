export const dashboardStats = [
  {
    id: 1,
    title: "Today's Sales",
    value: "₹1,48,250",
    change: "+12.6%",
    positive: true,
    icon: "ri-shopping-cart-2-line",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Today's Purchase",
    value: "₹78,430",
    change: "+5.8%",
    positive: true,
    icon: "ri-shopping-bag-3-line",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Receivable",
    value: "₹4,85,200",
    change: "+2.1%",
    positive: true,
    icon: "ri-wallet-3-line",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 4,
    title: "Payable",
    value: "₹2,15,500",
    change: "-1.5%",
    positive: false,
    icon: "ri-bank-card-line",
    color: "bg-red-100 text-red-600",
  },
];

export const quickActions = [
  {
    title: "Sales Voucher",
    icon: "ri-shopping-cart-2-line",
  },
  {
    title: "Purchase Voucher",
    icon: "ri-shopping-bag-3-line",
  },
  {
    title: "Payment",
    icon: "ri-bank-card-line",
  },
  {
    title: "Receipt",
    icon: "ri-money-rupee-circle-line",
  },
  {
    title: "Journal",
    icon: "ri-book-open-line",
  },
  {
    title: "Account Master",
    icon: "ri-contacts-book-2-line",
  },
  {
    title: "Item Master",
    icon: "ri-box-3-line",
  },
  {
    title: "GST Report",
    icon: "ri-percent-line",
  },
];

export const recentTransactions = [
  {
    voucher: "SAL-1001",
    date: "30 Jun 2026",
    party: "ABC Traders",
    type: "Sales",
    amount: "₹25,000",
    status: "Posted",
  },
  {
    voucher: "PUR-1005",
    date: "30 Jun 2026",
    party: "Sharma Suppliers",
    type: "Purchase",
    amount: "₹18,450",
    status: "Pending",
  },
  {
    voucher: "PAY-1012",
    date: "29 Jun 2026",
    party: "Electricity Board",
    type: "Payment",
    amount: "₹9,800",
    status: "Posted",
  },
  {
    voucher: "REC-1015",
    date: "29 Jun 2026",
    party: "XYZ Industries",
    type: "Receipt",
    amount: "₹42,500",
    status: "Posted",
  },
  {
    voucher: "JV-1021",
    date: "28 Jun 2026",
    party: "Opening Entry",
    type: "Journal",
    amount: "₹1,20,000",
    status: "Posted",
  },
];

export const inventorySummary = [
  {
    title: "Total Items",
    value: "1,245",
    icon: "ri-box-3-line",
  },
  {
    title: "Low Stock",
    value: "34",
    icon: "ri-error-warning-line",
  },
  {
    title: "Out Of Stock",
    value: "12",
    icon: "ri-close-circle-line",
  },
  {
    title: "Warehouses",
    value: "5",
    icon: "ri-store-2-line",
  },
];

export const outstandingSummary = [
  {
    title: "Receivable",
    value: "₹4,85,200",
    color: "text-green-600",
  },
  {
    title: "Payable",
    value: "₹2,15,500",
    color: "text-red-600",
  },
  {
    title: "Net Balance",
    value: "₹2,69,700",
    color: "text-blue-600",
  },
];

export const financialProgress = [
  {
    title: "Sales Target",
    value: 72,
  },
  {
    title: "Purchase Budget",
    value: 56,
  },
  {
    title: "Expense",
    value: 41,
  },
];