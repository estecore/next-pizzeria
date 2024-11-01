import Image from "next/image";

import { cn } from "@/shared/lib/utils";

import { CircleCheck } from "lucide-react";

export const IngredientItem = ({
  className,
  active,
  price,
  name,
  imageUrl,
  onClick,
}: {
  className?: string;
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white",
        { "border border-primary p-[3px]": active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute top-2 right-2 text-primary" />
      )}
      <Image width={110} height={110} src={imageUrl} alt={name} />
      <span className="text-xs mb-1">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  );
};
