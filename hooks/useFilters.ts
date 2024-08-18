import { useState } from "react";
import { useSet } from "react-use";

import { useSearchParams } from "next/navigation";

export const useFilters = () => {
  const searchParams = useSearchParams();

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.get("sizes")?.split(","))
  );
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(searchParams.get("pizzaTypes")?.split(","))
  );

  const [prices, setPrice] = useState<{
    priceFrom?: number;
    priceTo?: number;
  }>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: "priceFrom" | "priceTo", value: number) => {
    setPrice((prev) => ({ ...prev, [name]: value }));
  };

  return {
    selectedIngredients,
    setSelectedIngredients: toggleIngredients,
    sizes,
    setSizes: toggleSizes,
    pizzaTypes,
    setPizzaTypes: togglePizzaTypes,
    prices,
    setPrice: updatePrice,
  };
};
