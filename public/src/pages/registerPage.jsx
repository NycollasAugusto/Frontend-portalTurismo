import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoginForm from "../components/LoginForm";
import go from "../assets/imagens/go.png";

const LoginPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center text-white font-dbz relative"
      style={{ backgroundImage: `url(${go})` }}
    >
      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <Navbar />

      <main className="flex-grow flex items-center justify-center relative z-10 px-4">
        <div className="relative bg-white/10 backdrop-blur-md border border-yellow-400/30 p-10 rounded-xl shadow-[0_0_25px_#facc15] w-full max-w-md">
          {/* Aura animada */}
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-yellow-400 to-blue-500 opacity-25 blur-2xl rounded-xl animate-pulse z-0" />

          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-center mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
              ⚡ Entrar no Universo Z ⚡
            </h1>
            <LoginForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
