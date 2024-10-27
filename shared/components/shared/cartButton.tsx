import { cn } from "@/shared/lib/";

import { ShoppingCart, ArrowRight } from "lucide-react";

import { CartDrawer } from ".";
import { Button } from "../ui";

export const CartButton = ({ classNames }: { classNames?: string }) => {
  return (
    <CartDrawer>
      <Button className={cn("group relative", classNames)}>
        <b>520 ₽</b>
        <span className="h-full w-[1px] bg-white/30 mx-3"></span>

        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart className="relative" size={16} strokeWidth={2} />
          <b>3</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  );
};
