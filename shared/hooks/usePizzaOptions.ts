import { useEffect, useState } from "react";
import { useSet } from "react-use";

import { getAvailablePizzaSizes } from "../lib";

import { ProductItem } from "@prisma/client";

import { PizzaSize, PizzaType } from "../constants/pizza";

export const usePizzaOptions = (
  items: ProductItem[]
): {
  size: PizzaSize;
  type: PizzaType;
  availableSizes: { name: string; value: string; disabled: boolean }[];
  selectedIngredients: Set<number>;
  currentItemId?: number;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  addIngredient: (id: number) => void;
} => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const availableSizes = getAvailablePizzaSizes(items, type);

  const currentItemId = items.find(
    (item) => item.pizzaType === type && item.size === size
  )?.id;

  useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [availableSizes, size, type]);

  return {
    size,
    type,
    availableSizes,
    selectedIngredients,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  };
};
