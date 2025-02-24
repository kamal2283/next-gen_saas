import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <Link href="dashboard"></Link>
      </aside>
    </header>
  );
};

export default Navbar;
//19:13
