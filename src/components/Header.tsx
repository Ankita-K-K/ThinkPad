import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./DarkModeToggle";
import LogoutButton from "./LogoutButton";
import { getUser } from "@/auth/server";

async function Header() {
  const user = await getUser();
  return (
    <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 shadow-xl sm:px-8">
      <Link href="/" aria-label="Go to homepage">
        <div className="flex items-end gap-2">
          <Image
            src="/logo.png"
            height={60}
            width={60}
            alt="ThinkPad Logo"
            className="rounded-full"
            priority
          />
          <h1 className="flex flex-col pb-1 text-2xl leading-6 font-semibold">
            Think <span>Pad</span>
          </h1>
        </div>
      </Link>
      <div className="flex gap-4">
        {user ? (
          <LogoutButton />
        ) : (
          <>
            <Button asChild className="hidden sm:block">
              <Link href="/signup">
                <p>Sign Up</p>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
