"use client";

import { cn } from "@/lib/utils";

import { useCategoryStore } from "@/store/category";

const cats: { id: number; name: string }[] = [
  { id: 1, name: "Pizzas" },
  { id: 2, name: "Kombo" },
  { id: 3, name: "Snacks" },
  { id: 4, name: "Cocktails" },
  { id: 5, name: "Coffee" },
  { id: 6, name: "Drinks" },
  { id: 7, name: "Deserts" },
  { id: 8, name: "Deserts" },
];

export const Categories = ({ className }: { className?: string }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map(({ id, name }, index) => (
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
