import Image from "next/image";
import React from "react";
import clients from "@public/clients.png";
import Link from "next/link";

export default function Clients() {
  return (
    <div className="bg-white w-full  flex items-center justify-center ">
      <div className="max-w-7xl h-full lg:h-screen  w-full p-10 flex flex-col lg:flex-row gap-2 justify-center py-10">
        <section className="w-full lg:w-1/4 flex flex-col gap-14">
          <h2 className="text-green-600 text-3xl">PARA CLIENTES</h2>
          <h1 className="text-green-600 text-5xl font-bold">
            Encontre Soluções
          </h1>
          <h3>
            Trabalhe com uma rede de profissionais qualificados e faça as coisas
            acontecerem, desde mudanças rápidas até grandes transformações
          </h3>
        </section>
        <section className="w-full lg:w-3/4 h-full lg:relative">
          <Image
            src={clients}
            alt="Homem de oculos sentado em frente ao computador"
            className="h-[90%] w-full object-cover rounded-2xl"
          />
          <div className="lg:absolute text-white font-bold text-2xl bottom-0 left-0 lg:w-1/3 bg-green-600 rounded-2xl p-4 text-center">
            Faça seu pré diagnóstico e encontre o profissional Ideal
            <button className="bg-white text-lg  px-3 py-2 rounded-3xl mt-2 text-green-600">
              <Link href="/cadastro">Encontrar consultores</Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
