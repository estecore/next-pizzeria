"use client";

import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";

import { cn } from "@/lib/utils";

import { Title, ProductCard } from "./index";

export const ProductsGroupList = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}: {
  title: string;
  items: any[];
  categoryId: string;
  listClassName?: string;
  className?: string;
}) => {
  const setActiveId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(categoryId);
    }
  }, [intersection?.isIntersecting]);

  return (
    <div className={className} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div
        ref={intersectionRef}
        className={cn("grid grid-cols-3 gap-[50px]", listClassName)}
      >
        {items
          .filter((product) => product.items.length > 0)
          .map((product, i) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))}
      </div>
    </div>
  );
};
