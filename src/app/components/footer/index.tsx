import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa"; // Importe o ícone do Instagram
import { FaLinkedinIn } from "react-icons/fa"; // Importe o ícone do Instagram

export default function Footer() {
  return (
    <footer className="bg-green-600 w-full flex items-center justify-center">
      <section className="max-w-7xl w-full p-10 flex flex-col lg:flex-row justify-between text-white gap-10">
        <div className=" w-full lg:w-1/2 text-lg">
          <h1 className="font-bold  mb-4">O QUE É A NEXCONSULT?</h1>
          <p>
            A Nexconsult conecta consultores e empresas, para facilitar o
            encontro de profissionais pelas empresas e ajudar os consultores com
            a prospecção, construção de credibilidade e precificação.
          </p>
          <p className="text-sm mt-4">
            Nexconsult Inova Simples CNPJ:58.054.307/0001-55
          </p>
        </div>
        <div className="flex flex-col  gap-2">
          <h1 className="text-lg font-bold">NEXCONSULT</h1>
          <Link href="/">Para consultores</Link>
          <Link href="/">Para empresas</Link>
          <Link href="/">Sobre nós</Link>
          <Link href="/">FAQ</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">ENTRE EM CONTATO</h1>
          <Link href="/">Contato</Link>
          <Link href="/">Carreiras</Link>
          <div className="flex gap-2 mt-8">
            <Link href="https://www.linkedin.com/company/nexconsultbr">
              <FaLinkedinIn className="text-3xl" />
            </Link>
            <Link href="https://www.instagram.com/nexconsultof/?igsh=cnp3b3kwc2t5Nnd5">
              <FaInstagram className="text-3xl" />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
