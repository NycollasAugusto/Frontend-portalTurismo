import React from "react";
import CardService from "./cardService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Imagens
import go from "../assets/imagens/go.png";
import a from "../assets/imagens/a.png";
import ino from "../assets/imagens/ino.png";
import pai from "../assets/imagens/pai.png";
import uni from "../assets/imagens/uni.png";

// Dados dos slides
const tourist_places = [
  { image: go, title: "Gohan", description: "Filho do Goku" },
  { image: a, title: "Universo 7", description: "Personagens principais" },
  { image: ino, title: "Goku Instinto Superior", description: "Transformação D.B Super" },
  { image: pai, title: "Bardock", description: "Pai do Goku" },
  { image: uni, title: "Universo 6", description: "Personagens principais" },
];

const Carousel = () => {
  return (
    <div className="relative z-10 w-full">
      <h1 className="text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
        Dragon Ball (homenagem a Akira Toriyama)
      </h1>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
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
              img={place.image}
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
  );
};

export default Carousel;
