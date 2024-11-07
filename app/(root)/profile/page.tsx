import { redirect } from "next/navigation";

import { prisma } from "@/prisma/prismaClient";

import { getUserSession } from "@/shared/lib/getUserSession";

import { ProfileForm } from "@/shared/components/shared";

const ProfilePage = async () => {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-auth");
  }

  const user = await prisma.user.findFirst({
    where: {
      id: Number(session?.id),
    },
  });

  if (!user) {
    return redirect("/not-auth");
  }

  return <ProfileForm data={user} />;
};

export default ProfilePage;
