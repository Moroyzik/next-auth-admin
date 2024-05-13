"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { OAUTH_PROVIDER } from "@/constants";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { Button } from "../ui/button";

export const Social = () => {
  const handleClick = (provider: OAUTH_PROVIDER) => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => handleClick(OAUTH_PROVIDER.google)}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>

      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => handleClick(OAUTH_PROVIDER.github)}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};