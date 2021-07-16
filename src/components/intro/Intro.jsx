import './intro.scss'
import { Button } from '@material-ui/core'

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
                <span className="buttonContainer">
                    <Button className="resume" variant="contained" color="primary">View Resume</Button>
                    <Button className="portfolio" variant="contained" color="secondary">View Portfolio</Button>
                </span>
            </div>
        </div>
    )
}
