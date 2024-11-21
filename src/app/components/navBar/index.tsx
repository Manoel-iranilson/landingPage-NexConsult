import Image from "next/image";
import React from "react";
import logo from "@public/logo.png";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className=" bg-black w-full  flex items-center justify-center">
      <header className="w-full max-w-7xl flex flex-col lg:flex-row gap-4 justify-between items-center px-10 py-4 text-white">
        <div className="flex flex-row gap-36 items-center ">
          <Image src={logo} alt="Logo da NexConsult" className="w-40 " />
          <div className="hidden lg:flex gap-4">
            <Link href="/">Soluções</Link>
            <Link href="/">Sobre nós</Link>
          </div>
        </div>
        <div>
          <button className="hidden lg:block px-10 py-2 rounded-3xl font-bold bg-green-500">
            <Link href="/cadastro">Login</Link>
          </button>
        </div>
      </header>
    </div>
  );
}
