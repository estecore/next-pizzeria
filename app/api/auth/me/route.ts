import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma/prismaClient";

import { getUserSession } from "@/shared/lib/getUserSession";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const user = await getUserSession();

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "[GET_ME] Server error" },
      { status: 500 }
    );
  }
};
