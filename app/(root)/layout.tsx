import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PodcasTR",
  description: "Generate your podcast with AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <main className="grid grid-cols-5 text-white-1 bg-black-3 ">
        <div>
          <LeftSideBar />
          <div className="md:hidden">
            <Image
              src={"/icons/logo.svg"}
              width={30}
              height={30}
              alt="menu_icon"
            />
            MobileNav
            <div>
              <div>Toaster</div>
            </div>
          </div>
        </div>
        <div className="col-span-3 py-14 px-20 bg-black">{children}</div>
        <RightSideBar />
      </main>
    </div>
  );
}
