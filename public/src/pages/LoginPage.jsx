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
      {/* Overlay escurecido para dar contraste */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <Navbar />

      <div className="flex-grow flex items-center justify-center relative z-10 px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-2xl w-full max-w-md animate-fade-in">
          <h1 className="text-3xl font-bold text-center mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
            Entrar no Universo Z
          </h1>
          <LoginForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
