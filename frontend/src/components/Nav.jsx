import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";

function Nav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#020617]/90 backdrop-blur-md border-b border-white/10 z-50">
        <div className="flex justify-between items-center px-5 py-4">

          {/* Logo */}
          <div className="text-2xl md:text-3xl font-bold text-[#CBD5E1] flex items-center gap-2">
            <BsBoxes />
            Portfolio
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-slate-300 text-lg items-center">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#aboutme" className="hover:text-blue-400 transition">About</a>
            <a href="#skill" className="hover:text-blue-400 transition">Skills</a>
            <a href="#project" className="hover:text-blue-400 transition">Projects</a>
            <a href="#footer" className="hover:text-blue-400 transition">Contact</a>

          
          </div>

          {/* Hamburger */}
          <div
            className="md:hidden flex flex-col gap-1 cursor-pointe"
            onClick={() => setOpen(!open)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </div>
        </div>
      </nav>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-[400px] w-72 bg-[#0F172A]/95 backdrop-blur-xl 
        border-l border-white/10 z-50 transform transition-transform duration-300 rounded-l-2xl
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-5">
          <button onClick={closeMenu} className="text-white text-2xl">
            ✕
          </button>
        </div>

        {/* Mobile Links (A TAGS) */}
        <div className="flex flex-col gap-6 px-8 text-lg text-slate-200">
          <a onClick={closeMenu} href="#home"   className="text-slate-200  active:text-blue-400 ">Home</a>
          <a onClick={closeMenu} href="#aboutme"className="text-slate-200  active:text-blue-400">About</a>
          <a onClick={closeMenu} href="#skill" className="active:text-blue-400">Skills</a>
          <a onClick={closeMenu} href="#project" className="active:text-blue-400">Projects</a>
          <a onClick={closeMenu} href="#footer" className="active:text-blue-400">Contact</a>

          <div className="flex items-center gap-2 mt-6">
         
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;