// CarruselGaleria.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarruselGaleria = ({ trabajos, setIndiceActual }) => {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            slidesPerView={1}
            onSlideChange={(swiper) => setIndiceActual(swiper.realIndex)}
            className="swiper-galeria"
        >
            {trabajos.map((trabajo, index) => (
                <SwiperSlide key={index}>
                    <div className="galeria-slide">
                        <img
                            src={trabajo.imagen}
                            alt={trabajo.titulo?.es || `Trabajo ${index + 1}`}
                            className="galeria-imagen"
                        />
                        <div className="overlay-negro" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarruselGaleria;
