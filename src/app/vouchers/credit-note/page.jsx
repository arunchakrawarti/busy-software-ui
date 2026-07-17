import MainLayout from "@/components/templates/MainLayout";
import MainCreditNoteVoucher from "@/components/pages/vouchers/credit-note/Index";

export const metadata = {
    title: "Credit Note",
    description: "View and manage credit note information",
};

const Page = () => {
    return (
        <MainLayout
            title="Credit Note"
            description="View and manage credit note information"
        >
            <MainCreditNoteVoucher />
        </MainLayout>
    );
};

export default Page;