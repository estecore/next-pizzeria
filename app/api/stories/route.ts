import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prismaClient";

export const GET = async () => {
  const stories = await prisma.story.findMany({
    include: {
      items: true,
    },
  });

  return NextResponse.json(stories);
};
