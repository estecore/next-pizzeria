import { Ingredient } from "@prisma/client";

import { mapPizzaType, PizzaSize, PizzaType } from "@/shared/constants/pizza";

export const CartItemInfo = ({
  name,
  pizzaSize,
  type,
  ingredients,
}: {
  name: string;
  pizzaSize?: PizzaSize;
  type?: PizzaType;
  ingredients?: Ingredient[];
}) => {
  const details: string[] = [];

  if (pizzaSize && type) {
    const typeName = mapPizzaType[type];
    details.push(`${typeName} ${pizzaSize} sm `);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {details.length > 0 && (
        <p className="text-xs text-gray-400">{details.join(", ")}</p>
      )}
    </div>
  );
};
