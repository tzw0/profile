import './intro.scss'
import resume from './resume.pdf'
import { ifMobile, ResponsiveButton, ResponsiveHeader } from '../../utils/mobile';

export default function Intro() {
    return (
        <div className={ifMobile("intro")} id="intro">
            <div className="imageContainer">
                <div className="me">
                    <img src="assets/home/homepic.png" alt="" />
                </div>
            </div>

            <div></div>

            <div className="introParagraph">
                <ResponsiveHeader title="Hi, I'm Zheng Wen" />
                <p>I’m an NUS Computer Engineering Graduate (Class of 2022) with a professional focus on software infrastructure and distributed systems. I thrive on ownership—taking projects from initial design to deployment and always actively seeking to leverage modern, high-impact technologies to solve complex problems.</p>
                <span className="buttonContainer">
                    <a href={resume} target="_blank" rel="noreferrer"><ResponsiveButton color="primary" title="View Resume" /></a>
                    <a href="#projects"><ResponsiveButton color="secondary" title="view portfolio" /></a>
                </span>
            </div>
        </div >
    )
}
