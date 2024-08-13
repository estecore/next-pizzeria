import { cn } from "@/lib/utils";

const cats: string[] = [
  "Pizzas",
  "Kombo",
  "Snacks",
  "Cocktails",
  "Coffee",
  "Drinks",
  "Deserts",
  "Deserts",
];
const activeIndex: number = 0;

export const Categories = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
