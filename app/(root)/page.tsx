import { Suspense } from "react";

import { prisma } from "@/prisma/prismaClient";

import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/shared/components/shared";

const Home = async () => {
  const categories = prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          productItems: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar
        categories={(await categories).filter(
          (category) => category.products.length > 0
        )}
      />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {(await categories).map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
