import type { Metadata } from "next";

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
      <body  className=" bg-[#fffbf9] dark:bg-[#2f2f2f]" >{children}</body>
    </html>
  );
}
