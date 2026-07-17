import MainLayout from "@/components/templates/MainLayout";
import MainBackup from "@/components/pages/administration/backup/Index";

export const metadata = {
    title: "System Backup",
    description:
        "Manage database backups, schedule automatic backups, and download system recovery points.",
};

const Page = () => {
    return (
        <MainLayout
            title="System Backup"
            description="Manage database backups, schedule automatic backups, and download system recovery points."
        >
            <MainBackup />
        </MainLayout>
    );
};

export default Page;
