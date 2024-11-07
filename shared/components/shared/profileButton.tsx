import Link from "next/link";
import { useSession } from "next-auth/react";

import { CircleUser, User } from "lucide-react";

import { Button } from "../ui";

export const ProfileButton = ({
  className,
  onClickSignIn,
}: {
  className?: string;
  onClickSignIn?: VoidFunction;
}) => {
  const { data: session } = useSession();

  return (
    <div className={className}>
      {session ? (
        <Link href="/profile">
          <Button variant="secondary" className="flex items-center gap-2">
            <CircleUser size={18} />
            {session.user?.name || "Profile"}
          </Button>
        </Link>
      ) : (
        <Button
          onClick={onClickSignIn}
          variant={"outline"}
          className="flex items-center gap-1"
        >
          <User size={16} />
          Log in
        </Button>
      )}
    </div>
  );
};
