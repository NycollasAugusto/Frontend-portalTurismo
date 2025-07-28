import React from "react";
import CardService from "./cardService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Importa o módulo de autoplay
import "swiper/css";

import gohan from "../assets/imagens/gohan.png";
import a from "../assets/imagens/a.png";
import instintos from "../assets/imagens/instintos.png";
import pai from "../assets/imagens/pai.png";
import universo6 from "../assets/imagens/universo6.png";

const tourist_places = [
  { Image: gohan, title: "Gohan", description: "Filho do Goku" },
  { Image: a, title: "Universo 7", description: "Personagens principais" },
  { Image: instintos, title: "Goku Instinto Superior", description: "Transformação D.B Super" },
  { Image: pai, title: "Bardock", description: "Pai do Goku" },
  { Image: universo6, title: "Universo 6", description: "Personagens principais" },
];

const Carousel = () => {
  return (
    <>
      <div className="relative z-10 w-full">
        <h1 className="text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
          Dragon Ball (homenagem a Akira Toriyama)
        </h1>
        <div>
          <Swiper
            modules={[Autoplay]} // Habilita o módulo de autoplay
            autoplay={{ delay: 3000, disableOnInteraction: false }} // 3 segundos
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {tourist_places.map((place, index) => (
              <SwiperSlide key={index}>
                <CardService
                  img={place.Image}
                  alt={place.description}
                  titulo={place.title}
                  descricao={place.description}
                  link="#"
                  botao="Saiba Mais"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Carousel;
