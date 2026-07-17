import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/inventory/material-receive/ViewDetails";

import {
    materialReceiveData,
} from "@/config/MaterialReceiveDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = materialReceiveData.find(
        (item) => item.id === Number(id)
    );

    return (

        <MainLayout
            title={`Material Receive - ${data?.receiveNo || "Not Found"}`}
            description="View details of the material receive."
        >

            <ViewDetails data={data} />

        </MainLayout>

    );

};

export default Page;