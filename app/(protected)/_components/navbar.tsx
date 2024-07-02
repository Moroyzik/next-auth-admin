"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

const BUTTON_LIST = [
  { href: "/server", label: "Server" },
  { href: "/client", label: "Client" },
  {
    href: "/admin",
    label: "Admin",
  },
  { href: "/settings", label: "Settings" },
] as const;

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        {BUTTON_LIST.map((v) => (
          <Button
            key={v.href}
            asChild
            variant={pathname === v.href ? "default" : "outline"}
          >
            <Link href={v.href}>{v.label}</Link>
          </Button>
        ))}
      </div>

      <UserButton />
    </nav>
  );
};
