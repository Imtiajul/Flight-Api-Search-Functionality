import Navbar from "@/_components/Navbar";
import { Inter } from "next/font/google";
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Easy Flight Booking",
  description: "One Place Stop for Booking Flight",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar/>
          <main>
            {children}
          </main>
        </body>
    </html>
  );
}
