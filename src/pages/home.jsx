import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import vi from '../assets/imagens/vi.png'

const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                    <Hero Background = {vi} titulo = "DRAGON BALL" paragrafo="conheça a história de personagens relacionados ao anime " rota="#" botao="Saiba mais" />
                    <h1 className="text-center"></h1>
                    <div>

                    </div>
                </div>
                    <Footer />
            </div>


        </>
    )
}

export default Home;