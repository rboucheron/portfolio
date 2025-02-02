import { cookies } from "next/headers";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import CookieModal from "@/components/CookieModal";
import "./globals.css";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Raphaël Boucheron",
  description: " ",
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({ children, params }: Props) {
  const cookieStore = cookies();
  const cookieTheme = cookieStore.get("globalTheme")?.value;
  const cookieAuthorization = cookieStore.get("consentCookie")?.value;

  let isDarkMode = false;
  let consentCookie = null;

  if (cookieTheme) {
    try {
      const parsedCookie = JSON.parse(cookieTheme);
      isDarkMode = parsedCookie.isDark;
    } catch (error) {
      console.error("Error parsing globalTheme cookie:", error);
    }
  }

  if (cookieAuthorization) {
    try {
      const parsedCookie = JSON.parse(cookieAuthorization);
      consentCookie = parsedCookie.Authorization;
    } catch (error) {
      console.error("Error parsing consentCookie cookie:", error);
    }
  }

  return (
    <html lang={params.locale} className={`${isDarkMode ? "dark" : ""}`}>
      <link rel="icon" href="/img/icon.svg" />
      <body className={`bg-background dark:bg-foreground`}>
        <Providers locale={params.locale}>
          <Header />
          {children}
          <CookieModal consentCookie={consentCookie} />
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
