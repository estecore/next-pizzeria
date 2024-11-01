"use client";

import { useRef, useEffect } from "react";
import { useIntersection } from "react-use";

import { ProductWithRelations } from "@/@types/prisma";

import { useCategoryStore } from "@/shared/store";

import { cn } from "@/shared/lib/utils";

import { Title, ProductCard } from "./index";

export const ProductsGroupList = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}: {
  title: string;
  items: ProductWithRelations[];
  listClassName?: string;
  categoryId: number;
  className?: string;
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.3,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={i}
            id={product.id}
            name={product.name}
            price={product?.productItems?.[0]?.price}
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
