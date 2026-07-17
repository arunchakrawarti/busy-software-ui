import MainLayout from "@/components/templates/MainLayout";
import MainReceiptVoucher from "@/components/pages/vouchers/receipt/Index";
export const metadata = {
    title: "Receipt Voucher",
    description: "View and manage receipt voucher information",
};


const page = () => {
    return (
        <div>
            <MainLayout title="Receipt Voucher" description="View and manage receipt voucher information">
                <MainReceiptVoucher />
            </MainLayout>
        </div>
    )
}

export default page
