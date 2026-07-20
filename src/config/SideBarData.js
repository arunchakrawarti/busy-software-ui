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
            title: "Return/Dr.Note",
            link: "/sales/return-note",
          },
          {
            title: "Utilities",
            children: [
              {
                title: "Update Billing/Shipping",
                link: "/sales/updatebilling",
              },
              {
                title: "Update Transport",
                link: "/sales/transport-report",
              },
              {
                title: "Update Optional Fields",
                link: "/sales/optional-field",
              },
            ],
          },
        ],
      },
    ],
  },

   {
    section: "VOUCHERS",
    items: [
      {
        title: "Purchase",
        icon: "ri-shopping-cart-2-line",
        children: [
          {
            title: "Bill",
            link: "/purchase/bill",
          },
          {
            title: "Return/Cr.Note",
            link: "/purchase/return-denote",
          },
          {
            title: "Utilities",
            children: [
              {
                title:"Update Purchase Bill no./Date",
                link:"/purchase/update-purchase-bill-no"
              },
              {
                title: "Update Billing/Shipping",
                link: "/purchase/update-billing",
              },
              {
                title: "Update Transport",
                link: "/purchase/update-transport",
              },
              {
                title: "Update Optional Fields",
                link: "/purchase/update-optionalfield",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    section: "VOUCHERS",
    items: [
      {
        title: "Party",
        icon: "ri-shopping-cart-2-line",
        children: [
          {
            title: "Customers",
            link: "/party/customer",
          },
          {
            title: "Suppliers",
            link: "/party/suppliers",
          },
          {
            title: "Utilities",
            children: [
              {
                title:"Create Multiple(GSTIN)",
                link:"/party/utilities-gstin"
              },
              {
                title: "Create Multiple(Excel)",
                link: "/party/create-excel",
              },
              {
                title: "Op Bill References",
                link: "/party/bill-reference",
              },
              {
                title: "Deactivate Masters",
                link: "/party/customer",
              },
              {
                title: "Query on GSTIN",
                link: "/party/customer",
              },
            ],
          },
        ],
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