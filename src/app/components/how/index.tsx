import Image from "next/image";
import React from "react";
import how from "@public/how.png";

export default function How() {
  return (
    <div className="p-8 bg-white w-full min-h-screen">
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-green-600">Como Funciona</h2>
        <p className="text-lg text-gray-700 mt-4">
          A Nexconsult oferece uma plataforma simples e eficiente para conectar
          consultores qualificados de diversas áreas e empresas que buscam
          serviços de consultoria para resolver problemas específicos. Veja como
          funciona:
        </p>
      </section>

      <div className="flex justify-center items-center mb-8">
        <Image
          src={how}
          alt="Como funciona"
          className="w-full max-w-3xl px-4" // Limite a largura máxima
          layout="responsive" // Isso ajudará a manter a responsividade
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Passo 1 */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-600">Passo 1:</h3>
          <h4 className="text-xl font-bold mt-4">
            Cadastro fácil e rápido na plataforma
          </h4>
          <p className="mt-4 text-gray-700">
            Para começar, basta se cadastrar. Se for no perfil de consultor,
            além do cadastro é necessário escolher um tipo de plano, mas só após
            o período de 7 dias grátis.
          </p>
        </div>

        {/* Passo 2 */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-600">Passo 2:</h3>
          <h4 className="text-xl font-bold mt-4">
            Conexão entre consultores qualificados e empresas
          </h4>
          <p className="mt-4 text-gray-700">
            Após o cadastro, nossa plataforma utiliza algoritmos avançados para
            fazer a conexão entre consultores qualificados e empresas que buscam
            serviços consultivos. Garantimos que você conectará às oportunidades
            certas!
          </p>
        </div>

        {/* Passo 3 */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-600">Passo 3:</h3>
          <h4 className="text-xl font-bold mt-4">
            Colaboração eficaz e alcance de resultados satisfatórios
          </h4>
          <p className="mt-4 text-gray-700">
            Uma vez conectado, você poderá colaborar de forma eficaz com as
            empresas, compartilhando conhecimentos e experiências para alcançar
            resultados incríveis.
          </p>
        </div>
      </div>
    </div>
  );
}
