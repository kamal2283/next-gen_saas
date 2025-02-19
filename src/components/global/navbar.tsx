import Image from "next/image";
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
    </header>
  );
};

export default Navbar;
//19:13
