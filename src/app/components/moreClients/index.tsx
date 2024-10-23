import React from "react";

export default function MoreClients() {
  return (
    <div className=" bg-white w-full flex justify-center items-center">
      <section className="max-w-7xl px-8 py-20 flex-col justify-center items-center">
        <section className="mb-12 md:mb-20">
          <h2 className="text-4xl font-bold text-green-600">
            Mais Clientes para Consultores
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Oferecemos aos consultores uma ampla rede de empresas em busca de
            serviços especializados, possibilitando um crescimento da base de
            clientes.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ampla Rede de Empresas */}
          <div className="text-center p-4">
            <h3 className="text-3xl font-bold">Ampla Rede de Empresas</h3>
            <p className="text-xl mt-4 text-gray-700">
              Conecte-se com uma variedade de empresas em busca de
              especialistas.
            </p>
          </div>

          {/* Crescimento Constante */}
          <div className="text-center p-4">
            <h3 className="text-3xl font-bold">Crescimento Constante</h3>
            <p className="text-xl mt-4 text-gray-700">
              Aumente sua base de clientes de modo consistente e contínuo.
            </p>
          </div>

          {/* Oportunidades de Negócio */}
          <div className="text-center p-4">
            <h3 className="text-3xl font-bold">Oportunidades de Negócio</h3>
            <p className="text-xl mt-4 text-gray-700">
              Acesse projetos e oportunidades exclusivas através da plataforma.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
