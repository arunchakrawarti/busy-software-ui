import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/reports/gst-reports/ViewDetails";
import {
    gstReportsData,
} from "@/config/GstReportsDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = gstReportsData.find(
        (item) => item.id === Number(id)
    );

    return (
        <MainLayout
            title={`GST Report - ${data?.reportName || "Not Found"}`}
            description="View GST report details, including return information, taxable value, tax amount, and filing status."
        >

            <ViewDetails data={data} />
        </MainLayout>
    );

};

export default Page;