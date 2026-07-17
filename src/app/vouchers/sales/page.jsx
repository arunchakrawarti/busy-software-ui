import MainLayout from "@/components/templates/MainLayout";
import MainSalesVoucher from "@/components/pages/vouchers/sales/Index";
export const metadata = {
    title: "Sales Voucher",
    description: "View and manage sales voucher information",
};


const page = () => {
    return (
        <div>
            <MainLayout title="Sales Voucher" description="View and manage sales voucher information">
                <MainSalesVoucher />
            </MainLayout>
        </div>
    )
}

export default page
