"use client";

import Logo from "@/assets/Logo";
import Button from "@/components/Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";

const Header = () => {
  const path = usePathname();
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("login");
  };

  return (
    <header className="header">
      <Link href={"/"}>
        <Logo />
      </Link>
      <div className="right">
        {path !== "/login" && <Button onClick={handleClick}>Je me connecte</Button>}
      </div>
    </header>
  );
};

export default Header;
