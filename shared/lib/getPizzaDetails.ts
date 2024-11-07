import { ProductItem, Ingredient, Product } from "@prisma/client";

import { PizzaSize, PizzaType, mapPizzaType } from "../constants/pizza";

import { calcTotalPizzaPrice } from "./index";

type IProduct = Product & { items: ProductItem[]; ingredients: Ingredient[] };

export const getPizzaDetails = (
  items: IProduct["items"],
  ingredients: Ingredient[],
  size: PizzaSize,
  type: PizzaType,
  selectedIngredients: Set<number>
) => {
  const textDetaills = `${size} sm, ${mapPizzaType[type]} dough, ingredients: ${selectedIngredients.size}`;

  const totalPrice: number = calcTotalPizzaPrice(
    items,
    ingredients,
    size,
    type,
    selectedIngredients
  );

  return { textDetaills, totalPrice };
};
