import Bruno from "@public/bruno.jpeg";
import Manoel from "@public/manoel.jpeg";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa"; // Importe o ícone do WhatsApp

export default function Teams() {
  return (
    <section className="flex flex-col items-center gap-10 py-20 text-white">
      <h1 className="text-4xl">Equipe</h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-40">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={Bruno}
            alt="Bruno Henrique"
            className="rounded-full w-40 h-40"
          />
          <h1 className="text-2xl">Bruno Henrique</h1>
          <p>CEO - Negócios</p>
          <a
            href="https://api.whatsapp.com/send?phone=5588988628331&text=Vim%20pelo%20site!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 text-green-500 hover:text-green-400 transition"
          >
            <FaWhatsapp className="mr-2" /> Entre em contato
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={Manoel}
            alt="Manoel Iranilson"
            className="rounded-full w-40 h-40"
          />
          <h1 className="text-2xl">Manoel Iranilson</h1>
          <p>CTO - Tecnologia</p>
          <a
            href="https://api.whatsapp.com/send?phone=5588996685478&text=Vim%20pelo%20site!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-2 text-green-500 hover:text-green-400 transition"
          >
            <FaWhatsapp className="mr-2" /> Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}
