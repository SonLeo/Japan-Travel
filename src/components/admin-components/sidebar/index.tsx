"use client";
import {
  ArrowRightStartOnRectangleIcon,
  ChartBarIcon,
  ChatBubbleLeftEllipsisIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  InboxStackIcon,
  PlusIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBlog } from "react-icons/fa";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuItems = [
  { href: "/admin", label: "Dashboard", icon: InboxStackIcon },
  { href: "/admin/charts", label: "Charts", icon: ChartBarIcon },
  {
    href: "/admin/documents",
    label: "Documents",
    icon: ClipboardDocumentListIcon,
  },
  { href: "/admin/blogs", label: "Blogs", icon: FaBlog },
  {
    href: "/admin/message",
    label: "Message",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  { href: "/admin/users", label: "Users", icon: UserIcon },
  { href: "/admin/settings", label: "Settings", icon: Cog6ToothIcon },
  {
    href: "/admin/log-out",
    label: "Log out",
    icon: ArrowRightStartOnRectangleIcon,
  },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 flex flex-col h-screen overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 z-9999 border-r border-solid border-[#AEB7C0] ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="px-2">
        <div className="relative pl-4 pr-12 p-4 border-b border-solid border-[#AEB7C0]">
          <Link href="/admin">
            <div className="flex items-center justify-between">
              <Image
                width={100}
                height={100}
                className="border border-solid bg-white block w-12 h-12 rounded-full mr-3"
                src="https://i.imgur.com/Z7R1oAm.png"
                alt="Logo"
              />
              <div>
                <h1 className="tracking-wider font-semibold text-2xl text-white">
                  Admin
                </h1>
              </div>
            </div>
          </Link>

          <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden absolute top-2 right-1"
          >
            <XCircleIcon className="w-6 h-6 text-[#AEB7C0] hover:text-white" />  
          </button>
        </div>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear text-white">
        <ul className="mt-3 px-4 py-4 lg:px-6">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <li
                className={`flex px-4 py-2 rounded-lg my-1 hover:bg-graydark dark:hover:bg-meta-4 ${
                  pathname === item.href && "bg-graydark dark:bg-meta-4"
                }`}
              >
                <item.icon className="w-6 h-6 mr-4" />
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center mt-auto mb-5">
        <button className="flex justify-between text-white bg-primary py-2 px-6 rounded-full border border-solid border-primary hover:border-[#AEB7C0]">
          <PlusIcon className="w-6 h-6 mr-3" />
          New post
        </button>
      </div>
    </aside>
  );
}
