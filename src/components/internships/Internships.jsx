import "./internships.scss"
import { ResponsiveButton } from "../../utils/mobile";

export default function Internships() {
    return (
        <div className="internships" id="internships">
            <div className="header">
                <h1>Internships</h1>
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
                            <ResponsiveButton color="primary" title="find out more" />
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
                            <ResponsiveButton color="primary" title="find out more" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
