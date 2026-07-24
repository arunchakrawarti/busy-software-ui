"use client";
import BasicTable from "@/components/common/BasicTable";

// Tax Rate Change Table Data
const data = [
  {
    id: 1,
    itemName: "Laptop Dell XPS 15",
    taxCategory: "GST 18%",
    oldTaxRate: "18.00%",
    newTaxRate: "12.00%",
    wef: "01-04-2024",
  },
  {
    id: 2,
    itemName: "Wireless Mouse & Keyboard",
    taxCategory: "GST 18%",
    oldTaxRate: "18.00%",
    newTaxRate: "18.00%",
    wef: "01-04-2024",
  },
  {
    id: 3,
    itemName: "Office Chair Ergonomic",
    taxCategory: "GST 28%",
    oldTaxRate: "28.00%",
    newTaxRate: "18.00%",
    wef: "01-05-2024",
  },
  {
    id: 4,
    itemName: "4K LED Monitor 27-inch",
    taxCategory: "GST 18%",
    oldTaxRate: "18.00%",
    newTaxRate: "18.00%",
    wef: "01-04-2024",
  },
];

// Mapped Column Keys
const columns = [
  {
    label: "#",
    key: "id",
  },
  {
    label: "ITEM NAME",
    key: "itemName",
  },
  {
    label: "TAX CATEGORY",
    key: "taxCategory",
  },
  {
    label: "OLD TAX RATE",
    key: "oldTaxRate",
  },
  {
    label: "NEW TAX RATE",
    key: "newTaxRate",
  },
  {
    label: "W.F.F",
    key: "wef",
  },
];

export default function ChangeTaxTable() {
  return (
    <div className="w-full mt-5 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm font-sans">
      <BasicTable
        columns={columns}
        data={data}
        wrapperClassName="rounded-none border-0 overflow-x-auto min-h-[300px]"
        theadClassName="uppercase text-[12px] font-bold text-[#5C667A] bg-slate-50 border-b border-slate-200"
      />

      <div className="w-full border-t border-slate-200 p-4 sm:px-6 sm:py-4 bg-white flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
          <span className="text-slate-500 font-medium">
            Showing {data.length} of {data.length} rows
          </span>
          <button
            type="button"
            className="text-blue-600 font-semibold hover:underline"
          >
            F3: Search
          </button>
          <button
            type="button"
            className="text-blue-600 font-semibold hover:underline"
          >
            F5: Summary
          </button>
          <button
            type="button"
            className="text-blue-600 font-semibold hover:underline"
          >
            F7: Filter
          </button>
        </div>

        <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-blue-600 hover:text-blue-700 select-none w-fit pt-1">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
          />
          <span>Don&apos;t refresh report after data modification</span>
        </label>
      </div>
    </div>
  );
}