import MainLayout from "@/components/templates/MainLayout";
import MainBalanceSheet from "@/components/pages/reports/balance-sheet/Index";

export const metadata = {
    title: "Balance Sheet",
    description: "View assets, liabilities, and equity to analyze the company's financial position.",
};

const Page = () => {
    return (
        <MainLayout
            title="Balance Sheet"
            description="View assets, liabilities, and equity to analyze the company's financial position."
        >
            <MainBalanceSheet />
        </MainLayout>
    );
};

export default Page;