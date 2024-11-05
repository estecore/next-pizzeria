"use client";

import { useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import toast from "react-hot-toast";

import { User } from "lucide-react";

import { cn } from "@/shared/lib";

import { CartButton, Container, SearchInput } from "./index";
import { Button } from "../ui";

export const Header = ({
  className,
  hasSearch = true,
  hasCart = true,
}: {
  className?: string;
  hasSearch?: boolean;
  hasCart?: boolean;
}) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has("paid")) {
      setTimeout(() => {
        toast.success("Order successfully paid 🎉 Check your E-mail!");
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
          <Button variant={"outline"} className="flex items-center gap-1">
            <User size={16} />
            Log in
          </Button>

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
