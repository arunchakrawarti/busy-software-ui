
import MainDashboard from "@/components/pages/dashboard/Index";
import MainLayout from "@/components/templates/MainLayout";

export const metadata = {
  title: "Dashboard | BUSY ERP",
  description:
    "Manage your accounting, inventory, sales, purchases, GST, reports, and business operations from the BUSY ERP dashboard.",
};

export default function Home() {
  return (
    <MainLayout>
      <MainDashboard />
    </MainLayout>
  );
}
