import Image from "next/image";

import { cn } from "@/shared/lib";

export const CartItemDetailsImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  return (
    <Image
      className={cn("w-[60px] h-[60px]", className)}
      src={src}
      width={60}
      height={60}
      alt={src}
    />
  );
};
