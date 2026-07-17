import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/inventory/stock/ViewDetails";

import {
    stockData,
} from "@/config/StockDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = stockData.find(
        (item) => item.id === Number(id)
    );

    return (

        <MainLayout
            title={`Stock Item - ${data?.name || "Not Found"}`}
            description="View details of the stock item."
        >

            <ViewDetails data={data} />

        </MainLayout>

    );

};

export default Page;