import EducationList from "../educationList/EducationList"
import { useState } from "react"
import "./education.scss"
import transcript from './transcript.pdf'
import Modules from "../modules/Modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import { ifMobile, ResponsiveButton, ResponsiveHeader } from "../../utils/mobile";


export default function Education(props) {
    const [selected, setSelected] = useState("allMods")
    const list = [
        {
            id: "allMods",
            title: "All-Modules"
        },
        {
            id: "software",
            title: "- Software -",
        },
        {
            id: "hardware",
            title: "- Hardware -",
        },
        {
            id: "y1s1",
            title: "Year1-Sem1",
        },
        {
            id: "y1s2",
            title: "Year1-Sem2",
        },
        {
            id: "y2s1",
            title: "Year2-Sem1",
        },
        {
            id: "y2s2",
            title: "Year2-Sem2",
        },
        {
            id: "y3s1",
            title: "Year3-Sem1",
        },
        {
            id: "y3s2",
            title: "Year3-Sem2",
        },
        {
            id: "y4s1",
            title: "Year4-Sem1",
        },
        // {
        //     id: "y4s2",
        //     title: "Year4-Sem2",
        // },
    ]

    return (
        <div className={ifMobile("education")} id="education">

            <div className="header">
                <ResponsiveHeader title="Education" />
                <div className="description">
                    Bachelor of Engineering in
                    <br /><h2> <a href="https://ceg.nus.edu.sg/" target="_blank" rel="noreferrer">Computer Engineering (Hons)</a> </h2>
                    <br /><a href="https://www.nus.edu.sg/" target="_blank" rel="noreferrer">National University of Singapore</a>
                    <br /><span>CAP:{" "}<h2>4.56/5</h2></span>
                    <br /><br />
                    <a href={transcript} target="_blank" rel="noreferrer">
                        <ResponsiveButton color="primary" title="View Transcript" />
                    </a>
                </div>
            </div>
            <Swiper
                navigation={true}
                slidesPerView={"auto"}
                spaceBetween={20}
            >

                {list.map((item) => (
                    <SwiperSlide key={item.title}>
                        <EducationList
                            title={item.title}
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Modules selected={selected} load={props.load} />
        </div>
    )
}
