import { prisma } from "@/prisma/prismaClient";

export const findOrCreateCart = async (token: string) => {
  try {
    let userCart = await prisma.cart.findFirst({
      where: { token },
    });

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: { token },
      });
    }

    return userCart;
  } catch (error) {
    console.log("findOrCreateCart error", error);
  }
};
