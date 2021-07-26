import "./internships.scss"
import { Button } from "@material-ui/core";

export default function Internships() {
    return (
        <div className="internships" id="internships">
            <div className="header">
                <h1>Internships</h1>
            </div>
            {/* <div className="container">
                <div className="internship-container">
                    <img src="assets/internships/dso.jpg" alt="" />
                </div>
                <div className="internship-container">
                    <img src="assets/internships/shopee.jpg" alt="" />
                </div>
            </div> */}

            <div className="container">
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>DSO</h2>
                            <div className="contentBx">
                                <h3>Software Engineer<br /><span>Electronic Systems Division</span></h3>
                            </div>
                            <Button className="btn" variant="contained" color="primary"> find out more</Button>

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
                            <Button className="btn" variant="contained" color="primary"> find out more</Button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
