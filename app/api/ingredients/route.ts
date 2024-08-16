import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prismaClient";

export const GET = async () => {
  const ingredients = await prisma.ingredient.findMany();

  return NextResponse.json(ingredients);
};
