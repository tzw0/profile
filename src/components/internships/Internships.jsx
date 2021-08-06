import "./internships.scss"
import { ifMobile, ResponsiveButton, ResponsiveHeader } from "../../utils/mobile";
import { SeparationKey } from "../../utils/constants";

export default function Internships(props) {
    return (
        <div className={ifMobile("internships")} id="internships">
            <div className="header">
                <ResponsiveHeader title="Internships" />
            </div>

            <div className="container">
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>DSO</h2>
                            <div className="contentBx">
                                <h3>Software Engineer<br /><span>Electronic Systems Division</span></h3>
                            </div>
                            <row>jun 20 - aug 20</row>
                            <ResponsiveButton color="primary" title="find out more" onClick={() => props.load("internships" + SeparationKey + "dso")} />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>Shopee</h2>
                            <div className="contentBx">
                                <h3>TechOps Engineer<br /><span>SPACE Team</span></h3>
                            </div>
                            <row>jan 21 - jul 21</row>
                            <ResponsiveButton color="primary" title="find out more" onClick={() => props.load("internships" + SeparationKey + "shopee")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
