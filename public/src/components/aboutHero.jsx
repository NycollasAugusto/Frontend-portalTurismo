import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ffb347, #ffcc33);
  font-family: 'Russo One', sans-serif;
  position: relative;
  overflow: hidden;
`;

const OrangeSquare = styled(motion.div)`
  position: absolute;
  top: 5%;
  left: 10%;
  width: 80vw;
  height: 180vh;
  background: linear-gradient(145deg, #ff6f00, #ffcc33);
  border-radius: 30px;
  box-shadow: 0 0 50px 15px rgba(255, 165, 0, 0.7);
  z-index: 0;
  filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.8));
`;

const TextWrapper = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem 1rem;
  max-width: 720px;
  margin: 0 auto;
  color: #fff;
  text-shadow:
    0 0 5px #fff3b0,
    0 0 10px #ffcc33,
    0 0 20px #ffa500,
    0 0 30px #ff8c00,
    0 0 40px #ff6f00;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.1em;
`;

const Description = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 1.5;
`;

const AboutPage = () => {
  return (
    <Container>
      <OrangeSquare
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <TextWrapper>
        <Title
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Sobre Nós
        </Title>
        <Description
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
        >
          Achei bastante interessante a parte pela qual eu poder criar minha própria página de um jeito único, 
          misturando design, animação e o universo Dragon Ball!
        </Description>
      </TextWrapper>
      <div className="relative mt-[70px] z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_0_15px_rgba(255,215,0,0.9)]">
              Uma Homenagem ao Lendário Akira Toriyama
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed">
              Criador de <span className="text-orange-200 font-bold">Dragon Ball</span>, Akira Toriyama revolucionou o universo dos animes com sua arte única,
              personagens inesquecíveis e batalhas que marcaram gerações.
            </p>
          </div>
          <section className="py-20 px-8 text-center">
          <h3 className="text-4xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            Guerreiros Z: Em Breve
            <p className="text-white/80 text-lg z-10">
            Conheça Goku, Vegeta, Gohan e outros heróis que protegeram o universo com coragem e força.
          </p>
          </h3>
          
          
          
        </section>
    </Container>
  );
};

export default AboutPage;
