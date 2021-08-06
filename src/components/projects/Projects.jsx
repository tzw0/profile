import "./projects.scss"
import React from 'react';
import { useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Navigation,
    Pagination
} from 'swiper/core';
import { projectData, projectTags } from "./projectData";

import window from "../../utils/window";
import { ifMobile, isMobilePotrait, ResponsiveButton, ResponsiveHeader } from "../../utils/mobile";
import { SeparationKey } from "../../utils/constants";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function filter(tags_) {
    if (tags_.length === 0) {
        return projectData
    }

    const projects_ = []
    var searchByProjectTitle = false

    for (let t = 0; t < tags_.length; t++) {
        if (tags_[t][0] === "*") {
            searchByProjectTitle = true
            var projectTitle = tags_[t].slice(2)
            for (let p = 0; p < projectData.length; p++) {
                if (projectData[p].title === projectTitle) {
                    projects_.push(projectData[p])
                    break
                }
            }
        }
    }

    if (searchByProjectTitle) {
        return projects_
    }

    for (let p = 0; p < projectData.length; p++) {
        var remove = false
        for (let t = 0; t < tags_.length; t++) {
            var projectTags = new Set(projectData[p].tags)
            if (projectTags.has(tags_[t]) === false) {
                remove = true
                break
            }
        }
        if (!remove) {
            projects_.push(projectData[p]);
        }

    }

    return projects_
}


export const useAutocompleteMobileStyles = makeStyles((theme) => ({
    fontSize: "inherit",

    root: {
        "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
            transform: "translate(34px, 20px) scale(1);"
        }
    },
    inputRoot: {
        color: "white",
        fontSize: "inherit",
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
            paddingLeft: 26
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#DF0252"
        }
    },
    groupLabel: {
        fontSize: "30px"
    },
    paper: {
        background: "#111",
        color: "white",
        fontSize: "30px",
    },
    option: {
        // Hover with light-grey
        '&[data-focus="true"]': {
            backgroundColor: '#4452B8',
            borderColor: 'transparent',
        },
        // Selected has dark-grey
        '&[aria-selected="true"]': {
            backgroundColor: "#DF0252",
            borderColor: 'transparent',
        },
    },
    clearIndicator: {
        color: "white",
        fontSize: "inherit",
    },
    popupIndicator: {
        color: "white",
        fontSize: "inherit",
    },
    tag: {
        fontSize: "inherit",
        height: "50px",

        "& .MuiChip-deleteIcon": {
        },
    }
}));

export const useAutocompleteStyles = makeStyles((theme) => ({
    fontSize: "inherit",

    root: {
        "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
            transform: "translate(34px, 20px) scale(1);"
        }
    },
    inputRoot: {
        color: "white",
        fontSize: "inherit",
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
            paddingLeft: 26
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#DF0252"
        }
    },
    paper: {
        background: "#212",
        color: "white",
    },
    option: {
        // Hover with light-grey
        '&[data-focus="true"]': {
            backgroundColor: '#4452B8',
            borderColor: 'transparent',
        },
        // Selected has dark-grey
        '&[aria-selected="true"]': {
            backgroundColor: "#DF0252",
            borderColor: 'transparent',
        },
    },
    clearIndicator: {
        color: "white",
        fontSize: "inherit",
    },
    popupIndicator: {
        color: "white",
        fontSize: "inherit",
    },
    tag: {
        fontSize: "inherit",
    }
}));

export default function Projects(props) {
    const { height } = window();
    const fixedOptions = [];
    const [tags, setTags] = useState([...fixedOptions]);
    const [projects, setProjects] = useState([]);
    const [projectIndex, setProjectIndex] = useState(0);

    const handlers = useSwipeable({
        onSwipedRight: (eventData) => setProjectIndex((projectIndex - 1 + projects.length) % projects.length),
        onSwipedLeft: (eventData) => setProjectIndex((projectIndex + 1) % projects.length),
    });

    useEffect(() => {
        setProjects(filter(tags));
        setProjectIndex(0);
    }, [tags])

    const classes = useAutocompleteStyles();
    const mobileClasses = useAutocompleteMobileStyles();

    return (
        <div {...handlers} className={ifMobile("projects")} id="projects">
            <div className="header">
                <ResponsiveHeader title="Projects" />
            </div>
            <div className="controls">
                <Autocomplete
                    classes={isMobilePotrait() ? mobileClasses : classes}
                    multiple
                    limitTags={5}
                    id="fixed-tags-demo"
                    value={tags}
                    onChange={(event, newValue) => {
                        setTags([
                            ...fixedOptions,
                            ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
                        ]);
                    }}
                    options={projectTags}
                    getOptionLabel={(option) => option}
                    renderTags={(tagValue, getTagProps) =>
                        tagValue.map((option, index) => (
                            <Chip
                                color="secondary"
                                label={option}
                                {...getTagProps({ index })}
                                disabled={fixedOptions.indexOf(option) !== -1}
                            />
                        ))
                    }
                    style={{ width: "80%", minWidth: "400px", color: "white" }}
                    renderInput={(params) => (
                        <TextField {...params}
                            variant="outlined" placeholder="Search Project Tags or Project Titles" />
                    )}
                />
            </div>
            {isMobilePotrait() ?
                <div className="mobile-project-container">
                    {projects[projectIndex] ?
                        <div className="card">
                            <h3>← swipe left or right to browse projects →</h3>
                            <div className="content">
                                <h2>{projects[projectIndex].title}</h2>

                                <div className="tags">
                                    {projects[projectIndex].tags.map((t) => (
                                        <div className="tag"
                                            onClick={() => {
                                                var tagsSet = new Set(tags)
                                                if (tagsSet.has(t)) return;
                                                setTags(tags.concat(t));
                                            }}>{t}</div>
                                    ))}
                                </div>

                                <div className="projectCover">
                                    <img src={projects[projectIndex].img} alt=""></img>
                                </div>

                                <p>
                                    {projects[projectIndex].description}
                                    <br />
                                    <div className="timeframe">{projects[projectIndex].timeframe}</div>
                                </p>

                            </div>

                            <ResponsiveButton color="primary" className="btn" title="Find out more" onClick={() => props.load("projects" + SeparationKey + projects[projectIndex].id)} />
                        </div>
                        : <div className="no-projects">
                            <h2 style={
                                projects.length === 0 ? { visibility: "visible" } : { visibility: "hidden" }
                            }>...No Project Matches...</h2>
                        </div>
                    }
                </div>
                :
                <div>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={50}
                        freeMode={true}
                        centeredSlides={true}
                        pagination={{
                            "clickable": true,
                        }}
                        navigation={true}
                        className="mySwiper">
                        {projects.map((d) => (
                            <SwiperSlide>
                                <div className="card">
                                    <div className="layer"></div>
                                    <div className="content">
                                        <h2>{d.title}</h2>
                                        <div className="tags">
                                            {d.tags.map((t) => (
                                                <div className="tag"
                                                    onClick={() => {
                                                        var tagsSet = new Set(tags)
                                                        if (tagsSet.has(t)) return;
                                                        setTags(tags.concat(t));
                                                    }}>{t}</div>
                                            ))}
                                        </div>
                                        <div className="projectCover">
                                            <img src={d.img} alt=""></img>
                                        </div>

                                        {
                                            height - 350 < 600 ?
                                                <p></p> :
                                                <p>
                                                    {d.description}
                                                    <br />
                                                    <div className="timeframe">{d.timeframe}</div>
                                                </p>
                                        }

                                        <ResponsiveButton color="primary" className="btn" title="Find out more" onClick={() => props.load("projects" + SeparationKey + d.id)} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="no-projects">
                        <h2 style={
                            projects.length === 0 ? { visibility: "visible" } : { visibility: "hidden" }
                        }>...No Project Matches...</h2>
                    </div>
                </div>
            }
        </div>
    )
}
