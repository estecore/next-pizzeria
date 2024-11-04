"use client";

import { cn } from "@/shared/lib";

import { X } from "lucide-react";

import {
  CartItemDetailsImage,
  CartItemDetailsPrice,
  CartItemInfo,
} from "./cartItemDetails";
import { CountButton } from "./countButton";

export const CheckoutItem = ({
  name,
  price,
  imageUrl,
  quantity,
  details,
  className,
  disabled,
  onClickCountButton,
  onClickRemove,
}: {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  details: string;
  disabled?: boolean;
  className?: string;
  onClickCountButton: (type: "plus" | "minus") => void;
  onClickRemove: () => void;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        {
          "opacity-50 pointer-events-none select-none": disabled,
        },
        className
      )}
    >
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetailsImage src={imageUrl} />
        <CartItemInfo name={name} details={details} />
      </div>

      <CartItemDetailsPrice value={price} />

      <div className="flex items-center gap-5 ml-20">
        <CountButton onClick={onClickCountButton} value={quantity} />
        <button type="button" onClick={onClickRemove}>
          <X
            className="text-gray-400 cursor-pointer hover:text-gray-600"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};
