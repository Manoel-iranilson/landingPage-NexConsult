"use client";
import axios from "axios";
import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    nome: "",
    areaEspecializacao: "",
    telefone: "",
    experiencia: "",
    email: "",
    opcao: "",
  });

  const [loading, setLoading] = useState(false); // Estado de loading para feedback visual

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://mkfwbsoivemrpddaizlw.supabase.co/rest/v1/pessoasCadastrads",
        {
          nome: formData.nome,
          areaEspecializacao: formData.areaEspecializacao,
          telefone: formData.telefone,
          experiencia: formData.experiencia,
          email: formData.email,
          opcao: formData.opcao,
        },
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZndic29pdmVtcnBkZGFpemx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2ODc3NzYsImV4cCI6MjA0NTI2Mzc3Nn0.PKO94gjvG2CiTdaSvtWnMtBtAdUVCKpk2CwGhCznctc",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZndic29pdmVtcnBkZGFpemx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2ODc3NzYsImV4cCI6MjA0NTI2Mzc3Nn0.PKO94gjvG2CiTdaSvtWnMtBtAdUVCKpk2CwGhCznctc",
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
        }
      );
      console.log("Dados enviados com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="flex justify-center items-center bg-gray-50 w-full">
      <div className="max-w-7xl px-8 py-20">
        <h1 className="text-2xl font-bold text-green-600 mb-6">
          Pronto para chegar ao próximo nível?
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                className="text-sm font-semibold text-green-600"
                htmlFor="nome"
              >
                Nome
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="border-2 border-blue-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                placeholder="Digite seu nome"
                required
                aria-label="Digite seu nome"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="text-sm font-semibold text-green-600"
                htmlFor="areaEspecializacao"
              >
                Área de especialização
              </label>
              <select
                name="areaEspecializacao"
                value={formData.areaEspecializacao}
                onChange={handleChange}
                className="border-2 border-green-600 p-2 rounded-md"
                required
                aria-label="Escolha sua área de especialização"
              >
                <option value="">Escolha uma opção</option>
                <option value="Gestão">Gestão</option>
                <option value="Marketing">Marketing</option>
                <option value="ESG">ESG</option>
                <option value="Tecnologia da informação">
                  Tecnologia da informação
                </option>
                <option value="Finanças">Finanças</option>
                <option value="Contabilidade">Contabilidade</option>
                <option value="Jurídica">Jurídica</option>
                <option value="Inovação">Inovação</option>
                <option value="Outros">Outros</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                className="text-sm font-semibold text-green-600"
                htmlFor="telefone"
              >
                Telefone
              </label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="border-2 border-green-600 p-2 rounded-md"
                placeholder="Digite seu telefone"
                required
                aria-label="Digite seu telefone"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="text-sm font-semibold text-green-600"
                htmlFor="experiencia"
              >
                Experiência
              </label>
              <select
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
                className="border-2 border-green-600 p-2 rounded-md"
                aria-label="Escolha sua experiência"
              >
                <option value="">Escolha uma opção</option>
                <option value="Menos de 1 ano">Menos de 1 ano</option>
                <option value="1-3 anos">1-3 anos</option>
                <option value="3-5 anos">3-5 anos</option>
                <option value="5-10 anos">5-10 anos</option>
                <option value="Mais de 10 anos">Mais de 10 anos</option>
              </select>
            </div>

            <div className="flex flex-col md:col-span-2">
              <label
                className="text-sm font-semibold text-green-600"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-2 border-green-600 p-2 rounded-md"
                placeholder="Digite seu email"
                required
                aria-label="Digite seu email"
              />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="text-sm font-semibold text-green-600"
              htmlFor="opcao"
            >
              Selecione uma opção
            </label>
            <div className="flex space-x-4 mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="opcao"
                  value="independente"
                  onChange={handleChange}
                  className="form-radio text-green-600"
                  required
                  aria-label="Consultor Independente"
                />
                <label className="ml-2 text-sm text-green-600">
                  Consultor Independente
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  name="opcao"
                  value="pj"
                  onChange={handleChange}
                  className="form-radio text-green-600"
                  required
                  aria-label="Consultor PJ"
                />
                <label className="ml-2 text-sm text-green-600">
                  Consultor PJ
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300"
              disabled={loading} // Botão desativado durante o loading
              aria-label="Cadastrar-se"
            >
              {loading ? "Enviando..." : "Cadastra-se Agora"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
