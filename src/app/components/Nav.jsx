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
  Button,
} from "@heroui/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-pink-300">
    //   <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 p-8 md:p-12 lg:p-20 font-semibold">
    //     <Link
    //       href={"/"}
    //     >
    //       yayee
    //     </Link>
    //     <div className="menu hidden md:block md:w-auto" id="navbar">
    //       <ul className="flex p-4 md:p-0 flex-row md:flex-col mt-0">
    //         <li key="about">
    //           <Link href="/linkedIn" className="hover:text-slate-200">
    //             linkedIn
    //           </Link>
    //         </li>
    //         <li key="projects">
    //           <Link href="/github" className="hover:text-slate-200">
    //             github
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <Navbar onMenuOpenChange={setIsMenuOpen} 
    // className="bg-pink-300"
    maxWidth="full"
    >
      <NavbarContent 
    //   className="bg-purple-200"
      >
        <NavbarBrand>
          <p className="font-normal md:font-bold text-zinc-800 tracking-wider">
            yayee
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent 
      className="hidden sm:flex gap-12 text-zinc-800 " justify="center"
      >
        <NavbarItem>
          <Link href="#" className="font-bold relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full">
            project
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="font-bold relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full">
            experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="font-bold relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full">
            contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent 
    //   className="bg-blue-200" 
      justify="end"
      >
        <NavbarItem className="hidden lg:flex">
          <p className="text-zinc-800 font-bold">bangkok, thailand</p>
        </NavbarItem>
      </NavbarContent>

      {/*mobile menu*/}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarMenu className="bg-zinc-800">
        <NavbarMenuItem className="mt-2">
          <div
            className="w-full flex flex-col gap-2 text-white"
            //   color={
            //     index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
            //   }
            size="lg"
          >
            <Link href="#" className="font-bold relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full">
              project
            </Link>
            <Link href="#" className="font-bold relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full">
              experience
            </Link>
            <Link href="#" className="font-bold relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full">
              contact
            </Link>
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
