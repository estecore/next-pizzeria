import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma/prismaClient";

import { updateCartTotalAmount } from "@/shared/lib/updateCartTotalAmount";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const id = Number(params.id);
    const body = (await req.json()) as { quantity: number };
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Cart token not found" },
        { status: 401 }
      );
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      );
    }

    prisma.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity: body.quantity,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return updatedUserCart;
  } catch (error) {
    console.log("CART PATCH server error", error);
    return NextResponse.json(
      { message: "Something went wrong when cart update" },
      { status: 500 }
    );
  }
};
