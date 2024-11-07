import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { cn } from "@/shared/lib";

import { Button } from "../ui/button";
import { Title } from "./title";

export const InfoBlock = ({
  className,
  title,
  text,
  imageUrl,
}: {
  title: string;
  text: string;
  className?: string;
  imageUrl?: string;
}) => {
  return (
    <div
      className={cn(
        className,
        "flex items-center justify-between w-[840px] gap-12"
      )}
    >
      <div className="flex flex-col">
        <div className="w-[445px]">
          <Title size="lg" text={title} className="font-extrabold" />
          <p className="text-gray-400 text-lg">{text}</p>
        </div>

        <div className="flex gap-5 mt-11">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft />
              To Home
            </Button>
          </Link>
          <a href="">
            <Button
              variant="outline"
              className="text-gray-500 border-gray-400 hover:bg-gray-50"
            >
              Update
            </Button>
          </a>
        </div>
      </div>

      <img src={imageUrl} alt={title} width={300} />
    </div>
  );
};
