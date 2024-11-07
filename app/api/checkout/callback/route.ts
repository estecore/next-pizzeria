import { NextRequest, NextResponse } from "next/server";

import { PaymentCallbackData } from "@/@types/yookassa";
import { CartItemDTO } from "@/shared/services/dto/cart.dto";

import { prisma } from "@/prisma/prismaClient";
import { OrderStatus } from "@prisma/client";

import { sendEmail } from "@/shared/lib";

import { OrderSuccessTemplate } from "@/shared/components/shared/emailTemplates";

export const POST = async (req: NextRequest) => {
  try {
    const body = (await req.json()) as PaymentCallbackData;

    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.order_id),
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const isSucceeded = body.object.status === "succeeded";

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELED,
      },
    });

    const items = JSON.parse(order.items as string) as CartItemDTO[];

    if (isSucceeded) {
      await sendEmail(
        order.email,
        `Next Pizzeria | Your order #${order.id} has been paid! 🎉`,
        OrderSuccessTemplate({ orderId: order.id, items })
      );
    } else {
      // TODO: email when order is canceled
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.log("[CHECKOUT CALLBACK] error:", error);

    return NextResponse.json({ error }, { status: 500 });
  }
};
