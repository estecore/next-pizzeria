import type { Metadata } from "next";

import { Nunito } from "next/font/google";

import { Header } from "@/components/shared/header";

import "@/styles/globals.css";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Next Pizza | Home",
  description: "Next Pizza created by Estecore",
  icons: {
    icon: "/logo.png",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
