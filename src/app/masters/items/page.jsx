import MainLayout from "@/components/templates/MainLayout";
import MainItemMaster from "@/components/pages/master/items/Index";
export const metadata = {
    title: "Item Master",
    description: "View and manage item information",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Item Master" description="View and manage item information">
                <MainItemMaster />
            </MainLayout>
        </div>
    )
}

export default page
