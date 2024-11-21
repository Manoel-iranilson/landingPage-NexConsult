import Image from "next/image";
import React from "react";
import consult from "@public/consultant.png";
import Link from "next/link";

export default function Consultant() {
  return (
    <div className="bg-white w-full">
      <section className="max-w-7xl w-full p-10 flex flex-col lg:flex-row">
        <Image src={consult} alt="mulher de oculos trabalhando no notebook" />
        <section className="bg-green-600 h-full rounded-3xl p-10 text-white">
          <div className="border-b-4 pb-8 ">
            <h2>PARA CONSULTORES</h2>
            <h1 className="text-5xl my-8 font-bold">
              Encontre os Melhores Projetos
            </h1>
            <h2>
              Conheça clientes com quem você está animado para trabalhar e leve
              sua carreira a novos patamares.
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row mt-4">
            <div className="lg:w-1/2 flex flex-col gap-4 text-xl">
              <li>
                Encontre oportunidades para estágio da sua carreira de consulto
              </li>
              <li>Controle quando, onde e como vai trabalhar</li>
              <li>Explore diferentes maneiras de ganhar</li>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center lg:my-0 mt-4">
              <button className=" bg-white rounded-3xl text-center font-bold px-6 py-2 text-lg text-green-600">
                <Link href="/cadastro">Encontrar projetos</Link>
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
