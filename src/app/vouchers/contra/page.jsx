import MainLayout from "@/components/templates/MainLayout";
import MainContraVoucher from "@/components/pages/vouchers/contra/Index";
export const metadata = {
    title: "Contra Voucher",
    description: "View and manage contra voucher information",
};


const page = () => {
    return (
        <div>
            <MainLayout title="Contra Voucher" description="View and manage contra voucher information">
                <MainContraVoucher />
            </MainLayout>
        </div>
    )
}

export default page
