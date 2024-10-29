import { prisma } from "@/prisma/prismaClient";

import { calcCartItemTotalPrice } from "./calcCartItemTotalPrice";

import { CartItemDTO } from "../services/dto/cart.dto";

export const updateCartTotalAmount = async (token: string) => {
  const userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
    include: {
      cartItems: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          productItem: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });

  if (!userCart) return;

  const totalAmount = userCart.cartItems.reduce(
    (acc, item) => acc + calcCartItemTotalPrice(item as CartItemDTO),
    0
  );

  return await prisma.cart.update({
    where: {
      userId: userCart.id,
    },
    data: {
      totalAmount,
    },
    include: {
      cartItems: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          productItem: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });
};
