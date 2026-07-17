import MainLayout from "@/components/templates/MainLayout";
import MainTrialBalance from "@/components/pages/reports/trial-balance/Index";

export const metadata = {
    title: "Trial Balance",
    description: "View and manage trial balance accounts",
};

const Page = () => {
    return (
        <MainLayout
            title="Trial Balance"
            description="View and manage trial balance accounts"
        >
            <MainTrialBalance />
        </MainLayout>
    );
};

export default Page;