import MainLayout from "@/components/templates/MainLayout";
import MainProfitLossReports from "@/components/pages/reports/profit-loss/Index";

export const metadata = {
    title: "Profit & Loss",
    description: "View and manage profit and loss statements",
};

const Page = () => {
    return (
        <MainLayout
            title="Profit & Loss"
            description="View and manage profit and loss statements"
        >
            <MainProfitLossReports />
        </MainLayout>
    );
};

export default Page;