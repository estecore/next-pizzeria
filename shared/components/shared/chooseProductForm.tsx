import { cn } from "@/shared/lib/utils";

import { ProductImage, Title } from "./index";
import { Button } from "../ui";

export const ChooseProductForm = ({
  name,
  imageUrl,
  price,
  textDetaills,
  onSubmit,
  loading,
  className,
}: {
  imageUrl: string;
  name: string;
  price: number;
  textDetaills?: string;
  onSubmit: VoidFunction;
  loading: boolean;
  className?: string;
}) => {
  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage
        imageUrl={imageUrl}
        alt={name}
        size={30}
        isPizzaForm={false}
      />

      <div className="w-[490px] bg-[#FCFCFC] p-7 flex flex-col justify-between">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        {textDetaills && <p className="text-gray-400">{textDetaills}</p>}
        <Button
          loading={loading}
          onClick={() => onSubmit()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Add to cart - {price} ₽
        </Button>
      </div>
    </div>
  );
};
