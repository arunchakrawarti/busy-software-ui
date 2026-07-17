// export const SideBarData = [
//   {
//     section: "DASHBOARD",
//     items: [
//       {
//         title: "Dashboard",
//         icon: "ri-dashboard-line",
//         link: "/",
//       },
//     ],
//   },

//   {
//     section: "COMPANY",
//     items: [
//       {
//         title: "Company",
//         icon: "ri-building-2-line",
//         link: "/company",
//       },
//       {
//         title: "Financial Year",
//         icon: "ri-calendar-2-line",
//         link: "/financial-year",
//       },
//     ],
//   },

//   {
//     section: "MASTERS",
//     items: [
//       {
//         title: "Account Master",
//         icon: "ri-contacts-book-2-line",
//         link: "/masters/accounts",
//       },
//       {
//         title: "Item Master",
//         icon: "ri-box-3-line",
//         link: "/masters/items",
//       },
//       {
//         title: "Unit Master",
//         icon: "ri-ruler-line",
//         link: "/masters/units",
//       },
//       {
//         title: "GST Master",
//         icon: "ri-percent-line",
//         link: "/masters/gst",
//       },
//       {
//         title: "Warehouse",
//         icon: "ri-store-2-line",
//         link: "/masters/warehouse",
//       },
//     ],
//   },

//   {
//     section: "VOUCHERS",
//     items: [
//       {
//         title: "Sales",
//         icon: "ri-shopping-cart-2-line",
//         link: "/vouchers/sales",
//       },
//       {
//         title: "Purchase",
//         icon: "ri-shopping-bag-3-line",
//         link: "/vouchers/purchase",
//       },
//       {
//         title: "Payment",
//         icon: "ri-bank-card-line",
//         link: "/vouchers/payment",
//       },
//       {
//         title: "Receipt",
//         icon: "ri-money-rupee-circle-line",
//         link: "/vouchers/receipt",
//       },
//       {
//         title: "Journal",
//         icon: "ri-book-open-line",
//         link: "/vouchers/journal",
//       },
//       {
//         title: "Contra",
//         icon: "ri-arrow-left-right-line",
//         link: "/vouchers/contra",
//       },
//       {
//         title: "Debit Note",
//         icon: "ri-file-reduce-line",
//         link: "/vouchers/debit-note",
//       },
//       {
//         title: "Credit Note",
//         icon: "ri-file-add-line",
//         link: "/vouchers/credit-note",
//       },
//     ],
//   },

//   {
//     section: "INVENTORY",
//     items: [
//       {
//         title: "Stock",
//         icon: "ri-stack-line",
//         link: "/inventory/stock",
//       },
//       {
//         title: "Stock Journal",
//         icon: "ri-file-list-3-line",
//         link: "/inventory/stock-journal",
//       },
//       {
//         title: "Material Issue",
//         icon: "ri-arrow-up-circle-line",
//         link: "/inventory/material-issue",
//       },
//       {
//         title: "Material Receive",
//         icon: "ri-arrow-down-circle-line",
//         link: "/inventory/material-receive",
//       },
//     ],
//   },

//   {
//     section: "REPORTS",
//     items: [
//       {
//         title: "Ledger",
//         icon: "ri-book-2-line",
//         link: "/reports/ledger",
//       },
//       {
//         title: "Trial Balance",
//         icon: "ri-scales-3-line",
//         link: "/reports/trial-balance",
//       },
//       {
//         title: "Profit & Loss",
//         icon: "ri-line-chart-line",
//         link: "/reports/profit-loss",
//       },
//       {
//         title: "Balance Sheet",
//         icon: "ri-file-chart-line",
//         link: "/reports/balance-sheet",
//       },
//       {
//         title: "GST Reports",
//         icon: "ri-percent-line",
//         link: "/reports/gst",
//       },
//       {
//         title: "Stock Reports",
//         icon: "ri-bar-chart-box-line",
//         link: "/reports/stock",
//       },
//       {
//         title: "Outstanding",
//         icon: "ri-time-line",
//         link: "/reports/outstanding",
//       },
//     ],
//   },

//   {
//     section: "ADMINISTRATION",
//     items: [
//       {
//         title: "Users",
//         icon: "ri-user-settings-line",
//         link: "/administration/users",
//       },
//       {
//         title: "Roles & Permissions",
//         icon: "ri-shield-user-line",
//         link: "/administration/roles",
//       },
//       {
//         title: "Backup",
//         icon: "ri-download-cloud-2-line",
//         link: "/administration/backup",
//       },
//       {
//         title: "Restore",
//         icon: "ri-upload-cloud-2-line",
//         link: "/administration/restore",
//       },
//       {
//         title: "Settings",
//         icon: "ri-settings-3-line",
//         link: "/administration/settings",
//       },
//     ],
//   },
// ];




export const SideBarData = [
  {
    section: "DASHBOARD",
    items: [
      {
        title: "Quick Create",
        icon: "ri-building-2-line",
        children: [
          {
            title: "Invoice",
            link: "/quick-create/invoice",
          },
          {
            title: "Bill",
            link: "/quick-create/bill",
          },
          {
            title: "Party",
            link: "/quick-create/party",
          },
          {
            title: "Item",
            link: "/quick-create/item",
          },
          {
            title: "Receipt",
            link: "/quick-create/reciept",
          },
        ],
      },
    ],
  },

   {
    section: "VOUCHERS",
    items: [
      {
        title: "Sales",
        icon: "ri-shopping-cart-2-line",
        children: [
          {
            title: "Invoice",
            link: "/sales/invoice",
          },
          {
            title: "Return/Cr.Note",
            link: "/vouchers/sales/quotation",
          },
          {
            title: "Utilities",
            children: [
              {
                title: "E Invoice",
                link: "/vouchers/sales/einvoice",
              },
              {
                title: "E Way Bill",
                link: "/vouchers/sales/ewaybill",
              },
            ],
          },
        ],
      },

      {
        title: "Contra",
        icon: "ri-arrow-left-right-line",
        link: "/vouchers/contra",
      },
    ],
  },

  {
    section: "MASTERS",
    items: [
      {
        title: "Account Master",
        icon: "ri-contacts-book-2-line",
        children: [
          {
            title: "Account Group",
            link: "/masters/accounts/group",
          },
          {
            title: "Account",
            link: "/masters/accounts/list",
          },
        ],
      },

      {
        title: "Item Master",
        icon: "ri-box-3-line",
        children: [
          {
            title: "Category",
            link: "/masters/items/category",
          },
          {
            title: "Items",
            link: "/masters/items",
          },
          {
            title: "Brand",
            link: "/masters/items/brand",
          },
        ],
      },

      {
        title: "Unit Master",
        icon: "ri-ruler-line",
        link: "/masters/units",
      },

      {
        title: "GST Master",
        icon: "ri-percent-line",
        link: "/masters/gst",
      },

      {
        title: "Warehouse",
        icon: "ri-store-2-line",
        link: "/masters/warehouse",
      },
    ],
  },

  {
    section: "VOUCHERS",
    items: [
      {
        title: "Sales",
        icon: "ri-shopping-cart-2-line",
        children: [
          {
            title: "Invoice",
            link: "/vouchers/sales/invoice",
          },
          {
            title: "Quotation",
            link: "/vouchers/sales/quotation",
          },
          {
            title: "Return / Credit Note",
            link: "/vouchers/sales/return",
          },
          {
            title: "Utilities",
            children: [
              {
                title: "E Invoice",
                link: "/vouchers/sales/einvoice",
              },
              {
                title: "E Way Bill",
                link: "/vouchers/sales/ewaybill",
              },
            ],
          },
        ],
      },

      {
        title: "Purchase",
        icon: "ri-shopping-bag-3-line",
        children: [
          {
            title: "Bill",
            link: "/vouchers/purchase/bill",
          },
          {
            title: "Purchase Return",
            link: "/vouchers/purchase/return",
          },
        ],
      },

      {
        title: "Payment",
        icon: "ri-bank-card-line",
        link: "/vouchers/payment",
      },

      {
        title: "Receipt",
        icon: "ri-money-rupee-circle-line",
        link: "/vouchers/receipt",
      },

      {
        title: "Journal",
        icon: "ri-book-open-line",
        link: "/vouchers/journal",
      },

      {
        title: "Contra",
        icon: "ri-arrow-left-right-line",
        link: "/vouchers/contra",
      },
    ],
  },

  {
    section: "INVENTORY",
    items: [
      {
        title: "Stock",
        icon: "ri-stack-line",
        children: [
          {
            title: "Current Stock",
            link: "/inventory/stock",
          },
          {
            title: "Stock Summary",
            link: "/inventory/summary",
          },
        ],
      },

      {
        title: "Stock Journal",
        icon: "ri-file-list-3-line",
        link: "/inventory/stock-journal",
      },

      {
        title: "Material Issue",
        icon: "ri-arrow-up-circle-line",
        link: "/inventory/material-issue",
      },

      {
        title: "Material Receive",
        icon: "ri-arrow-down-circle-line",
        link: "/inventory/material-receive",
      },
    ],
  },

  {
    section: "REPORTS",
    items: [
      {
        title: "Accounts Reports",
        icon: "ri-file-chart-line",
        children: [
          {
            title: "Ledger",
            link: "/reports/ledger",
          },
          {
            title: "Trial Balance",
            link: "/reports/trial-balance",
          },
          {
            title: "Profit & Loss",
            link: "/reports/profit-loss",
          },
          {
            title: "Balance Sheet",
            link: "/reports/balance-sheet",
          },
        ],
      },

      {
        title: "GST Reports",
        icon: "ri-percent-line",
        link: "/reports/gst",
      },

      {
        title: "Stock Reports",
        icon: "ri-bar-chart-box-line",
        link: "/reports/stock",
      },
    ],
  },

  {
    section: "ADMINISTRATION",
    items: [
      {
        title: "Users",
        icon: "ri-user-settings-line",
        children: [
          {
            title: "Users List",
            link: "/administration/users",
          },
          {
            title: "Roles & Permissions",
            link: "/administration/roles",
          },
        ],
      },

      {
        title: "Backup",
        icon: "ri-download-cloud-2-line",
        link: "/administration/backup",
      },

      {
        title: "Restore",
        icon: "ri-upload-cloud-2-line",
        link: "/administration/restore",
      },

      {
        title: "Settings",
        icon: "ri-settings-3-line",
        link: "/administration/settings",
      },
    ],
  },
];