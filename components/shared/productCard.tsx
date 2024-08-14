import Link from "next/link";
import Image from "next/image";

import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

import { Title } from "./index";

import { Button } from "@/components/ui/index";

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  className,
}: {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
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
          Chicken, mozzarella, cheddar and parmesan cheese, cheese sauce,
          tomatoes, alfredo sauce, garlic
        </p>

        <div className="flex justi fy-between items-center mt-4">
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
