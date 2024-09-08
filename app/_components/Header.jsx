import React from "react";
import Logo from "./Logo";
import { menu } from "@/constants/menu";
import Link from "next/link";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <nav className="flex items-center justify-between shadow-md px-10 gap-10 py-4 z-30 text-white relative">
      {/* Left Part */}
      <div className="flex items-center gap-10">
        <Logo />
        {/* Menu */}
        <div className="md:flex gap-8 hidden">
          {menu.map(({ name, link, id }) => (
            <Link href={link} key={id}>
              <p className="hover:text-primary hover:scale-105 cursor-pointer transition-all ease-in-out">
                {name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      {/* Button */}
      <HeaderButton />
    </nav>
  );
};

export default Header;
