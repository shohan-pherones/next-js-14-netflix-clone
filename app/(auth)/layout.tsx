import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src="/login_background.jpg"
        alt="Background image"
        fill
        priority
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
      />
      <Image
        src="/logo.svg"
        alt="Logo"
        width={120}
        height={120}
        priority
        className="absolute left-4 top-4 object-cover md:left-10 md:top-6"
      />
      {children}
    </div>
  );
};

export default AuthLayout;
