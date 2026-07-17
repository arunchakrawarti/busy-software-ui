import MainLayout from "@/components/templates/MainLayout";
import MainLedgerReport from "@/components/pages/reports/ledger/Index";
export const metadata = {
    title: "Ledger Report",
    description: "View and manage ledger report entries",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Ledger Report" description="View and manage ledger report entries">
                <MainLedgerReport />
            </MainLayout>
        </div>
    )
}

export default page;
