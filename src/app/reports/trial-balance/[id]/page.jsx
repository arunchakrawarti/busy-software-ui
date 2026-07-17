import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/reports/trial-balance/ViewDetails";

import {
    trialBalanceData,
} from "@/config/TrialBalanceDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = trialBalanceData.find(
        (item) => item.id === Number(id)
    );

    return (
        <MainLayout
            title={`Trial Balance - ${data?.accountName || "Not Found"}`}
            description="View trial balance account details."
        >

            <ViewDetails data={data} />
        </MainLayout>
    );

};

export default Page;