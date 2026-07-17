import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/vouchers/credit-note/ViewDetails";

import {
    creditNoteData,
} from "@/config/CreditNoteDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = creditNoteData.find(
        (item) => item.id === Number(id)
    );

    return (

        <MainLayout
            title={`Credit Note Voucher - ${data?.voucherNo || "Not Found"}`}
            description="View details of the credit note voucher."
        >

            <ViewDetails data={data} />

        </MainLayout>

    );

};

export default Page;