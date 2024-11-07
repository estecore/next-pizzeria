import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Pizza | Dashboard",
  description: "Next Pizza created by Estecore",
  icons: {
    icon: "/logo.png",
  },
};

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="min-h-screen">{children}</main>;
};

export default DashboardLayout;
