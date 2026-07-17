import MainLayout from "@/components/templates/MainLayout";
import MainSettings from "@/components/pages/administration/settings/Index";

export const metadata = {
    title: "System Settings",
    description:
        "Configure general application settings, company details, financial preferences, and system parameters.",
};

const Page = () => {
    return (
        <MainLayout
            title="System Settings"
            description="Configure general application settings, company details, financial preferences, and system parameters."
        >
            <MainSettings />
        </MainLayout>
    );
};

export default Page;
