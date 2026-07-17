import MainLayout from "@/components/templates/MainLayout";
import MainWarehouseMaster from "@/components/pages/master/warehouse/Index";

export const metadata = {
    title: "Warehouse Master",
    description: "View and manage warehouse information",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Warehouse Master" description="View and manage warehouse information">
                <MainWarehouseMaster />
            </MainLayout>
        </div>
    )
}

export default page
