import React from "react";

export default function Solutions() {
  return (
    <div className="p-8 bg-black h-screen">
      <section className=" mb-52">
        <h2 className="text-4xl font-bold text-green-600">
          Soluções Eficientes para Empresas
        </h2>
        <p className="text-lg text-white mt-4">
          Encontre o consultor ideia sem custos
        </p>
      </section>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Ampla Rede de Empresas */}
          <div className="text-center">
            <h3 className="text-3xl font-bold">Cadastro Gratuito</h3>
            <p className="text-xl mt-4 text-white">
              As empresas podem se cadastrar sem custos na plataforma
            </p>
          </div>

          {/* Crescimento Constante */}
          <div className="text-center">
            <h3 className="text-3xl font-bold">Consultores Qualidicados</h3>
            <p className="text-xl mt-4 text-white">
              Encontre consultores que atendam às suas necessidades especificas
            </p>
          </div>

          {/* Oportunidades de Negócio */}
          <div className="text-center">
            <h3 className="text-3xl font-bold">Agilidade e Otimização</h3>
            <p className="text-xl mt-4 text-white">
              Agilize processos e otimize resultados encontrando o consultor
              ideal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
