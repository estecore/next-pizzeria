import { notFound } from "next/navigation";

import { prisma } from "@/prisma/prismaClient";

import {
  Container,
  GroupVariants,
  ProductImage,
  Title,
} from "@/shared/components/shared";

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage
          imageUrl={product.imageUrl}
          alt={product.name}
          size={30}
        />

        <div className="w-[490px] bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
            dignissimos.
          </p>

          <GroupVariants
            selectedValue="2"
            items={[
              { name: "S", value: "1" },
              { name: "M", value: "2" },
              { name: "L", value: "3", disabled: true },
            ]}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
