"use client"
import { Bars3Icon } from "@heroicons/react/16/solid";
import { UserCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import styles from "./Header.module.css";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) {
        setMenuHeight(mobileMenu.scrollHeight);
      }
    } else {
      setMenuHeight(0);
    }
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="sticky h-28 top-0 w-full py-4 text-white bg-indigo-950 opacity-90 z-[10000000]">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <Logo />
        <ul className="hidden lg:inline-flex items-center uppercase text-sm">
          <li className={`px-6 py-3 opacity-60 ${styles["navbar-item"]} ${styles["active"]}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`px-6 py-3 opacity-60 ${styles["navbar-item"]}`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`px-6 py-3 opacity-60 ${styles["navbar-item"]}`}>
            <Link href="/services">Services</Link>
          </li>
          <li className={`px-6 py-3 opacity-60 ${styles["navbar-item"]}`}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={`px-6 py-3 opacity-60 ${styles["navbar-item"]}`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button className={`hidden lg:inline-flex gap-2 items-center py-2 px-12 rounded border border-solid border-white ${styles["nav-login"]}`}>
          <UserCircleIcon className="text-white w-6" /> <span className="uppercase">Login</span>
        </button>
        <div className="inline-flex lg:hidden" onClick={toggleNavbar}>
          {isOpen ? (
            <>
              <div>
                <XCircleIcon className="text-white w-8" />
              </div>
              <ul id="mobile-menu" className="absolute top-full inset-x-0 bg-indigo-950 border-t border-solid border-gray-300 w-full z-40 overflow-hidden transition-max-height duration-300 ease-in-out" style={{ maxHeight: menuHeight }}>
                <li className={`${styles["nav-mobile-item"]} ${styles["active"]} px-4 py-2 w-full text-xs uppercase text-white`}>Home</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full text-xs uppercase text-white`}>About</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full text-xs uppercase text-white`}>Services</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full text-xs uppercase text-white`}>Blog</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full text-xs uppercase text-white`}>Contact</li>
              </ul>
            </>
          ) : (
            <>
              <div>
                <Bars3Icon className="text-white w-8" />
              </div>
              <ul id="mobile-menu" className="absolute top-full inset-x-0 bg-indigo-950 w-full z-40 overflow-hidden transition-max-height duration-300 ease-in-out" style={{ maxHeight: menuHeight }}>
                <li className={`${styles["nav-mobile-item"]} ${styles["active"]} px-4 py-2 w-full text-xs uppercase text-white`}>Home</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full text-xs uppercase text-white`}>About</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full text-xs uppercase text-white`}>Services</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full text-xs uppercase text-white`}>Blog</li>
                <li className={`${styles["nav-mobile-item"]} px-4 py-2 w-full text-xs uppercase text-white`}>Contact</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;