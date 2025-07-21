import React, { useState } from "react";
import vi from './img/dragonball-bg.jpg'; // ou a imagem que você quiser

const FormDBZ = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-12 font-dbz"
      style={{ backgroundImage: `url(${vi})` }}
    >
      {/* Camada escura para destacar o conteúdo */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0"></div>

      {/* Formulário central */}
      <div className="relative z-10 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 
                      rounded-3xl max-w-md w-full shadow-[0_0_50px_rgba(255,140,0,0.9)] 
                      border-4 border-yellow-300 p-8">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-yellow-200 
                       drop-shadow-[0_0_10px_rgba(255,255,0,0.9)] animate-pulse font-dbz">
          Entre em contato
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Nome */}
          <div>
            <label className="block text-yellow-100 font-bold mb-1">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Seu nome de guerreiro"
              className="w-full bg-black/60 text-yellow-100 placeholder-yellow-400 
                         border border-yellow-400 p-3 rounded-md focus:outline-none 
                         focus:ring-2 focus:ring-yellow-300 shadow-md"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-yellow-100 font-bold mb-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ex: goku@kamehameha.com"
              className="w-full bg-black/60 text-yellow-100 placeholder-yellow-400 
                         border border-yellow-400 p-3 rounded-md focus:outline-none 
                         focus:ring-2 focus:ring-yellow-300 shadow-md"
            />
          </div>

          {/* Mensagem */}
          <div>
            <label className="block text-yellow-100 font-bold mb-1">Mensagem</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              placeholder="Diga o que pensa, guerreiro Z"
              className="w-full bg-black/60 text-yellow-100 placeholder-yellow-400 
                         border border-yellow-400 p-3 rounded-md focus:outline-none 
                         focus:ring-2 focus:ring-yellow-300 shadow-md resize-none h-32"
            />
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-300 via-orange-400 to-red-600
                       hover:brightness-125 text-white font-bold py-4 rounded-full 
                       shadow-[0_0_30px_rgba(255,140,0,0.9)] transition-transform duration-300 
                       hover:scale-110 animate-aura-glow"
          >
            ⚡ Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormDBZ;
