import { cn } from "@/shared/lib";

export const ErrorText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <p className={cn("text-red-500 text-sm", className)}>{text}</p>;
};
