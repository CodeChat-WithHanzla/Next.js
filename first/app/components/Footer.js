import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex justify-between items-center py-3 px-5">
        <p className="cursor-pointer text-xs">@Copyright 2025</p>
        <ul className="flex gap-5 text-normal cursor-pointer">
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </ul>
        <button className="cursor-pointer bg-blue-600 rounded-xl px-6 py-1">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Footer;
