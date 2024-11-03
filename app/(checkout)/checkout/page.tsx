"use client";

import { PizzaType, PizzaSize } from "@/shared/constants/pizza";

import { useCart } from "@/shared/hooks";

import { getCartItemDetails } from "@/shared/lib";

import {
  CheckoutItem,
  CheckoutSidebar,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Input, Textarea } from "@/shared/components/ui";
import { CheckoutItemSkeleton } from "@/shared/components/shared/skeletons";

export default function CheckoutPage() {
  const { totalAmount, items, loading, removeCartItem, updateItemQuantity } =
    useCart();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;

    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title text="Checkout" className="font-extrabold mb-8 text-[36px]" />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">
            <div className="flex flex-col gap-5">
              {items.map((item, index) =>
                loading ? (
                  <CheckoutItemSkeleton key={index} />
                ) : (
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
                )
              )}
            </div>
          </WhiteBlock>
          <WhiteBlock title="2. Personal info">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="First Name"
              />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Last Name"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Phone" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Address">
            <div className="flex flex-col gap-5">
              <Input
                name="address"
                className="text-base"
                placeholder="Address"
              />
              <Textarea
                name="comments"
                rows={5}
                className="text-base"
                placeholder="Comments to order"
              />
            </div>
          </WhiteBlock>
        </div>

        {/* RIGHT */}

        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}
