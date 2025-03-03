"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Logo from "./logo";

const Header = () => {
  const pathname = usePathname();

  // Hide header if not on the root route ('/')
  if (pathname !== "/") return null;

  return (
    <header className="bg-white py-8">
      <div className=" flex items-center mx-auto max-w-screen-2xl justify-between px-4">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
