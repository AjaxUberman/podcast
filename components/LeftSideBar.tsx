"use client";
import { sidebarLinks } from "@/constants";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const LeftSideBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();

  const isActive = (url: string) => {
    const active = pathname === url || pathname.startsWith(`${url}/`);
    return active;
  };

  return (
    <div className="left_sidebar px-8 ">
      <nav className="flex flex-col gap-6 lg:pt-10">
        <Link
          href={"/"}
          className="flex gap-2 text-white-2 items-center hover:scale-105 ease-in transition duration-400"
        >
          <PlayCircleIcon />
          <h1 className="text-3xl font-extrabold text-orange-1 ">PodcasTR</h1>
        </Link>
        <div className="flex flex-col gap-5 pt-8">
          {sidebarLinks.map((item, index) => (
            <Link
              href={item.route}
              key={index}
              className={`flex gap-3 hover:text-orange-1 items-center py-2 transition duration-100 ease-in ${
                isActive(item.route) === true
                  ? "text-white-1 bg-gradient-to-r from-black-1 to-black-2  border-r-2 border-orange-400"
                  : "text-white-3"
              }`}
            >
              <Image
                alt={item.label}
                src={item.imgURL}
                width={20}
                height={20}
              />
              <h3 className="font-semibold text-xl">{item.label}</h3>
            </Link>
          ))}
        </div>
      </nav>
      <SignedOut>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button asChild className="text-16 w-full bg-orange-1 font-extrabold">
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button
            className="text-16 w-full bg-orange-1 font-extrabold"
            onClick={() => signOut(() => router.push("/"))}
          >
            Log Out
          </Button>
        </div>
      </SignedIn>
    </div>
  );
};

export default LeftSideBar;
