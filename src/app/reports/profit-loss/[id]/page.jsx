import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/reports/profit-loss/ViewDetails";

import {
    profitLossData,
} from "@/config/ProfitLossDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = profitLossData.find(
        (item) => item.id === Number(id)
    );

    return (
        <MainLayout
            title={`Profit & Loss - ${data?.accountName || "Not Found"}`}
            description="View profit and loss account details."
        >

            <ViewDetails data={data} />
        </MainLayout>
    );

};

export default Page;