import Link from "next/link";
import Image from "next/image";

import { Plus } from "lucide-react";

import { Ingredient } from "@prisma/client";

import { cn } from "@/shared/lib/utils";

import { Title } from "./index";

import { Button } from "@/shared/components/ui/index";

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}: {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image
            className="w-[215px] h-[215px]"
            width={215}
            height={215}
            src={imageUrl}
            alt={name}
          />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          {ingredients.map((ingredient) => ingredient.name).join(", ")}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
