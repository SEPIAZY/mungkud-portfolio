"use client";
import React, { useRef } from "react";
import { useMotionValue, motion } from "framer-motion";
import { PiBagSimpleFill } from "react-icons/pi";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 sm:gap-12 md:gap-24 lg:gap-36 py-8 sm:py-8 md:py-16 lg:py-24 sm:px-12 md:px-20 lg:px-28 mx-auto">
      <header className="flex text-zinc-800 leading-tight ">
        <h1 className="text-[8vw] font-bold w-full">
          I enjoy creating{" "}
          <span className="flex gap-4 md:gap-8 lg:gap-12">
            <Link heading="responsive" href="#" /> websites.
          </span>
        </h1>
      </header>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-12 md:gap-20 lg:gap-28 w-full px-6 md:px-0">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-4 md:gap-6 lg:gap-8 items-start md:items-center px-4 py-8 md:px-0 md:py-8">
          <img
            width={300}
            height={300}
            src="/images/profile.jpg"
            alt="Profile"
            className="p-1 rounded-full ring-2 ring-gray-300 object-cover w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
          <div className="flex flex-col text-zinc-800">
            <p className="text-xs sm:text-sm md:text-medium lg:text-lg">Hi, I'm</p>
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">Punnapa Thianchai</h2>
            <h3 className="text-sm sm:text-medium md:text-lg lg:text-xl">
              a senior year student in Applied Computer Science @KMUTT
            </h3>
          </div>
        </div>

        <div className="flex flex-col text-zinc-800 text-xl px-4 md:px-8 py-8">
          <PiBagSimpleFill className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          <h2 className="font-semibold text-medium sm:text-lg md:text-xl lg:text-2xl">Recent Experience</h2>
          <p className="text-sm sm:text-medium md:text-lg lg:text-xl">Full Stack engineer @AI Partners Global.</p>
        </div>
      </div>
    </div>
  );
}

const Link = ({ heading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="duration-200"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -20 },
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            staggerChildren: 0.05,
            delayChildren: 0.15,
          }}
          className="duration-300"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 25 },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="inline-block italic font-light"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
      </div>
    </motion.a>
  );
};
