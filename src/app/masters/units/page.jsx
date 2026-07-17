import MainLayout from "@/components/templates/MainLayout";
import MainUnitMaster from "@/components/pages/master/units/Index";

export const metadata = {
    title: "Unit Master",
    description: "View and manage unit information",
};

const page = () => {
    return (
        <div>
            <MainLayout title="Unit Master" description="View and manage unit information">
                <MainUnitMaster />
            </MainLayout>
        </div>
    )
}

export default page
