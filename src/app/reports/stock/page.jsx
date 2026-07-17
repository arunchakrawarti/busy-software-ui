import MainLayout from "@/components/templates/MainLayout";
import MainStockReports from "@/components/pages/reports/stock-reports/Index";

export const metadata = {
    title: "Stock Reports",
    description:
        "View and analyze stock reports, including stock summaries, stock ledger, inventory valuation, low stock, and warehouse-wise inventory details.",
};

const Page = () => {
    return (
        <MainLayout
            title="Stock Reports"
            description="View and analyze stock reports, including stock summaries, stock ledger, inventory valuation, low stock, and warehouse-wise inventory details."
        >
            <MainStockReports />
        </MainLayout>
    );
};

export default Page;