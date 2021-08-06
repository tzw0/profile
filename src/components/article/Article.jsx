import { ResponsiveHeader, ResponsiveButton } from '../../utils/mobile';
import './article.scss'
import { ifMobile } from "../../utils/mobile";
import CloseIcon from '@material-ui/icons/Close';
import { forwardRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ArticleData, SerialiseArticleData } from './ArticleData';
import { useAutocompleteStyles, useAutocompleteMobileStyles } from '../projects/Projects';
import { isMobilePotrait } from '../../utils/mobile';
import { ReactComponent as Logo } from './logo.svg';
import { SeparationKey } from '../../utils/constants';

export const Article = forwardRef((props, ref) => {
    const classes = useAutocompleteStyles();
    const mobileClasses = useAutocompleteMobileStyles();
    SerialiseArticleData();

    return (
        <div className={ifMobile("article")} ref={ref} >
            <div className="container" >
                <div className="article-topbar">
                    <a href="#intro" className="logo" onClick={() => props.close()}>
                        <Logo className="logoIcon" />
                    </a>
                    <div className="article-search">
                        <Autocomplete
                            classes={isMobilePotrait() ? mobileClasses : classes}
                            key={props.data.header}
                            value={props.articleID}
                            groupBy={(option) => option.split(SeparationKey)[0]}
                            options={Object.keys(ArticleData).filter(e => e !== "")}
                            getOptionLabel={(option) => option}
                            style={{ width: "100%", minWidth: "300px" }}
                            onChange={(event, value) => props.load(value)}
                            renderInput={(params) => <TextField {...params} placeholder="Search Article" variant="outlined" />}
                        />
                    </div>
                    <div className="close" onClick={() => props.close()}>
                        <CloseIcon fontSize="inherit" color="inherit" />
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                        <ResponsiveHeader title={props.data.header} />
                    </div>
                    <span>{props.data.subtext}</span>
                    {props.data.sections.map((s) => (
                        <div key={s.key} className="body">
                            {s.hasOwnProperty("link") ? <a className="link" href={s.link} rel="noreferrer" target="_blank"><ResponsiveButton title={s.title} color="primary" /></a> : <div></div>}
                            {s.hasOwnProperty("article") ? <div className="link"> <ResponsiveButton title={s.title} color="secondary" onClick={() => props.load(s.article)} /> </div> : <div></div>}
                            {s.hasOwnProperty("paragraph") ?
                                <div className="paragraph">
                                    {s.title ? <h2>{s.title}</h2> : <div></div>}
                                    <p>{s.paragraph.split("\n").map((i, key) => {
                                        return <span key={key}><br />{i}<br /></span>
                                    })}</p>
                                </div> : <div></div>}
                            {s.hasOwnProperty("img") ?
                                <div className="media-img">
                                    <br />
                                    <div className="img-container">
                                        <img src={s.img} alt="" />
                                    </div>
                                    <span>{s.description}</span>
                                    <br />

                                </div> : <div></div>}
                            {s.hasOwnProperty("youtube") ?
                                <div className="video">
                                    <br />
                                    <div className="video-responsive">
                                        <iframe
                                            src={"https://www.youtube.com/embed/" + s.youtube + "?ps=docs&controls=1"}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={s.description}
                                        />
                                    </div>
                                    <span>{s.description}</span>
                                    <br />
                                </div>
                                : <div></div>}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
});
