"use client";
import BasicTable from "@/components/common/BasicTable";

const data = [
  {
    date: "16-07-2026",
    invoiceNo: "1/2026-27",
    party: "Cash",
    transporter: "VRL Logistics",
    grNo: "GR10235",
    grDate: "16-07-2026",
    vehicleNo: "UP32 AB 4587",
    station: "Lucknow",
    pinCode: "226001",
    eWayBillReqd: "Yes",
    distance: "320",
    modeOfTransport: "Road",
    eWayBillNo: "181234567890",
  },
  {
    date: "17-07-2026",
    invoiceNo: "2/2026-27",
    party: "ABC Traders",
    transporter: "Blue Dart",
    grNo: "GR10236",
    grDate: "17-07-2026",
    vehicleNo: "DL01 CD 9876",
    station: "Delhi",
    pinCode: "110001",
    eWayBillReqd: "No",
    distance: "0",
    modeOfTransport: "Courier",
    eWayBillNo: "-",
  },
  {
    date: "18-07-2026",
    invoiceNo: "3/2026-27",
    party: "XYZ Enterprises",
    transporter: "TCI Express",
    grNo: "GR10237",
    grDate: "18-07-2026",
    vehicleNo: "MH12 EF 1234",
    station: "Mumbai",
    pinCode: "400001",
    eWayBillReqd: "Yes",
    distance: "1450",
    modeOfTransport: "Road",
    eWayBillNo: "181234567891",
  },
];

const columns = [
  {
    label: "DATE",
    key: "date",
  },
  {
    label: "VCH./BILL NO",
    key: "invoiceNo",
    render: (value) => (
      <span className="font-semibold text-slate-800">{value}</span>
    ),
  },
  {
    label: "PARTY NAME",
    key: "party",
  },
  {
    label: "TRANSPORTER",
    key: "transporter",
  },
  {
    label: "GR/RR NO",
    key: "grNo",
  },
  {
    label: "GR DATE",
    key: "grDate",
  },
  {
    label: "VEHICLE NO",
    key: "vehicleNo",
  },
  {
    label: "STATION",
    key: "station",
  },
  {
    label: "PIN CODE",
    key: "pinCode",
  },
  {
    label: "E-WAY BILL REQD",
    key: "eWayBillReqd",
  },
  {
    label: "DISTANCE(KM)",
    key: "distance",
  },
  {
    label: "MODE OF TRANSPORT",
    key: "modeOfTransport",
  },
  {
    label: "E-WAY BILL NO",
    key: "eWayBillNo",
  },
];

export default function UpdatePurchaseBillTable() {
  return (
    <div>
      <BasicTable
        columns={columns}
        data={data}
        wrapperClassName="rounded-none border-0"
        theadClassName="uppercase text-[12px] font-bold text-[#5C667A]"
      />
    </div>
  );
}
