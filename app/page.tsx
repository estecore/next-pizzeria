import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    id: "1",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "2",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "3",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "4",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "5",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "6",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "7",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "8",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Kombo"
                items={[
                  {
                    id: "1",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "2",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "3",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "4",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "5",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "6",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "7",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "8",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                ]}
                categoryId={2}
              />
              <ProductsGroupList
                title="Snacks"
                items={[
                  {
                    id: "1",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "2",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "3",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "4",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "5",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "6",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "7",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                  {
                    id: "8",
                    name: "Hawaiian",
                    price: 320,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif",
                    items: [{ price: 320 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
