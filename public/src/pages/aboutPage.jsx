import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AboutHero from "../components/aboutHero";

const AboutPage = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-dbz-gradient text-white font-dbz">
      <Navbar />

      <main className="flex-grow">
        <AboutHero />
      </main>

      <Footer />
    </div>
    </>
  );
};

export default AboutPage;
