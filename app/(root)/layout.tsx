import type { Metadata } from "next";

import { Header } from "@/shared/components/shared/header";

export const metadata: Metadata = {
  title: "Next Pizza | Home",
  description: "Next Pizza created by Estecore",
  icons: {
    icon: "/logo.png",
  },
};

const HomeLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      {modal}
    </>
  );
};

export default HomeLayout;
