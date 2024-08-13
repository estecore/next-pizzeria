import { cn } from "@/lib/utils";

import { ArrowUpDown } from "lucide-react";

export const SortPopup = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Sort by:</b>

      <b className="text-primary">popularity</b>
    </div>
  );
};
