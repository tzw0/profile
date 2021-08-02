import "./modules.scss"
import { isMobile } from "react-device-detect";
import {
    y1s1,
    y1s2,
    y2s1,
    y2s2,
    y3s1,
    y3s2,
    y4s1,
    y4s2,
    hardware,
    software,
    allMods,
} from "../../data"
import { useEffect, useState } from "react"
import Pagination from '@material-ui/lab/Pagination';
import window from "../../utils/window"
import { ifMobile } from "../../utils/mobile";
import { useSwipeable } from "react-swipeable";

function paginate(page, data, maxItems) {
    var upperBound = data.length > page * maxItems ? page * maxItems : data.length;
    return data.slice((page - 1) * maxItems, upperBound)
}

export default function Modules({ selected }) {
    const [data, setData] = useState([]);

    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);
    const [maxPages, setMaxPages] = useState(1);
    const [paginationStyle, setPaginationStyle] = useState({});

    const handleChange = (event, value) => {
        setPage(value);
    };

    const { height, width } = window();
    const cardHeight = (isMobile ? 230 + 40 : 150 + 20);
    const cardWidth = (isMobile ? 350 + 40 : 220 + 22);
    const yDisplacement = isMobile ? 700 : 350;
    const xScale = isMobile ? 0.8 : 0.7;
    const numHorItems = Math.floor(width * xScale / cardWidth)
    const numVertItems = Math.floor((height - yDisplacement) / cardHeight)
    const numHorizontalItems = numHorItems === 0 ? 1 : numHorItems;
    const maxItemsPerPage = numHorizontalItems * (numVertItems === 0 ? 1 : numVertItems);

    const handlers = useSwipeable({
        onSwipedRight: (eventData) => setPage((page + maxPages - 2) % maxPages + 1),
        onSwipedLeft: (eventData) => setPage(page % maxPages + 1),
    });

    useEffect(() => {
        setItems(paginate(page, data, maxItemsPerPage));
    }, [page, data, maxItemsPerPage])

    useEffect(() => {
        switch (selected) {
            case "y1s1":
                setData(y1s1);
                break;
            case "y1s2":
                setData(y1s2);
                break;
            case "y2s1":
                setData(y2s1);
                break;
            case "y2s2":
                setData(y2s2);
                break;
            case "y3s1":
                setData(y3s1);
                break;
            case "y3s2":
                setData(y3s2);
                break;
            case "y4s1":
                setData(y4s1);
                break;
            case "y4s2":
                setData(y4s2);
                break;
            case "hardware":
                setData(hardware);
                break;
            case "software":
                setData(software);
                break;
            case "allMods":
                setData(allMods);
                break;
            default:
                setData([]);
        }

        setMaxPages(Math.ceil(data.length / maxItemsPerPage));
        setPaginationStyle({ width: (maxPages > 7 ? 7 : maxPages) * (isMobile ? 56 : 51) + (isMobile ? 110 : 101) + "px" });
        setPage(1);
    }, [selected, data, maxPages, maxItemsPerPage])

    return (
        <div {...handlers} className={ifMobile("modules")}>
            <div className="pagination" style={paginationStyle}>
                <Pagination count={maxPages} color="primary"
                    page={page}
                    onChange={handleChange}
                />
            </div>
            <div className="container" style={{ gridTemplateColumns: "repeat(" + numHorizontalItems + ",1fr)" }}>
                {items.map((d) => (
                    <div className="item">
                        <img src={"assets/modules/" + d.id + ".jpg"} alt="" />

                        <h3>{d.title}</h3>
                        <h4>{d.id}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
