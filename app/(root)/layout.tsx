import type { Metadata } from "next";

import { Header } from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Next Pizza | Home",
  description: "Next Pizza created by Estecore",
  icons: {
    icon: "/logo.png",
  },
};

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default HomeLayout;
