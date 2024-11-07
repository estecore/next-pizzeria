"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import toast from "react-hot-toast";

import { cn } from "@/shared/lib";

import { CartButton, Container, ProfileButton, SearchInput } from "./index";
import { AuthModal } from "./modals";

export const Header = ({
  className,
  hasSearch = true,
  hasCart = true,
}: {
  className?: string;
  hasSearch?: boolean;
  hasCart?: boolean;
}) => {
  const router = useRouter();

  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;

    const messages: Record<string, string> = {
      paid: "Order successfully paid! 🎉 Check your E-mail!",
      verified: "Account successfully verified! 🎉",
    };

    const messageKey = ["paid", "verified"].find((key) =>
      searchParams.has(key)
    );
    const message = messageKey && messages[messageKey];

    if (message) {
      setTimeout(() => {
        router.replace("/");
        toast.success(message);
      }, 500);
    }
  }, []);

  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src={"/logo.png"} alt="logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                it couldn`t be tastier
              </p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        <div className="flex items-center gap-3">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
