import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/inventory/material-issue/ViewDetails";

import {
    materialIssueData,
} from "@/config/MaterialIssueDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = materialIssueData.find(
        (item) => item.id === Number(id)
    );

    return (

        <MainLayout
            title={`Material Issue - ${data?.issueNo || "Not Found"}`}
            description="View details of the material issue."
        >

            <ViewDetails data={data} />

        </MainLayout>

    );

};

export default Page;