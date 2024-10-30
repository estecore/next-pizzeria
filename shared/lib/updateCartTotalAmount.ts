import { prisma } from "@/prisma/prismaClient";

import { calcCartItemTotalPrice } from "./calcCartItemTotalPrice";

import { CartItemDTO } from "../services/dto/cart.dto";

export const updateCartTotalAmount = async (token: string) => {
  const userCart = await prisma.cart.findFirst({
    where: { token },
    include: {
      cartItems: {
        orderBy: { createdAt: "desc" },
        include: {
          productItem: {
            include: { product: true },
          },
          ingredients: true,
        },
      },
    },
  });

  if (!userCart) return null;

  const totalAmount = userCart.cartItems.reduce(
    (acc, item) => acc + calcCartItemTotalPrice(item as CartItemDTO),
    0
  );

  const updatedCart = await prisma.cart.update({
    where: { id: userCart.id },
    data: { totalAmount },
    include: {
      cartItems: {
        orderBy: { createdAt: "desc" },
        include: {
          productItem: {
            include: { product: true },
          },
          ingredients: true,
        },
      },
    },
  });

  if (!updatedCart.cartItems || updatedCart.cartItems.length === 0) {
    console.log("cartItems missing after update, refetching...");
    return await prisma.cart.findFirst({
      where: { token },
      include: {
        cartItems: {
          orderBy: { createdAt: "desc" },
          include: {
            productItem: {
              include: { product: true },
            },
            ingredients: true,
          },
        },
      },
    });
  }

  return updatedCart;
};
