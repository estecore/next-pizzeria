import { cn } from "@/shared/lib";

export const CartItemDetailsPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  return <h2 className={cn("font-bold", className)}>{value} ₽</h2>;
};
