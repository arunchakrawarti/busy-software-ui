// app/vouchers/debit-note/[id]/page.jsx
import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/vouchers/debit-note/ViewDetails";

import {
    debitNoteData,
} from "@/config/DebitNoteDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = debitNoteData.find(
        (item) => item.id === Number(id)
    );

    return (
        <MainLayout title={`Debit Note Voucher - ${data?.voucherNumber || "Not Found"}`}
            description="View details of the debit note voucher.">
            <ViewDetails data={data} />
        </MainLayout>

    );

};

export default Page;