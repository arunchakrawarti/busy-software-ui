import MainLayout from "@/components/templates/MainLayout";
import MainGstReports from "@/components/pages/reports/gst-reports/Index";

export const metadata = {
    title: "GST Reports",
    description:
        "View and analyze GST reports, including tax summaries, input/output GST, and return-related details.",
};

const Page = () => {
    return (
        <MainLayout
            title="GST Reports"
            description="View and analyze GST reports, including tax summaries, input/output GST, and return-related details."
        >
            <MainGstReports />
        </MainLayout>
    );
};

export default Page;