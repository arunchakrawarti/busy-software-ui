import AuthLayout from '@/components/templates/AuthLayout';
import Signin from '@/components/pages/auth/Signin';

export const metadata = {
  title: "Sign In | BUSY ERP",
  description:
    "Sign in to BUSY ERP to manage accounting, inventory, GST, vouchers, financial reports, and business operations.",
};

const page = () => {
  return (
    <AuthLayout>
      <Signin />
    </AuthLayout>
  )
}

export default page
