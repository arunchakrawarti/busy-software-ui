import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/vouchers/journal/ViewDetails";
export const metadata = {
    title: "Journal Voucher",
    description: "View and manage journal voucher information",
};


const page = async({ params }) => {
    const { id } = await params;
    return (
        <div>
            <MainLayout title="Journal Voucher" description="View and manage journal voucher information">
                <ViewDetails id={id} />
            </MainLayout>
        </div>
    )
}

export default page
