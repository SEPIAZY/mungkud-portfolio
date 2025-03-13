"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { MdArrowOutward } from "react-icons/md";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarBrand>
          <p className="font-normal md:font-bold text-zinc-800 tracking-wider">
            yayee
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-12 text-zinc-800 "
        justify="center"
      >
        <NavbarItem>
          <Link
            href="#"
            className="font-bold relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full"
          >
            project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="font-bold relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full"
          >
            experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="font-bold relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full"
          >
            contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <p className="text-zinc-800 font-bold">bangkok, thailand</p>
        </NavbarItem>
      </NavbarContent>

      {/*mobile menu*/}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarMenu>
        <NavbarMenuItem className="h-full py-8">
          <div className="w-full h-full flex flex-col justify-between text-zinc-800">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                  <div className="text-sm">menu</div>
                  <span className="w-full border-b border-zinc-800 rounded-full"></span>
                </div>
                <div className="flex flex-col text-base font-medium gap-1">
                  <Link
                    href="#"
                    className="relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    project
                  </Link>
                  <Link
                    href="#"
                    className="relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    experience
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                  <div className="text-sm">social</div>
                  <span className="w-full border-b border-zinc-800 rounded-full"></span>
                </div>
                <div className="flex flex-col text-base font-medium gap-1">
                  <Link
                    href="#"
                    className="relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    linkedin
                  </Link>
                  <Link
                    href="#"
                    className="relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    github
                  </Link>
                </div>
              </div>
            </div>

            <button className="flex justify-between w-full border border-zinc-800 px-4 py-2 rounded-full">
              <div className="text-sm">contact</div>
              <MdArrowOutward className="text-lg" />
            </button>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
