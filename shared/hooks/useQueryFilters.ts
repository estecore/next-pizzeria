import { useEffect, useRef } from "react";

import { useRouter } from "next/navigation";

import qs from "qs";

interface Filters {
  prices: {
    priceFrom?: number;
    priceTo?: number;
  };
  pizzaTypes: Set<string>;
  sizes: Set<string>;
  selectedIngredients: Set<string>;
}

export const useQueryFilters = (filters: Filters) => {
  const isMounted = useRef(false);

  const router = useRouter();

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.prices,
        pizzaTypes: Array.from(filters.pizzaTypes),
        sizes: Array.from(filters.sizes),
        ingredients: Array.from(filters.selectedIngredients),
      };

      const query = qs.stringify(params, {
        arrayFormat: "comma",
      });

      router.push(`?${query}`, {
        scroll: false,
      });
    }

    isMounted.current = true;
  }, [
    filters.pizzaTypes,
    filters.prices,
    filters.selectedIngredients,
    filters.sizes,
    router,
  ]);
};
