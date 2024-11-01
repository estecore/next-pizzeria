"use client";

import { useFilters, useIngredients, useQueryFilters } from "@/shared/hooks";

import { Input } from "../ui/index";

import { CheckboxFiltersGroup, RangeSlider, Title } from "./index";

export const Filters = ({ className }: { className?: string }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrice("priceFrom", prices[0]);
    filters.setPrice("priceTo", prices[1]);
  };

  return (
    <div className={className}>
      <Title
        text="Filters "
        size="sm"
        className="mb-5 font-bold pb-4 border-b border-b-neutral-100"
      />

      <CheckboxFiltersGroup
        title="Type of dough"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Traditional", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Sizes"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: "20 sm", value: "20" },
          { text: "30 sm", value: "30" },
          { text: "40 sm", value: "40" },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrice("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrice("priceTo", Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        className="mt-5 "
        title="Ingredients"
        limit={6}
        loading={loading}
        defaultItems={items.slice(0, 6)}
        items={items}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};
