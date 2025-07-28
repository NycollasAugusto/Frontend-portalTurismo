import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AboutHero from "../components/aboutHero";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <AboutHero />
        {/* Adicione aqui mais seções, se desejar */}
      </main>
      
      <Footer />
    </div>
  )
}

export default AboutPage