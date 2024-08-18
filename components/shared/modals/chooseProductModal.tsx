"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

import { Product } from "@prisma/client";

import { Dialog } from "@/components/ui";
import { DialogContent } from "@/components/ui/dialog";
import { Title } from "../index";

export const ChooseProductModal = ({
  className,
  product,
}: {
  className?: string;
  product: Product;
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
        <Title text={product.name} />
      </DialogContent>
    </Dialog>
  );
};
