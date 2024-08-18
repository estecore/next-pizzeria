"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

import { ProductWithRelations } from "@/@types/prisma";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChoosePizzaForm, ChooseProductForm } from "../index";

export const ChooseProductModal = ({
  className,
  product,
}: {
  className?: string;
  product: ProductWithRelations;
}) => {
  const router = useRouter();

  const isPizzaForm = Boolean(product.productItems[0].pizzaType);

  console.log(product);

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
          />
        ) : (
          <ChooseProductForm name={product.name} imageUrl={product.imageUrl} />
        )}
      </DialogContent>
    </Dialog>
  );
};
