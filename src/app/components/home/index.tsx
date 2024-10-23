import home from "@public/home.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Principal() {
  return (
    <div className="bg-gray-900  text-white ">
      <div className="max-w-7xl p-8 rounded-2xl  flex flex-col lg:flex-row justify-between">
        <section className="flex flex-col gap-6 md:w-1/2 justify-center">
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
    </div>
  );
}
