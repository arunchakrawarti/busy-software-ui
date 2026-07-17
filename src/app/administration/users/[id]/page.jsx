import MainLayout from "@/components/templates/MainLayout";
import ViewDetails from "@/components/pages/administration/users/ViewDetails";
import {
    usersData,
} from "@/config/UsersDummyData";

const Page = async ({ params }) => {

    const { id } = await params;

    const data = usersData.find(
        (item) => item.id === Number(id)
    );

    return (
        <MainLayout
            title={`User - ${data?.fullName || "Not Found"}`}
            description="View complete user information, including profile details, role, department, account status, contact information, and activity."
        >
            <ViewDetails data={data} />
        </MainLayout>
    );

};

export default Page;