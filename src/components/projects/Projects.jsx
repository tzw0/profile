import "./projects.scss"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination]);

export default function Projects() {
    const slides = [];

    for (let i = 1; i < 6; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li">
                <img src={"assets/projects/p" + i + ".png"} alt={`Slide ${i}`} />
            </SwiperSlide>
        );
    }
    return (
        <div className="projects" id="projects">
            {/* <React.Fragment>
                <Swiper
                    id="gallery"
                    tag="section"
                    wrapperTag="ul"
                    navigation
                    pagination
                    spaceBetween={0}
                    slidesPerView={1}
                    onInit={(swiper) => console.log("asdasd")}
                    onSlideChange={(swiper) => console.log('slide index changed to : ', swiper.activeIndex)}
                >
                    {slides}
                </Swiper>
            </React.Fragment> */}
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                ...
            </Swiper>
        </div>
    )
}
