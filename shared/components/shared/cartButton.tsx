"use client";

import { cn } from "@/shared/lib/";

import { ShoppingCart, ArrowRight } from "lucide-react";

import { useCart } from "@/shared/hooks";

import { CartDrawer } from ".";
import { Button } from "../ui";

export const CartButton = ({ classNames }: { classNames?: string }) => {
  const { items, totalAmount, loading } = useCart();

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartDrawer>
      <Button
        loading={loading}
        className={cn("group relative", { "w-[105px]": loading }, classNames)}
      >
        <b>{totalAmount} ₽</b>
        <span className="h-full w-[1px] bg-white/30 mx-3"></span>

        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart className="relative" size={16} strokeWidth={2} />
          <b>{totalQuantity}</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  );
};
