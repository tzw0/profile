import './intro.scss'
import { Button } from '@material-ui/core'
import resume from './resume.pdf'
import {
    BrowserView,
    MobileView,
} from "react-device-detect";
import { IsLandscape } from '../../utils/window';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="imageContainer">
                <div className="me">
                    <img src="assets/home/homepic.png" alt="" />
                </div>
            </div>

            <div></div>

            <div className="introParagraph">
                <h1>Hi, I'm Zheng Wen</h1>
                <p>I am a final year Computer Engineering Student in NUS specialising in Large Scale Computing. I take pride in my work and actively seek for opportunities to expose myself to new and useful tech tools</p>
                <MobileView><p>Mobile</p></MobileView>
                <BrowserView><p>Browser</p></BrowserView>
                <p>{IsLandscape() ? <span>isLandscape</span> : <span>isPotrait</span>}</p>
                <span className="buttonContainer">
                    <a href={resume} target="_blank" rel="noreferrer">
                        <Button className="resume" variant="contained" color="primary">View Resume</Button>
                    </a>
                    <a href="#projects"><Button className="portfolio" variant="contained" color="secondary">View Portfolio</Button></a>
                </span>
            </div>
        </div >
    )
}
