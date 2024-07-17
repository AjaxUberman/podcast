"use client";
import { sidebarLinks } from "@/constants";
import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathname = usePathname();

  const isActive = (url: string) => {
    const active = pathname === url || pathname.includes(url);
    return active;
  };
  return (
    <div className="left_sidebar h-screen ">
      <nav className="flex flex-col gap-6 lg:pt-20">
        <Link href={"/"} className="flex gap-2 text-white-2 items-center">
          <PlayCircleIcon /> <h1 className="text-3xl font-bold">PodcasTR</h1>
        </Link>
        <div className="flex flex-col gap-5 pt-8">
          {sidebarLinks.map((item, index) => (
            <Link
              href={item.route}
              key={index}
              className={`flex gap-3 items-center py-2 transition duration-100 ease-in ${
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
              <h3 className="font-semibold text-2xl">{item.label}</h3>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
