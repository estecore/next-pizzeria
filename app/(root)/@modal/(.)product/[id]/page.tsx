import { notFound } from "next/navigation";

import { prisma } from "@/prisma/prismaClient";
import { ChooseProductModal } from "@/components/shared";

const ProductModalPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      productItems: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
};

export default ProductModalPage;
