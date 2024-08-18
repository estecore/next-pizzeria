"use client";

import { Category } from "@prisma/client";

import { cn } from "@/lib/utils";

import { useCategoryStore } from "@/store/category";

export const Categories = ({
  className,
  items,
}: {
  className?: string;
  items: Category[];
}) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {items.map(({ id, name }, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
