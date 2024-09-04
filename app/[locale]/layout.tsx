import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import CookieModal from "@/components/CookieModal";
import "./globals.css";
import { GetServerSideProps } from "next";
import { Providers } from "./providers";
export const metadata: Metadata = {
  title: "Raphaël Boucheron",
  description: " ",
};



export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang="en">
      <link rel="svg" href="/icon.svg" />
      <body className=" bg-[#fffbf9] dark:bg-[#2f2f2f]">
        <Providers locale={params.locale}>
          <Header />
          {children}
          < CookieModal />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}


