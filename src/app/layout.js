import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "@/components/redux/provider";
import SessionExpiredModal from "@/components/common/SessionExpiredModal";
import Script from "next/script";
import PageLoader from "@/components/atoms/PageLoader";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        id="razorpay-script"
      />

      <body
        className={`
          ${nunito.variable}
          antialiased
          bg-[#F8F9FD]
          text-gray-800
        `}
      >
        <Toaster />

        <ReduxProvider>
          <SessionExpiredModal />
          <PageLoader>
            {children}
          </PageLoader>
        </ReduxProvider>
      </body>
    </html>
  );
}