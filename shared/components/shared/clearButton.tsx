import { cn } from "@/shared/lib";
import { X } from "lucide-react";

export const ClearButton = ({
  onClick,
  className,
}: {
  onClick: VoidFunction;
  className?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "absolute right-4 top-1/2 -translate-y-1/2 transition-opacity opacity-30 hover:opacity-100 cursor-pointer",
        className
      )}
    >
      <X className="h-5 w-5" />
    </button>
  );
};
