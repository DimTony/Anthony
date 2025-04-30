"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-[#f7f2f2] z-50 px-4 py-4 ">
        <div className="mx-[3rem] flex justify-between items-center">
          <div>
            <h1 className="text-[40px] font-moranga text-orange-600">
              Anthony
            </h1>
          </div>
          <div className="flex space-x-4">
            <div className="rounded-[23px] bg-[rgba(0,0,0,4%)] shadow-md px-[0.5rem] py-[0.5rem]">
              <nav className="flex space-x-3">
                <Link
                  href="/"
                  className={`font-[14px] px-4 py-1 items-center justify-center flex rounded-[16px] font-silka ${
                    pathname === "/"
                      ? "bg-white text-gray-900"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`font-[14px] px-4 py-1 items-center justify-center flex rounded-[16px] font-silka ${
                    pathname === "/about"
                      ? "bg-white text-gray-900"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/tools"
                  className={`font-[14px] px-4 py-1 items-center justify-center flex rounded-[16px] font-silka ${
                    pathname === "/tools"
                      ? "bg-white text-gray-900"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  Tools
                </Link>
              </nav>
            </div>
          </div>
          <div>
            <Link
              href="/contact"
              className={`font-medium font-silka ${
                pathname === "/contact" ? "text-orange-600" : "text-gray-900"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-8 px-4 flex-1 flex flex-col justify-center items-center w-full">
        {children}
      </main>
    </div>
  );
}
