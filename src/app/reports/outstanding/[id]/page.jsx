import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/reports/outstanding/ViewDetails";
import {
    outstandingReportData,
} from "@/config/OutstandingDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = outstandingReportData.find(
        (item) => item.id === Number(id)
    );

    return (
        <MainLayout
            title={`Outstanding Report - ${data?.reportName || "Not Found"}`}
            description="View outstanding report details, including customer/vendor outstanding balances, receivables, payables, overdue amounts, and report status."
        >
            <ViewDetails data={data} />
        </MainLayout>
    );

};

export default Page;