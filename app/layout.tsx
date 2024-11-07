import { Nunito } from "next/font/google";

import "@/styles/globals.css";

import { Providers } from "@/shared/components/shared";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <head>
        <link
          data-rh="true"
          rel="shortcut icon"
          href="/logo.png"
          type="image/png"
        />
      </head>
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
