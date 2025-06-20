import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 shadow-2xl sm:px-8">
      <Link className="flex items-end gap-2" href="/">
        <Image src="/logo.png" alt="ThinkPad-logo" height={80} width={70} />
        <h1 className="flex flex-col pb-1 text-2xl leading-6 font-semibold">
          Think <span>Pad</span>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
