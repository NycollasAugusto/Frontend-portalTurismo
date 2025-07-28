import React, { useState } from "react";
import axios from 'axios'
const RegisterForm = () => {

    const [nome, setName] = useState('')

    const [email, setEmail] = useState('')

    const [senha, setSenha] = useState('')

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post("http://localhost:5000/api/users", {

                name: nome,

                email,

                password: senha

            });

            alert("Usuário cadastrado com sucesso!!" + `nome: ${response.data.name} email: ${response.data.email}`)

            window.location.href = "/login"

        } catch (error) {

            if (error.response) {

                alert("Erro ao cadastrar usuário")

            } else {

                alert("erro ao conectar ao servidor")

            }

        }

    };




    return (
        <>
            <div className="bg-gray-100 p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6"> Registre-se</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome</label>
                        <input
                            id="name"
                            type="name"
                            name="name"
                            value={nome}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base"
                            placeholder="Digite seu nome" />
                    </div>
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
                            placeholder="Digite seu email" />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            className="w-full border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm sm:text-base"
                            placeholder="Digite sua senha" />

                    </div>
                    <button type="submit" className="w-full bg-orange-400 text-white py-2 px-6 rounded-b-lg hover:bg-gray-600 transition ">
                        Criar
                    </button>
                </form>
            </div>
        </>
    )
}

export default RegisterForm
