import { Inter } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import Heading from "~/layout/heading";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: '../font/InriaSerif-Regular.ttf' })

export const metadata = {
  title: "My Profile",
  description: "Generated by My Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-white dark:bg-gray-800">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"/>
        <Heading />
        <main className={myFont.className}>{children}</main>
      </body>
    </html>
  );
}
