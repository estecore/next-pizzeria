import { cn } from "@/shared/lib";

import { Plus, Minus } from "lucide-react";

import { Button } from "../ui";

export const CountIconButton = ({
  size = "sm",
  disabled,
  type,
  onClick,
}: {
  size?: "sm" | "lg";
  disabled?: boolean;
  type?: "plus" | "minus";
  onClick?: () => void;
}) => {
  return (
    <Button
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400",
        size === "sm"
          ? "w-[30px] h-[30px] rounded-[10px]"
          : "w-[38px] h-[38px] rounded-md"
      )}
    >
      {type === "plus" ? (
        <Plus className={size === "sm" ? "h-4" : "h-5"} />
      ) : (
        <Minus className={size === "sm" ? "h-4" : "h-5"} />
      )}
    </Button>
  );
};
