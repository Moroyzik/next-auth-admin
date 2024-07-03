"use client"

import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

const UserPage = async () => {
  const user = await currentUser();

  return <UserInfo label="📱 Client component" user={user} />;
};

export default UserPage;
