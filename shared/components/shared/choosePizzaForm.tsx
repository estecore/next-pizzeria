"use client";

import { cn, getPizzaDetails } from "@/shared/lib/";

import { Ingredient, ProductItem } from "@prisma/client";

import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";

import { usePizzaOptions } from "@/shared/hooks";

import { GroupVariants, IngredientItem, ProductImage, Title } from "./index";
import { Button } from "../ui";

export const ChoosePizzaForm = ({
  name,
  items,
  imageUrl,
  ingredients,
  onSubmit,
  loading,
  className,
}: {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onSubmit: (itemId: number, ingredients: number[]) => void;
  loading: boolean;
  className?: string;
}) => {
  const {
    size,
    type,
    availableSizes,
    selectedIngredients,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);

  const { textDetaills, totalPrice } = getPizzaDetails(
    items,
    ingredients,
    size,
    type,
    selectedIngredients
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} alt={name} size={size} isPizzaForm />

      <div className="flex flex-col w-[490px] bg-[#FCFCFC] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={availableSizes}
            selectedValue={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            selectedValue={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[380px] overflow-auto scrollbar my-3">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-auto"
        >
          Add to cart - {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
