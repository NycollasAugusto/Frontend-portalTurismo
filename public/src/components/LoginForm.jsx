import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
 const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
            email,
            password : senha
        })

        const userData = response.data;
        localStorage.setItem("user", JSON.stringify(userData))

        alert("usuario logado com sucesso!!")
        navigate("/")
    }   catch (error) {
        if (error.response) {
            alert("erro no email ou usuario")
        } else {
            alert("erro ao conectar ao servidor")
        }
    }
};

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('https://images6.alphacoders.com/131/1318201.jpg')", // fundo Goku estiloso
      }}
    >
      <div className="w-full max-w-md bg-black bg-opacity-80 p-8 rounded-2xl shadow-lg border border-orange-500 backdrop-blur-sm">
        <h2 className="text-3xl text-center font-bold text-orange-400 mb-6 uppercase tracking-wide">
          Login Z-Warrior
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-white mb-1 font-medium">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="ex: goku@kamehameha.com"
              className="w-full px-4 py-2 bg-gray-900 text-white border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-white mb-1 font-medium">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-gray-900 text-white border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition duration-300 shadow-lg hover:shadow-orange-300"
          >
            Entrar com Poder 🔥
          </button>
        </form>

        <p className="text-center text-sm text-gray-300 mt-6">
          Ainda não é um guerreiro?
          <a href="/register" className="text-orange-400 font-bold ml-1 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
