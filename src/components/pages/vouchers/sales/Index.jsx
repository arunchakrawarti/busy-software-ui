"use client";

import Card from "@/components/molecules/Card";

import SalesHeader from "./SalesHeader";
import CustomerCard from "./CustomerCard";
import VoucherInfoCard from "./VoucherInfoCard";
import ItemTable from "./ItemTable";
import SalesSummary from "./SalesSummary";
import SaveActions from "./SaveActions";

const MainSalesVoucher = () => {
    return (
        <div className="space-y-6">

            <SalesHeader />

            <div className="grid gap-6 xl:grid-cols-12">

                <div className="xl:col-span-8">

                        <div className="grid gap-5 lg:grid-cols-2 rounded1">
                            <CustomerCard />
                            <VoucherInfoCard />
                        </div>


                    <div className="mt-6">
                        <ItemTable />
                    </div>
                </div>

                <div className="xl:col-span-4 space-y-6">
                    <SalesSummary />

                    <SaveActions />
                </div>

            </div>

        </div>
    );
};

export default MainSalesVoucher;