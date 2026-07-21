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
                link: "/party/deactivate-master",
              },
              {
                title: "Query on GSTIN",
                link: "/party/query-gstin",
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
        title: "Items",
        icon: "ri-shopping-cart-2-line",
        children: [
          {
            title: "Item(Good/Services)",
            link: "/items/item-goodservice",
          },
          {
            title: "Utilities",
            children: [
              {
                title: "Create Multiple(Excel)",
                link: "/items/create-excel",
              },
              {
                title: "Tax Category",
                link: "/items/tax-category",
              },
              {
                title: "Deactivate Masters",
                link: "/items/deactivate-master",
              },
              {
                title: "Query on HSN/SAC Code",
                link: "/items/query-hsn",
              },
              {
                title: "Update Item Tax Category/HSN Code",
                link: "/items/update-category",
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
        title: "Payments and Banking",
        icon: "ri-shopping-cart-2-line",
        children: [
          {
            title: "Payment in (Reciept)",
            link: "/payment-banking/payment-reciept",
          },
          {
            title: "Payment Out (Payment)",
            link: "/payment-banking/payment-out",
          },
          {
            title: "Smart Bank Reconcilation",
            children: [
              
              {
            title: "Import & Setup",
            children: [
              {
                title: "Import Bank Statement",
                link: "/payment-banking/smart-bankreconcilation",
              },
            ],
          },
            ],
          },
           {
            title: "Utilities",
            children: [
              {
                title: "Clear Bill ref",
                link: "/payment-banking/clear-bill",
              },
              {
                title: "Auto Adjust Bill ref",
                link: "/payment-banking/auto-adjust",
              },
              {
                title: "Optional Field",
                link: "/payment-banking/optional-field",
              }
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
        title: "GST",
        icon: "ri-shopping-cart-2-line",
        children: [
          {
            title: "Return",
            children: [
              {
                title: "IFF(Invoice Furnishing Facility)",
                link: "/gst/return/iff-invoice",
              },
              {
                title: "GSTR 1",
                link: "/items/tax-category",
              },
              {
                title: "GSTR 3B",
                link: "/items/deactivate-master",
              },
              {
                title: "GSTR 6",
                link: "/items/query-hsn",
              },
            ],
          },
           {
            title: "Refund Statement",
            children: [
              {
                title: "Purchase Rigister (For Offline Reconcilation)",
                link: "/items/create-excel",
              },
              {
                title: "GSTR 1",
                link: "/items/tax-category",
              },
              {
                title: "GSTR 3B",
                link: "/items/deactivate-master",
              },
              {
                title: "GSTR 6",
                link: "/items/query-hsn",
              },
            ],
          },
        ],
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