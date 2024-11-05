"use server";

import { cookies } from "next/headers";

import { prisma } from "@/prisma/prismaClient";
import { OrderStatus } from "@prisma/client";

import { createPayment, sendEmail } from "@/shared/lib";

import { TypeCheckoutForm } from "@/shared/schemas";

import { PayOrderTemplate } from "@/shared/components/shared/emailTemplates";

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

    // create payment
    const paymentData = await createPayment({
      amount: userCart.totalAmount,
      description: `Next Pizzeria order #${order.id}`,
      orderId: order.id,
    });

    if (!paymentData) {
      throw new Error("Failed to create payment");
    }

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: paymentData.id,
      },
    });

    const paymentUrl = paymentData.confirmation.confirmation_url;

    // send email
    await sendEmail(
      data.email,
      `Next Pizzeria / Payment order #${order.id}`,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl,
      })
    );

    return paymentUrl;
  } catch (error) {
    console.log("[ACTIONS] server error", error);
  }
};