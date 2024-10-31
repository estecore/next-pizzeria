import { prisma } from "@/prisma/prismaClient";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 1000;

export const findPizzas = async (params: GetSearchParams) => {
  const sizes: number[] | undefined = params.sizes?.split(",").map(Number);
  const pizzaTypes: number[] | undefined = params.pizzaTypes
    ?.split(",")
    .map(Number);
  const ingredientsArr: number[] | undefined = params.ingredients
    ?.split(",")
    .map(Number);

  const minPrice: number = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
  const maxPrice: number = Number(params.priceTo) || DEFAULT_MAX_PRICE;

  const categories = prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: "desc",
        },
        where: {
          ingredients: ingredientsArr
            ? { some: { id: { in: ingredientsArr } } }
            : undefined,
          productItems: {
            some: {
              size: { in: sizes },
              pizzaType: { in: pizzaTypes },
              price: { gte: minPrice, lte: maxPrice },
            },
          },
        },
        include: {
          ingredients: true,
          productItems: {
            where: {
              price: { gte: minPrice, lte: maxPrice },
            },
            orderBy: { price: "asc" },
          },
        },
      },
    },
  });

  return categories;
};
