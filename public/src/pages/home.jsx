import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import vi from "../assets/imagens/vi.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-dbz overflow-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* Hero com imagem fullscreen e energia visual */}
        <Hero
          Background={vi}
          titulo="DRAGON BALL"
          paragrafo="Conheça a história dos personagens mais icônicos deste universo lendário."
          rota="#"
          botao="Saiba mais"
        />

        {/* Mensagem de boas-vindas com sombra e energia */}
        <section className="text-center mt-16 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] mb-6 animate-pulse">
            Bem-vindo ao Universo de Dragon Ball!
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
            Explore transformações épicas, batalhas lendárias e o legado de Akira Toriyama. Este é o lar dos guerreiros Z!
          </p>
        </section>

        {/* Seção futura para cards ou carrossel */}
        <section className="mt-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cards futuros ou personagens em destaque */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-yellow-500 shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2 text-yellow-300">Goku</h3>
              <p className="text-white/80 text-sm">
                O lendário Saiyajin criado por Akira Toriyama, defensor da Terra e mestre da Genki Dama.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-blue-400 shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2 text-blue-300">Vegeta</h3>
              <p className="text-white/80 text-sm">
                O Príncipe dos Saiyajins que busca superar Goku a qualquer custo.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-red-400 shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2 text-red-300">Gohan</h3>
              <p className="text-white/80 text-sm">
                O herdeiro híbrido que surpreende a todos com seu poder oculto.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
