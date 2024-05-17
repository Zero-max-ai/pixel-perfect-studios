"use client";

import { useEffect, useState } from "react";

import ShowNavIcons from "./ShowNavIcons";

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hidden max-md:block">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          document.body.style.overflow = isOpen ? "hidden" : "auto";
        }}
        className="max-md:flex cursor-pointer w-fit p-2 flex-col gap-1"
      >
        <span
          className={`w-6 h-0.5 block bg-black rounded duration-200 ${
            isOpen ? " rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 block bg-black rounded duration-200 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 block bg-black rounded duration-200 ${
            isOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        ></span>
      </div>
      {isOpen && <ShowNavIcons />}
    </div>
  );
};

export default HamburgerIcon;
