import './intro.scss'
import resume from './resume.pdf'
import {
    BrowserView,
    MobileView,
} from "react-device-detect";
import { IsLandscape } from '../../utils/window';
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
                <p>I am a final year Computer Engineering Student in NUS specialising in Large Scale Computing. I take pride in my work and actively seek for opportunities to expose myself to new and useful tech tools</p>
                <MobileView><p>Mobile</p></MobileView>
                <BrowserView><p>Browser</p></BrowserView>
                <p>{IsLandscape() ? <span>isLandscape</span> : <span>isPotrait</span>}</p>
                <span className="buttonContainer">
                    <a href={resume} target="_blank" rel="noreferrer"><ResponsiveButton color="primary" title="View Resume" /></a>
                    <a href="#projects"><ResponsiveButton color="secondary" title="view portfolio" /></a>
                </span>
            </div>
        </div >
    )
}
