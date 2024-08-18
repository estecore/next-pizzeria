import { Category } from "@prisma/client";

import { cn } from "@/shared/lib/utils";

import { Categories, Container, SortPopup } from "./index";

export const TopBar = ({
  className,
  categories,
}: {
  className?: string;
  categories: Category[];
}) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
