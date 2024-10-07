"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleSignInButton = () => {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image
        src="/google.svg"
        alt="Google icon"
        width={16}
        height={16}
        className="w-4 h-4"
      />
    </Button>
  );
};

export default GoogleSignInButton;
