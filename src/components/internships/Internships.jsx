import "./internships.scss"
import { ifMobile, isMobilePotrait, ResponsiveButton, ResponsiveHeader } from "../../utils/mobile";
import window from "../../utils/window";
import { SeparationKey } from "../../utils/constants";

export default function Internships(props) {
    const { height, width } = window();
    const mobilePotrait = isMobilePotrait();
    return (
        <div className={ifMobile("internships")} id="internships">
            <div className="header">
                <ResponsiveHeader title="Internships" />
            </div>

            <div className="container">
                <div className="card">
                    <div className="box">
                        {(mobilePotrait && height * 1.0 / width < 1.52) || (!mobilePotrait && height < 750) ?
                            <div className="content">
                                <h2>DSO</h2>
                                <ResponsiveButton color="primary" title="find out more" onClick={() => props.load("internships" + SeparationKey + "dso")} />
                            </div> :
                            <div className="content">
                                <h2>DSO</h2>
                                <div className="contentBx">
                                    <h3>Software Engineer<br /><span>Electronic Systems Division</span></h3>
                                </div>
                                <p>jun 20 - aug 20</p>
                                <ResponsiveButton color="primary" title="find out more" onClick={() => props.load("internships" + SeparationKey + "dso")} />
                            </div>
                        }
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        {(mobilePotrait && height * 1.0 / width < 1.52) || (!mobilePotrait && height < 750) ?
                            <div className="content">
                                <h2>Shopee</h2>
                                <ResponsiveButton color="primary" title="find out more" onClick={() => props.load("internships" + SeparationKey + "shopee")} />
                            </div> :
                            <div className="content">
                                <h2>Shopee</h2>
                                <div className="contentBx">
                                    <h3>TechOps Engineer<br /><span>SPACE Team</span></h3>
                                </div>
                                <p>jan 21 - jul 21</p>
                                <ResponsiveButton color="primary" title="find out more" onClick={() => props.load("internships" + SeparationKey + "shopee")} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
