import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Work Manager",
//   description: "This is a work manager app created in nextjs",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer/>
        <CustomNavbar />
        <div className="mt-2">{children}</div>
        <Footer/>
        </body>
        
    </html>
  );
}
