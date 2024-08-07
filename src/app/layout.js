import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Work Manager",
  description: "This is a work manager app created in nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>This is Header</h1>
        <div className="flex justify-between">
          {children}
        </div>
        <h1>This is footer</h1>
        </body>
        
    </html>
  );
}
