import { cn } from "@/lib/utils";

import { ProductImage, Title } from "./index";
import { Button } from "../ui";

export const ChooseProductForm = ({
  name,
  imageUrl,
  onClickAdd,
  className,
}: {
  imageUrl: string;
  name: string;
  onClickAdd?: VoidFunction;
  className?: string;
}) => {
  const textDetaills =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, dignissimos.";
  const totalPrice = "156";
  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage
        imageUrl={imageUrl}
        alt={name}
        size={30}
        isPizzaForm={false}
      />

      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetaills}</p>

        <Button
          //   loading={loading}
          //   onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Add to cart - {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
