import MainLayout from "@/components/templates/MainLayout";
import MainJournalVoucher from "@/components/pages/vouchers/journal/Index";
export const metadata = {
    title: "Journal Voucher",
    description: "View and manage journal voucher information",
};


const page = () => {
    return (
        <div>
            <MainLayout title="Journal Voucher" description="View and manage journal voucher information">
                <MainJournalVoucher />
            </MainLayout>
        </div>
    )
}

export default page;
