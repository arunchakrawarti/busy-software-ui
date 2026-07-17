import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/inventory/stock-journal/ViewDetails";

import {
    stockJournalData,
} from "@/config/StockJournalDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = stockJournalData.find(
        (item) => item.id === Number(id)
    );

    return (

        <MainLayout
            title={`Stock Journal Entry - ${data?.voucherNo || "Not Found"}`}
            description="View details of the stock journal entry."
        >

            <ViewDetails data={data} />

        </MainLayout>

    );

};

export default Page;