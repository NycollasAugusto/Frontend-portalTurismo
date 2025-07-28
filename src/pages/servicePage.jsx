import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import vi from '../assets/imagens/vi.png'
import Carousel from "../components/carousel";

const ServicePage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                    <Hero Background = {vi} titulo = "DRAGON BALL" paragrafo="Venha conhecer os mais diversos personagens do anime" rota="#" botao="Conhecer Agora" />
                    <div>
                        <Carousel/>
                    </div>
                </div>
                    <Footer />
            </div>
        </>
    )
}

export default ServicePage;