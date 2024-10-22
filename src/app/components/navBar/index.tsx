import React from "react";
import { FaInstagram } from "react-icons/fa"; // Importe o ícone do Instagram

export default function NavBar() {
  return (
    <div className="h-28 bg-black p-10">
      <header className="flex justify-between items-center pb-8">
        <div className="text-white font-bold text-3xl">
          <span className="text-green-600">nex</span>consult
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/nexconsultof?igsh=cnp3b3kwc2t5Nnd5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaInstagram className="text-3xl" />
          </a>
          {/* Você pode descomentar o nav e o botão se necessário */}
          {/* <nav className="flex space-x-8 text-white">
            <a href="#" className="hover:text-green-500">
              Benefícios
            </a>
            <a href="#" className="hover:text-green-500">
              Preço
            </a>
            <a href="#" className="hover:text-green-500">
              Como funciona
            </a>
          </nav>
          <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg">
            Sign up ➜
          </button> */}
        </div>
      </header>
    </div>
  );
}
