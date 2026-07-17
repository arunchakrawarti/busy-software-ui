import MainLayout from "@/components/templates/MainLayout";
import MainGstMaster from "@/components/pages/master/gst/Index";

export const metadata = {
    title: "GST Master",
    description: "View and manage GST information",
};

const page = () => {
    return (
        <div>
            <MainLayout title="GST Master" description="View and manage GST information">
                <MainGstMaster />
            </MainLayout>
        </div>
    )
}

export default page
