import MainLayout from "@/components/templates/MainLayout";
import MainStockJournalInventory from "@/components/pages/inventory/stock-journal/Index";
export const metadata = {
    title: "Stock Journal",
    description: "View and manage stock journal entries",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Stock Journal" description="View and manage stock journal entries">
                <MainStockJournalInventory />
            </MainLayout>
        </div>
    )
}

export default page;
