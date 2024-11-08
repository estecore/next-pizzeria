import { Suspense } from "react";

import type { Metadata } from "next";

import { Container, Header } from "@/shared/components/shared";

export const metadata: Metadata = {
  title: "Next Pizza | Checkout",
  description: "Generated by create next app",
};

export default async function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="min-h-screen h-full bg-[#F4F1EE]">
        <Container>
          <Suspense>
            <Header hasSearch={false} hasCart={false} />
          </Suspense>
          {children}
        </Container>
      </main>
    </>
  );
}
