import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password: senha,
      });

      localStorage.setItem("user", JSON.stringify(response.data));
      alert("✅ Usuário logado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert("❌ Email ou senha inválidos.");
      } else {
        alert("⚠️ Erro ao conectar ao servidor.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Bem-vindo de volta 👋</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-gray-500 text-sm left-3 top-2 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              E-mail
            </label>
          </div>

          <div className="relative">
            <input
              id="password"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-gray-500 text-sm left-3 top-2 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
            >
              Senha
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md font-semibold text-white transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Não tem conta?
          <a href="/register" className="text-orange-600 hover:underline ml-1">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
