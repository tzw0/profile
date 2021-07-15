import './topbar.scss'
import {
    Mail, GitHub
} from "@material-ui/icons"
import { ReactComponent as Logo } from './logo.svg';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <Logo className="logoIcon" />
                    </a>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>tanzhengwen.official@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                        <span><a href="https://github.com/tzw0" target="_blank" rel="noreferrer">tzw0</a></span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
