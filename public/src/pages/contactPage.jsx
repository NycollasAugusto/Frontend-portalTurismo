import React, { useState } from "react";
import vi from "../assets/imagens/vi.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Mensagem enviada por ${formData.name}, ${formData.email}`);
    console.log(formData.message);
    alert("Mensagem enviada com sucesso!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Navbar/>
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-12 font-dbz"
      style={{ backgroundImage: `url(${vi})` }}
    >
      {/* Camada escura para destacar o formulário */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl max-w-md w-full shadow-[0_0_30px_rgba(255,140,0,0.7)] border-4 border-yellow-400">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-orange-600 drop-shadow-[0_0_10px_rgba(255,140,0,0.8)] animate-pulse">
          Entre em contato
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-800 font-semibold mb-2"
            >
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Digite seu nome"
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition text-sm sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-800 font-semibold mb-2"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Digite seu e-mail"
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition text-sm sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-800 font-semibold mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Digite sua mensagem..."
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 transition resize-none text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:brightness-110 text-white font-bold py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 animate-aura-glow"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactForm;
