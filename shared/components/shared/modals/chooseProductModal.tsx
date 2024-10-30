"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/shared/lib/utils";

import { useCartStore } from "@/shared/store";

import { ProductWithRelations } from "@/@types/prisma";

import toast from "react-hot-toast";

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { ChoosePizzaForm, ChooseProductForm } from "../index";

export const ChooseProductModal = ({
  className,
  product,
}: {
  className?: string;
  product: ProductWithRelations;
}) => {
  const router = useRouter();

  const firstItem = product.productItems[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  const [loading, addCartItem] = useCartStore((state) => [
    state.loading,
    state.addCartItem,
  ]);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({ productItemId: itemId, ingredients });

      toast.success(`${product.name} added to cart`);
      router.back();
    } catch (error) {
      console.error(error);
      toast.error(`Failed to add product to cart`);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.productItems}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            name={product.name}
            imageUrl={product.imageUrl}
            price={firstItem.price}
            onSubmit={onSubmit}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
