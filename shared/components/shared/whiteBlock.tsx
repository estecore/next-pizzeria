import { cn } from "@/shared/lib";

import { Title } from "./title";

export const WhiteBlock = ({
  title,
  endAdornment,
  className,
  contentClassName,
  children,
}: {
  className?: string;
  contentClassName?: string;
  title?: string;
  endAdornment?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("bg-white rounded-3xl", className)}>
      {title && (
        <div className="flex items-center justify-between p-5 px-7 border-b border-gray-100">
          <Title text={title} size="sm" className="font-bold" />
          {endAdornment}
        </div>
      )}

      <div className={cn("px-5 py-4", contentClassName)}>{children}</div>
    </div>
  );
};
