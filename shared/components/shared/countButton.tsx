import { cn } from "@/shared/lib";

import { CountIconButton } from ".";

export const CountButton = ({
  className,
  onClick,
  value = 1,
  size = "sm",
}: {
  className?: string;
  onClick?: (type: "plus" | "minus") => void;
  value?: number;
  size?: "sm" | "lg";
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-between gap-3",
        className
      )}
    >
      <CountIconButton
        onClick={() => onClick?.("minus")}
        disabled={value === 1}
        size={size}
        type="minus"
      />

      <b className={size === "sm" ? "text-sm" : "text-md"}>{value}</b>

      <CountIconButton
        onClick={() => onClick?.("plus")}
        size={size}
        type="plus"
      />
    </div>
  );
};
