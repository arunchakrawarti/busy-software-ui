import MainLayout from "@/components/templates/MainLayout";
import MainUsers from "@/components/pages/administration/users/Index";

export const metadata = {
    title: "Users",
    description:
        "Manage system users, assign roles, control account status, and monitor user access across the ERP application.",
}
const Page = () => {
    return (
        <MainLayout
            title="Users"
            description="Manage system users, assign roles, control account status, and monitor user access across the ERP application."
        >
            <MainUsers />
        </MainLayout>
    );
};

export default Page;