import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/reports/ledger/ViewDetails";

import {
    ledgerData,
} from "@/config/LedgerDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = ledgerData.find(
        (item) => item.id === Number(id)
    );

    return (

        <MainLayout
            title={`Ledger Entry - ${data?.voucherNo || "Not Found"}`}
            description="View details of the ledger entry."
        >

            <ViewDetails data={data} />

        </MainLayout>

    );

};

export default Page;