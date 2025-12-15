"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold text-lg">
            Varun
          </Link>

          {/* desktop links */}
          <ul className="hidden md:flex gap-4 items-center">
            {links.map((link) => {
              const isActive = link.href === pathname;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Link href="/contact" aria-label="Contact">
              <Button variant="primary">Contact</Button>
            </Link>
          </div>

          {/* mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive = link.href === pathname;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md transition-colors duration-150 ${
                    isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link href="/contact" className="mt-2">
              <Button variant="primary" className="w-full">Contact</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
