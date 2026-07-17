import MainLayout from "@/components/templates/MainLayout";
import MainDebitNoteVoucher from "@/components/pages/vouchers/debit-note/Index";
export const metadata = {
    title: "Debit Note",
    description: "View and manage debit note information",
};


const page = () => {
    return (
        <div>
            <MainLayout title="Debit Note" description="View and manage debit note information">
                <MainDebitNoteVoucher />
            </MainLayout>
        </div>
    )
}

export default page;
