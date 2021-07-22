import "./internships.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Navigation,
    Pagination,
    EffectFade,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFade, Pagination, Navigation]);

export default function Internships() {
    return (
        <div className="internships" id="internships">
            <div className="header">
                <h1>Internships</h1>
            </div>
            <div className="slides">
                <Swiper
                    effect={'fade'}
                    slidesPerView={1}
                    spaceBetween={500}
                    centeredSlides={true}
                    pagination={{
                        "clickable": true,
                    }}
                    navigation={true}
                    className="mySwiper">
                    <SwiperSlide>
                        <img src="assets/internships/dso.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="assets/internships/shopee.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
