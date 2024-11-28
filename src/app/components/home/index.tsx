import home from "@public/home.png";
import Image from "next/image";
import Link from "next/link";

export default function Principal() {
  return (
    <div className="bg-black lg:h-screen  w-full  text-white flex items-center justify-center ">
      <div className="max-w-7xl w-full  p-10 rounded-2xl  flex flex-col lg:flex-row justify-between">
        <section className="flex flex-col gap-6 w-full lg:w-1/2 justify-center">
          <h1 className="text-xl lg:text-6xl font-bold lg:text-left text-center">
            <span className="text-green-600">Transformando</span> a forma como
            Consultores e Empresas se
            <span className="text-green-600"> Conectam.</span>
          </h1>
          <p className="text-lg w-full mt-4 text-gray-400 lg:text-left text-center">
            A Nexconsult conecta consultores e empresas, para facilitar o
            encontro de profissionais pelas empresas e ajudar os consultores com
            a prospecção, construção de credibilidade e precificação.
          </p>
        </section>
        <section className="md:w-1/2  flex flex-col justify-center items-center">
          <Image src={home} alt="Imagem de consultoria" className="size-96" />
          <div className="flex flex-col lg:flex-row gap-4 w-full px-12 mt-6">
            <button className="bg-green-600 w-full py-3 rounded-3xl  font-bold">
              <Link href="/cadastro">Encontrar consultores</Link>
            </button>
            <button className="bg-white w-full py-3 rounded-3xl   font-bold text-green-600">
              <Link href="/cadastro">Encontrar projetos</Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
