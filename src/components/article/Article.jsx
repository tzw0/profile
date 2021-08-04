import { ResponsiveHeader, ResponsiveButton } from '../../utils/mobile';
import './article.scss'
import { ifMobile } from "../../utils/mobile";
import CloseIcon from '@material-ui/icons/Close';

export default function Article(props) {

    return (
        <div className={ifMobile("article")}>
            <div className="container">

                <div className="close" onClick={() => props.close()}>
                    <CloseIcon fontSize="inherit" color="inherit" />
                </div>
                <div className="content">
                    <div className="header">
                        <ResponsiveHeader title={props.data.header} />
                    </div>
                    <span>{props.data.subtext}</span>
                    {props.data.sections.map((s) => (
                        <div className="body">
                            {s.hasOwnProperty("link") ? <a className="link" href={s.link} rel="noreferrer" target="_blank"><ResponsiveButton title={s.title} color="primary" /></a> : <div></div>}
                            {s.hasOwnProperty("article") ? <ResponsiveButton title={s.title} color="secondary" onClick={() => props.load(s.article)} /> : <div></div>}
                            {s.hasOwnProperty("paragraph") ?
                                <div className="paragraph">
                                    {s.title ? <h2>{s.title}</h2> : <div></div>}
                                    <p>{s.paragraph.split("\n").map((i, key) => {
                                        return <div key={key}><br />{i}</div>
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
                                <div className="video-responsive">
                                    <br />
                                    <iframe
                                        src={"https://www.youtube.com/embed/" + s.youtube}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={s.description}
                                    />
                                    <br />
                                    <span>{s.description}</span>
                                    <br />
                                </div> : <div></div>}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
