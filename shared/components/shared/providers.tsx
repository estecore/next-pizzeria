"use client";

import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

import { Toaster } from "react-hot-toast";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
      <NextTopLoader />
    </>
  );
};
