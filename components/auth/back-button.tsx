"use client";

import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export const BackButton = ({ label, href }: Props) => {
  return (
    <Button className="font-normal w-full" variant="link" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
