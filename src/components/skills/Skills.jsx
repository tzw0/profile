import "./skills.scss"
import React from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { skillData } from "./skillData";
import { Button } from "@material-ui/core";
import { useState } from "react";

const Panel = ((props) => {
    return (
        <div className="panel">
            <div className="panel_text">
                <h3>{props.skill}</h3>
                <h4>{props.percent}%</h4>
            </div>
            <LinearProgress variant="determinate" value={props.percent} color="secondary" />
        </div>
    );
});

class PanelCollection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: this.props.expanded,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.expanded !== this.props.expanded && this.props.expanded !== null) {
            this.setState({ expanded: this.props.expanded })
        }
    }

    render() {

        const SkillIcon = this.props.icon;
        const rowSpan = "span " + this.props.panels.length * 2 + 1;

        return (
            <div style={{ gridRow: this.state.expanded ? rowSpan : "span 1", gridColumn: "span 1" }}>
                <div className="panel_collection">
                    <div className="collection_header">
                        <h2><SkillIcon fontSize='medium' />&nbsp;{this.props.title}</h2>
                        <span className="expand_btn" onClick={() => {
                            this.setState({ expanded: !this.state.expanded })
                            this.props.resetExpandedAll()
                        }}> {this.state.expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
                    </div>
                    <div className={this.state.expanded ? "panels active" : "panels"}>
                        {this.props.panels.map((p) => (
                            <Panel percent={this.state.expanded ? p.percent : 0} skill={p.skill} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default function Skills() {
    const [expandAll, setExpandAll] = useState(false);
    const resetExpandedAll = (() => {
        setExpandAll(null);
    })

    return (
        <div className="skills" id="skills">
            <div className="header">
                <h1>Skills</h1>
                <span className="subtitle">
                    <Button className="btn" variant="contained" color="primary" size="small" onClick={() => setExpandAll(false)}><ExpandLessIcon /></Button>
                    Technical Skills I Know
                    <Button className="btn" variant="contained" color="secondary" size="small" onClick={() => setExpandAll(true)}><ExpandMoreIcon /></Button>
                </span>

            </div>
            <div className="skill_stat">
                {skillData.map((s) => (
                    <PanelCollection title={s.title} panels={s.panels} icon={s.icon} expanded={expandAll} resetExpandedAll={resetExpandedAll} />
                ))}
            </div>
        </div >
    )
}
