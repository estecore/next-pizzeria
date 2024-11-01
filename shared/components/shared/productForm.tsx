"use client";

import { ProductWithRelations } from "@/@types/prisma";

import { useCartStore } from "@/shared/store";

import toast from "react-hot-toast";

import { ChoosePizzaForm, ChooseProductForm } from "./";

export const ProductForm = ({
  product,
  onSubmit: _onSubmit,
}: {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}) => {
  const [loading, addCartItem] = useCartStore((state) => [
    state.loading,
    state.addCartItem,
  ]);

  const firstItem = product.productItems[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({ productItemId: itemId, ingredients });

      toast.success(`${product.name} added to cart`);
      _onSubmit?.();
    } catch (error) {
      console.error(error);
      toast.error(`Failed to add product to cart`);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.productItems}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      name={product.name}
      imageUrl={product.imageUrl}
      price={firstItem.price}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};
