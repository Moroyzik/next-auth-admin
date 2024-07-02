"use client";

import { logout } from "@/actions/logout";

type Props = {
  children?: React.ReactNode;
};

export const LogoutButton = ({ children }: Props) => {
  const handleClick = () => {
    logout();
  };

  return (
    <span onClick={handleClick} className="cursor-pointer">
      {children}
    </span>
  );
};
