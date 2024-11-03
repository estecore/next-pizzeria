"use client";

import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { PizzaSize, PizzaType } from "@/shared/constants/pizza";

import { useCartStore } from "@/shared/store";

import { cn, getCartItemDetails } from "@/shared/lib";

import { CartDrawerItem } from "./cartDrawerItem";

import { Title } from "./title";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  Button,
  SheetClose,
} from "@/shared/components/ui";

export const CartDrawer = ({ children }: { children: React.ReactNode }) => {
  const [
    totalAmount,
    items,
    fetchCartItems,
    updateItemQuantity,
    removeCartItem,
  ] = useCartStore((state) => [
    state.totalAmount,
    state.items,
    state.fetchCartItems,
    state.updateItemQuantity,
    state.removeCartItem,
  ]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;

    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent
        className={cn("flex flex-col bg-[#F4F1EE]", {
          "justify-center": totalAmount === 0,
          "justify-between pb-0": totalAmount > 0,
        })}
      >
        {totalAmount > 0 && (
          <SheetHeader>
            <SheetTitle>
              In cart <span className="font-bold">{items.length} items</span>
            </SheetTitle>
          </SheetHeader>
        )}

        {!totalAmount && (
          <div className="flex flex-col items-center justify-center w-72 mx-auto">
            <Image
              src="/assets/images/empty-box.png"
              alt="Empty cart"
              width={120}
              height={120}
            />
            <Title
              size="sm"
              text="Your cart is empty"
              className="text-center font-bold my-2"
            />
            <p className="text-center text-neutral-500 mb-5">
              Add at least one pizza to make an order
            </p>

            <SheetClose>
              <Button className="w-56 h-12 text-base" size="lg">
                <ArrowLeft className="w-5 mr-2" />
                Go back
              </Button>
            </SheetClose>
          </div>
        )}

        {totalAmount > 0 && (
          <>
            <div className="-mx-6 mt-5 overflow-auto flex flex-col gap-3 flex-1">
              {items.length > 0 &&
                items.map((item) => (
                  <CartDrawerItem
                    key={item.id}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    details={
                      item.pizzaSize && item.pizzaType
                        ? getCartItemDetails(
                            item.ingredients,
                            item.pizzaType as PizzaType,
                            item.pizzaSize as PizzaSize
                          )
                        : ""
                    }
                    onClickCountButton={(type) =>
                      onClickCountButton(item.id, item.quantity, type)
                    }
                    onClickRemove={() => removeCartItem(item.id)}
                    disabled={item.disabled}
                  />
                ))}
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
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
