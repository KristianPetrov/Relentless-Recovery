"use client";

import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2 font-semibold tracking-wide">
            <span className="text-white">Relentless Recovery</span>
          </a>
          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-controls="primary-menu"
            data-aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((v) => !v)}
         >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M3.75 6.75A.75.75 0 014.5 6h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zM3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15A.75.75 0 013.75 12zM4.5 16.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" />
              </svg>
            )}
          </button>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#hero" className="hover:underline underline-offset-4">Home</a>
            <a href="#vision" className="hover:underline underline-offset-4">Vision</a>
            <a href="#about" className="hover:underline underline-offset-4">About</a>
          </div>
        </nav>
        {isOpen && (
          <div id="primary-menu" className="sm:hidden pb-3">
            <div className="flex flex-col gap-1 pt-2 text-sm">
              <a href="#hero" onClick={() => setIsOpen(false)} className="px-2 py-2 rounded hover:bg-blue-800">Home</a>
              <a href="#vision" onClick={() => setIsOpen(false)} className="px-2 py-2 rounded hover:bg-blue-800">Vision</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="px-2 py-2 rounded hover:bg-blue-800">About</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


