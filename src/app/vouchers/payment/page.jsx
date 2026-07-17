import MainLayout from "@/components/templates/MainLayout";
import MainPaymentVoucher from "@/components/pages/vouchers/payments/Index";

export const metadata = {
    title: "Payment Voucher",
    description: "View and manage payment voucher information",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Payment Voucher" description="View and manage payment voucher information">
                <MainPaymentVoucher />
            </MainLayout>
        </div>
    )
}

export default page;
