import type { Metadata } from "next";
import Footer from "@/components/Footer"; 
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raphaël Boucheron",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <link rel="svg" href="/icon.svg" />
      <body  className=" bg-[#fffbf9] dark:bg-[#2f2f2f]" >
        < Header />
        {children}

        <Footer />
        
      </body>
    </html>
  );
}
