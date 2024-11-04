"use server";

import { cookies } from "next/headers";

import { prisma } from "@/prisma/prismaClient";
import { OrderStatus } from "@prisma/client";

import { TypeCheckoutForm } from "@/shared/schemas";

export const createOrder = async (data: TypeCheckoutForm) => {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get("cartToken")?.value;

    if (!cartToken) {
      throw new Error("Cart token not found");
    }

    // find cart
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        cartItems: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    // if cart not found
    if (!userCart) {
      throw new Error("Cart not found");
    }

    if (userCart?.totalAmount === 0) {
      throw new Error("Cart is empty");
    }

    // create order
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + " " + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.cartItems),
      },
    });

    // clear cart
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    // TODO: create url to payment
  } catch (error) {
    console.log(error);
  }
};
