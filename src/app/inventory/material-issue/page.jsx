import MainLayout from "@/components/templates/MainLayout";
import MainMaterialIssueInventory from "@/components/pages/inventory/material-issue/Index";
export const metadata = {
    title: "Material Issue",
    description: "View and manage material issue entries",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Material Issue" description="View and manage material issue entries">
                <MainMaterialIssueInventory />
            </MainLayout>
        </div>
    )
}

export default page;
