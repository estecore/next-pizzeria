import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma/prismaClient";

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
      { message: "Failed to fetch cart", error },
      { status: 500 }
    );
  }
};
