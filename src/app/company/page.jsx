import MainLayout from "@/components/templates/MainLayout";
import MainCompany from "@/components/pages/company/Index";
export const metadata = {
    title: "Company",
    description: "View and manage company information",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Company" description="View and manage company information">
                <MainCompany />
            </MainLayout>
        </div>
    )
}

export default page
