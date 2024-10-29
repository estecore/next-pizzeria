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
      where: { id },
    });

    if (!cartItem) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      );
    }

    await prisma.cartItem.update({
      where: { id },
      data: { quantity: body.quantity },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart, { status: 200 });
  } catch (error) {
    console.log("CART PATCH server error", error);
    return NextResponse.json(
      { message: "Something went wrong when updating the cart" },
      { status: 500 }
    );
  }
};

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const cartToken = req.cookies.get("cartToken")?.value;

    if (!cartToken) {
      return NextResponse.json({ error: "Cart token not found" });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: "Cart item not found" });
    }

    await prisma.cartItem.delete({
      where: {
        id: cartItem.id,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(cartToken);

    return NextResponse.json(updatedUserCart, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "[CART_DELETE] Server error" },
      { status: 500 }
    );
  }
}
