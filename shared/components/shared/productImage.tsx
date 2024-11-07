import Image from "next/image";

import { cn } from "@/shared/lib/utils";

export const ProductImage = ({
  imageUrl,
  size,
  alt,
  isPizzaForm,
  className,
}: {
  imageUrl: string;
  size: 20 | 30 | 40;
  alt: string;
  isPizzaForm?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center flex-1 relative w-full",
        className
      )}
    >
      {isPizzaForm ? (
        <>
          <Image
            src={imageUrl}
            alt={alt}
            className={cn(
              "relative left-2 top-2 transition-all z-10 duration-300",
              {
                20: "w-[300px] h-[300px]",
                30: "w-[400px] h-[400px]",
                40: "w-[500px] h-[500px]",
              }[size]
            )}
            width={100}
            height={100}
          />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]" />
        </>
      ) : (
        <Image
          src={imageUrl}
          alt={alt}
          className={cn(
            "relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
          )}
          width={350}
          height={350}
        />
      )}
    </div>
  );
};
