import { cn } from "@/shared/lib";

export const RequiredSymbol = ({ className }: { className?: string }) => {
  return <span className={cn("text-red-500", className)}>*</span>;
};
