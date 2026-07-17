import MainLayout from "@/components/templates/MainLayout";
import MainPurchaseVoucher from "@/components/pages/vouchers/purchase/Index";

export const metadata = {
    title: "Purchase Voucher",
    description: "View and manage purchase voucher information",
};


const page = () => {
    return (
        <div>
            <MainLayout title="Purchase Voucher" description="View and manage purchase voucher information">
                <MainPurchaseVoucher />
            </MainLayout>
        </div>
    )
}

export default page
