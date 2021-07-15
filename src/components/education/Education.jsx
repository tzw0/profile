import EducationList from "../educationList/EducationList"
import { useState } from "react"
import Button from '@material-ui/core/Button';
import "./education.scss"
import transcript from './transcript.pdf'
import Modules from "../modules/Modules";

export default function Education() {
    const [selected, setSelected] = useState("allMods")
    const list = [
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
        {
            id: "y4s2",
            title: "Year4-Sem2",
        },
        {
            id: "hardware",
            title: "- Hardware -",
        },
        {
            id: "software",
            title: "- Software -",
        },
        {
            id: "allMods",
            title: "All-Modules"
        }
    ]

    return (
        <div className="education" id="education">

            <div className="header">
                <h1>EDUCATION</h1>
                <div className="description">
                    Bachelor of Engineering in
                    <br /><h2> <a href="https://ceg.nus.edu.sg/" target="_blank" rel="noreferrer">Computer Engineering (Hons)</a> </h2>
                    <br /><a href="https://www.nus.edu.sg/" target="_blank" rel="noreferrer">National University of Singapore</a>
                    <br /><span>CAP:{" "}<h2>4.63/5</h2></span>
                    <br /><br />
                    <a href={transcript} target="_blank" rel="noreferrer">
                        <Button variant="contained" color="primary">View Transcript</Button>
                    </a>
                </div>
            </div>
            <ul>
                {list.map((item) => (
                    <EducationList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}
            </ul>
            <Modules selected={selected} />
        </div>
    )
}
