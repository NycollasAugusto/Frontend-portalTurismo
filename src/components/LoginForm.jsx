import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"; // Adicionado

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate(); // Adicionado

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://backend-portalturismo-9zcl.onrender.com/api/auth/login", {
        email,
        password: senha
      });

      const userData = response.data;
      localStorage.setItem("user", JSON.stringify(userData));

      alert("Usuário logado com sucesso!!");
      navigate("/"); // Corrigido
    } catch (error) {
      if (error.response) {
        alert("Erro no email ou senha");
      } else {
        alert("Erro ao conectar ao servidor");
      }
    }
  };

  return (
    <>
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}> {/* Corrigido aqui */}
          <div>
            <label>E-mail</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base"
              placeholder="Digite seu email"
            />
          </div>
          <div className="mt-4">
            <label>Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base"
              placeholder="Digite sua senha"
            />
          </div>
          <button type="submit" className="mt-6 w-full bg-orange-400 text-white py-2 px-6 rounded-b-lg hover:bg-gray-600 transition">
            Entrar
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Não tem conta?
          <a href="/register" className="text-gray-600 hover:underline p-2">Cadastre-se</a>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
