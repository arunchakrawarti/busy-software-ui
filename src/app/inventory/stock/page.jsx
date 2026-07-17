import MainLayout from "@/components/templates/MainLayout";
import MainStockInventory from "@/components/pages/inventory/stock/Index";
export const metadata = {
    title: "Stock Inventory",
    description: "View and manage stock inventory",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Stock Inventory" description="View and manage stock inventory">
                <MainStockInventory />
            </MainLayout>
        </div>
    )
}

export default page;
