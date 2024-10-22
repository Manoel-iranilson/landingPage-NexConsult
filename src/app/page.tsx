import home from "@public/home.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import How from "./components/how";
import MoreClients from "./components/moreClients";
import Solutions from "./components/solutions";
import Teams from "./components/teams";

export default function Home() {
  return (
    <div className=" w-full">
      <div className="bg-gray-900 py-10 px-5 md:px-10 rounded-2xl text-white flex flex-col md:flex-row justify-between gap-10">
        <section className="flex flex-col gap-6 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Transforme
            <br /> sua expertise
            <br /> em resultados
            <br /> com a{" "}
            <span className="text-green-600 block">Nexconsult</span>
          </h1>
          <p className="text-lg w-full md:w-80">
            A plataforma que conecta consultores e empresas para alcançar
            resultados excepcionais.
          </p>
          <button className="bg-white text-black font-semibold py-3 w-full md:w-1/2 rounded-3xl flex items-center justify-center gap-2">
            <p>Comece grátis por 07 dias</p>
            <div className="bg-green-500 p-2 rounded-full flex justify-center items-center text-white">
              <FaArrowRight size={15} />
            </div>
          </button>
        </section>
        <section className="md:w-1/2 flex justify-center items-center">
          <Image
            src={home}
            alt="Imagem de consultoria"
            className="rounded-lg w-full h-auto"
            // Para otimizar a imagem, considere adicionar layout e sizes conforme necessário
            layout="responsive" // Esta propriedade pode ajudar na responsividade
            sizes="(max-width: 640px) 100vw, (min-width: 640px) 50vw" // Ajuste conforme seu design
          />
        </section>
      </div>
      <How />
      <Solutions />
      <MoreClients />
      <Teams />
    </div>
  );
}
