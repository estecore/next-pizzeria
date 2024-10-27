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
}

export const CartDrawerItem = ({
  classNames,
  id,
  imageUrl,
  name,
  details,
  quantity,
  price,
}: CartDrawerItemProps) => {
  return (
    <div className={cn("flex bg-white p-5 gap-6", classNames)}>
      <CartItemDetailsImage src={imageUrl} />

      <div className="flex-1">
        <CartItemInfo name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton
            onClick={(type) => {
              console.log(type);
            }}
            value={quantity}
          />

          <div className="flex items-center gap-3">
            <CartItemDetailsPrice value={price} />
            <Trash2Icon
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
