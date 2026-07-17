import MainLayout from "@/components/templates/MainLayout";
import MainRestore from "@/components/pages/administration/restore/Index";

export const metadata = {
    title: "System Restore",
    description:
        "Restore system data from previous backup files and manage recovery points.",
};

const Page = () => {
    return (
        <MainLayout
            title="System Restore"
            description="Restore system data from previous backup files and manage recovery points."
        >
            <MainRestore />
        </MainLayout>
    );
};

export default Page;
