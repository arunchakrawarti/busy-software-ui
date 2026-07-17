import MainLayout from "@/components/templates/MainLayout";
import MainFinancialYear from "@/components/pages/financial-year/Index";
export const metadata = {
    title: "Financial Year",
    description: "View and manage financial year information",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Financial Year" description="View and manage financial year information">
                <MainFinancialYear />
            </MainLayout>
        </div>
    )
}

export default page
