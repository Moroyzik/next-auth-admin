"use client";

import { useRouter } from 'next/navigation'

type Props = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

export const LoginButton = ({
  asChild,
  mode = "redirect",
  children,
}: Props) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/auth/login')
  };

  if (mode === "modal") {
    return <span>TODO: Implement modal</span>;
  }

  return (
    <span className="cursor-pointer" onClick={handleClick}>
      {children}
    </span>
  );
};
