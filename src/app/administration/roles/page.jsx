import MainLayout from "@/components/templates/MainLayout";
import MainRoles from "@/components/pages/administration/roles/Index";

export const metadata = {
    title: "Roles & Permissions",
    description:
        "Manage system roles, assign permissions, and control access levels across the ERP application.",
};

const Page = () => {
    return (
        <MainLayout
            title="Roles & Permissions"
            description="Manage system roles, assign permissions, and control access levels across the ERP application."
        >
            <MainRoles />
        </MainLayout>
    );
};

export default Page;