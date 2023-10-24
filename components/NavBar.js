import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function NavBar() {
  return (
    <nav className="bg-red-100 px-5 py-3 items-center mx-auto flex justify-between w-full max-w-[1200px]">
      <div className="font-bold rounded-full p-2 border border-neutral-300">MK</div>
      <ModeToggle />
    </nav>
  );
}
