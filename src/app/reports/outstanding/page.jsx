import MainLayout from "@/components/templates/MainLayout";
import MainOutstanding from "@/components/pages/reports/outstanding/Index";

export const metadata = {
    title: "Outstanding Reports",
    description:
        "View and analyze customer and vendor outstanding reports, including receivables, payables, overdue balances, and ageing analysis.",
};

const Page = () => {
    return (
        <MainLayout
            title="Outstanding Reports"
            description="View and analyze customer and vendor outstanding reports, including receivables, payables, overdue balances, and ageing analysis."
        >
            <MainOutstanding />
        </MainLayout>
    );
};

export default Page;