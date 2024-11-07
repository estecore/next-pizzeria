import { PizzaSize, PizzaType } from "@/shared/constants/pizza";

import { CartStateItem, getCartItemDetails } from "@/shared/lib";

import { CheckoutItem } from "../checkoutItem";
import { CheckoutItemSkeleton } from "../skeletons";
import { WhiteBlock } from "../whiteBlock";

export const CheckoutCart = ({
  items,
  loading,
  onClickCountButton,
  removeCartItem,
  className,
}: {
  items: CartStateItem[];
  loading: boolean;
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  removeCartItem: (id: number) => void;
  className?: string;
}) => {
  return (
    <WhiteBlock title="1. Cart" className={className}>
      <div className="flex flex-col gap-5">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <CheckoutItemSkeleton key={index} />
            ))
          : items.map((item) => (
              <CheckoutItem
                key={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                quantity={item.quantity}
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
    </WhiteBlock>
  );
};
