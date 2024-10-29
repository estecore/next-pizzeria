import { NextRequest, NextResponse } from "next/server";

import crypto from "crypto";

import { prisma } from "@/prisma/prismaClient";

import { findOrCreateCart, updateCartTotalAmount } from "@/shared/lib";

import { CreateCartItemValues } from "@/shared/services/dto/cart.dto";

export const GET = async (req: NextRequest) => {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: { token },
      include: {
        cartItems: {
          orderBy: { createdAt: "desc" },
          include: {
            productItem: { include: { product: true } },
            ingredients: true,
          },
        },
      },
    });

    return NextResponse.json(userCart || { totalAmount: 0, items: [] });
  } catch (error) {
    console.log("GET cart error", error);
    return NextResponse.json(
      { message: "Failed to get cart", error },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    let token = req.cookies.get("cartToken")?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as CreateCartItemValues;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart?.id,
        productItemId: data.productItemId,
        ingredients: { every: { id: { in: data.ingredients } } },
      },
    });

    // if findCartItem - update quantity + 1
    if (findCartItem) {
      await prisma.cartItem.update({
        where: { id: findCartItem.id },
        data: { quantity: findCartItem.quantity + 1 },
      });

      const updatedCart = await updateCartTotalAmount(token);

      const resp = NextResponse.json(updatedCart);
      resp.cookies.set("cartToken", token);
      return resp;
    }

    await prisma.cartItem.create({
      data: {
        cartId: userCart?.id,
        productItemId: data.productItemId,
        quantity: 1,
        ingredients: {
          connect: data.ingredients?.map((id) => ({ id })),
        },
      },
    });

    const updatedCart = await updateCartTotalAmount(token);

    const resp = NextResponse.json(updatedCart);
    resp.cookies.set("cartToken", token);
    return resp;
  } catch (error) {
    console.log("POST cart error", error);
    return NextResponse.json(
      { message: "Failed to create cart", error },
      { status: 500 }
    );
  }
};
