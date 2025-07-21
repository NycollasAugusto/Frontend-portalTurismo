import React from 'react';

const Hero = ({ Background, titulo, paragrafo, rota, botao }) => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white font-dbz"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Camada escura translúcida para destacar o conteúdo */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-[0_0_25px_rgba(255,215,0,0.9)] animate-pulse">
          {titulo}
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]">
          {paragrafo}
        </p>

        <a
          href={rota}
          className="inline-block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-orange-500 hover:to-yellow-400 text-white px-8 py-4 rounded-full shadow-lg text-lg font-semibold transition duration-300 transform hover:scale-105 animate-aura-glow"
        >
          {botao}
        </a>
      </div>
    </div>
  );
};

export default Hero;
