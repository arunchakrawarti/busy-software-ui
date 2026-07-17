import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/reports/stock-reports/ViewDetails";
import {
    stockReportsData,
} from "@/config/StockReportsDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = stockReportsData.find(
        (item) => item.id === Number(id)
    );

    return (
        <MainLayout
            title={`Stock Report - ${data?.reportName || "Not Found"}`}
            description="View stock report details, including report type, warehouse, inventory summary, stock quantity, stock value, and report status."
        >
            <ViewDetails data={data} />
        </MainLayout>
    );

};

export default Page;