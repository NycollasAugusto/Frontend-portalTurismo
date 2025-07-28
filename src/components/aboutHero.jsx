import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  font-family: 'Arial', sans-serif;
  position: relative;
`;

const OrangeSquare = styled.div`
  position: absolute;
  width: 100vw;
  height: 90vh;
  background-color: orange; /* Fundo alterado para laranja */
  border-radius: 8px;
  z-index: 0;
`;

const TextWrapper = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 1rem;
  max-width: 80vw;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
`;

const Description = styled(motion.p)`
  font-size: 1.5rem;
  color: white;
`;

const AboutPage = () => {
  return (
    <Container>
      <OrangeSquare />
      <TextWrapper>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Sobre Nós
        </Title>
        <Description
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >Achei bastante  interessante a parte pela a qual eu poder criar minha própria página de um único 
        </Description>
      </TextWrapper>
    </Container>
  );
};

export default AboutPage;







