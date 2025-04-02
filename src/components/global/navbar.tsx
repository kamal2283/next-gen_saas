import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">AutoBuild</p>
        <Image
          src="/vercel.svg"
          alt="AutoBuild"
          width={15}
          height={15}
          className="shadow-sm"
        />
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="a">Products</Link>
          </li>
          <li>
            <Link href="a">Pricing</Link>
          </li>
          <li>
            <Link href="a">Clients</Link>
          </li>
          <li>
            <Link href="a">Resources</Link>
          </li>
          <li>
            <Link href="a">Documentation</Link>
          </li>
          <li>
            <Link href="a">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {/* WIP: wire up user  */}
            {true ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        {/* WIP : wire up user  */}
        <MenuIcon className="md:hidden" />
        <UserButton />
      </aside>
    </header>
  );
};

export default Navbar;
//22:55
