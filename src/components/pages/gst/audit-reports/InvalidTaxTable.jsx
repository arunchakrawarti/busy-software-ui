"use client";
import BasicTable from "@/components/common/BasicTable";

// Naye Columns ke hisab se 4 Dummy Data Rows
const data = [
  {
    id: 1,
    partyName: "Apex Logistics Pvt Ltd",
    state: "Maharashtra",
    gstin: "27AAAAA0000A1Z5",
    invalidReason: "Format mismatch (Invalid State Code)",
  },
  {
    id: 2,
    partyName: "TechCorp Solutions India",
    state: "Delhi",
    gstin: "07BBBCC1234D1Z2",
    invalidReason: "Cancelled taxpayer status",
  },
  {
    id: 3,
    partyName: "Global Traders & Co.",
    state: "Gujarat",
    gstin: "24CCCCD5678E1Z9",
    invalidReason: "Checksum digit error",
  },
  {
    id: 4,
    partyName: "Shree Enterprises",
    state: "Karnataka",
    gstin: "29DDDEE9012F1Z4",
    invalidReason: "Structure length exceeds 15 characters",
  },
];

const columns = [
  {
    label: "#",
    key: "id",
  },
  {
    label: "NAME OF PARTY",
    key: "partyName",
  },
  {
    label: "STATE",
    key: "state",
  },
  {
    label: "GSTIN",
    key: "gstin",
  },
  {
    label: "REASON FOR INVALID GSTIN",
    key: "invalidReason",
  },
];

export default function InvalidTaxTable() {
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