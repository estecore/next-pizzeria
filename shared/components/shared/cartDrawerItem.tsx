import { cn } from "@/shared/lib";

import { Trash2Icon } from "lucide-react";

import { CountButton } from "./countButton";

import {
  CartItemDetailsImage,
  CartItemDetailsPrice,
  CartItemInfo,
} from "./cartItemDetails";
import { CartItemProps } from "./cartItemDetails/cartItemDetails.types";

interface CartDrawerItemProps extends CartItemProps {
  classNames?: string;
  onClickCountButton: (type: "plus" | "minus") => void;
  onClickRemove: () => void;
}

export const CartDrawerItem = ({
  classNames,
  imageUrl,
  name,
  details,
  quantity,
  price,
  onClickCountButton,
  onClickRemove,
  disabled,
}: CartDrawerItemProps) => {
  return (
    <div
      className={cn(
        "flex bg-white p-5 gap-6 transition-opacity duration-400",
        {
          "opacity-50 pointer-events-none select-none": disabled,
        },
        classNames
      )}
    >
      <CartItemDetailsImage src={imageUrl} />

      <div className="flex-1">
        <CartItemInfo name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className="flex items-center gap-3">
            <CartItemDetailsPrice value={price} />
            <Trash2Icon
              onClick={onClickRemove}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
