"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/shared/lib/utils";

import { ProductWithRelations } from "@/@types/prisma";

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";

import { ProductForm } from "../index";

export const ChooseProductModal = ({
  className,
  product,
}: {
  className?: string;
  product: ProductWithRelations;
}) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
