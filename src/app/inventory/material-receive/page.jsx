import MainLayout from "@/components/templates/MainLayout";
import MainMaterialreceiveInventory from "@/components/pages/inventory/material-receive/Index";
export const metadata = {
    title: "Material Receive",
    description: "View and manage material receive entries",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Material Receive" description="View and manage material receive entries">
                <MainMaterialreceiveInventory />
            </MainLayout>
        </div>
    )
}

export default page;
