import {
  Container,
  Filters,
  ProductCard,
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
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard
                id="1"
                name="Hawaiian"
                price={350}
                imageUrl="https://media.dodostatic.net/image/r:584x584/11EE7D617E9339CFB185921A343AD8FD.avif"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
