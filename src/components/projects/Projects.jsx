import "./projects.scss"
import React from 'react';
import { useEffect, useState } from "react"
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

const useMobileStyles = makeStyles((theme) => ({
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
        background: "#333",
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

const useStyles = makeStyles((theme) => ({
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
        background: "#333",
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

export default function Projects() {
    const { height } = window();
    const fixedOptions = [];
    const [tags, setTags] = useState([...fixedOptions]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(filter(tags));
    }, [tags])

    const classes = useStyles();
    const mobileClasses = useMobileStyles();

    return (
        <div className={ifMobile("projects")} id="projects">
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
                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={50}
                        freeMode={false}
                        centeredSlides={true}
                        pagination={{
                            "clickable": true,
                        }}
                        navigation={true}>
                        {projects.map((d) => (
                            <SwiperSlide>
                                <h2>{d.title}</h2>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
                :
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
                                        height - 350 < 540 ?
                                            <p></p> :
                                            <p>
                                                {d.description}
                                                <br />
                                                <div className="timeframe">{d.timeframe}</div>
                                            </p>
                                    }

                                    <ResponsiveButton color="primary" className="btn" title="Find out more" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
            <div className="no-projects">
                <h2 style={
                    projects.length === 0 ? { visibility: "visible" } : { visibility: "hidden" }
                }>...No Project Matches...</h2>
            </div>
        </div>
    )
}
