"use client";

import Link from "next/link";

import { ArrowRight } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  Button,
} from "@/shared/components/ui";
import { CartDrawerItem } from "./cartDrawerItem";

import { getCartItemDetails } from "@/shared/lib";

const items = [1, 1, 1];
const totalAmount = 666;

export const CartDrawer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            In cart <span className="font-bold">{items.length} items</span>
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 mt-5 overflow-auto flex flex-col gap-3 flex-1">
          <CartDrawerItem
            id={1}
            imageUrl=""
            name="Pizza Margherita"
            quantity={1}
            price={666}
            details={getCartItemDetails(2, 30, [
              { name: "Cheese" },
              { name: "Tomato" },
            ])}
          />
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Total
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>

              <span className="font-bold text-lg">{totalAmount} ₽</span>
            </div>

            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Place order
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};