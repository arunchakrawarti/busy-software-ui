import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/reports/balance-sheet/ViewDetails";

import {
    balanceSheetData,
} from "@/config/BalanceSheetDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = balanceSheetData.find(
        (item) => item.id === Number(id)
    );

    return (
        <MainLayout
            title={`Balance Sheet - ${data?.accountName || "Not Found"}`}
            description="View balance sheet account details."
        >

            <ViewDetails data={data} />
        </MainLayout>
    );

};

export default Page;