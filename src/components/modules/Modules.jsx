import "./modules.scss"
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
import { makeStyles } from '@material-ui/core/styles';
import window from "../../utils/window"

const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "white",
        }
    }
}));

function paginate(page, data, maxItems) {
    var upperBound = data.length > page * maxItems ? page * maxItems : data.length;
    return data.slice((page - 1) * maxItems, upperBound)
}

export default function Modules({ selected }) {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);
    const [maxPages, setMaxPages] = useState(1);
    const [paginationStyle, setPaginationStyle] = useState({});

    const handleChange = (event, value) => {
        setPage(value);
    };

    const { height, width } = window();
    const numHorizontalItems = ((width * 0.7 / (220 + 22)) >> 0 === 0 ? 1 : Math.floor(width * 0.7 / (220 + 22)));
    const maxItemsPerPage = numHorizontalItems *
        (((height - 350) / (150 + 20)) >> 0 === 0 ? 1 : Math.floor(((height - 350) / (150 + 20))));

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
        setPaginationStyle({ width: (maxPages > 7 ? 7 : maxPages) * 51 + 101 + "px" });
        setPage(1);
    }, [selected, data, maxPages, maxItemsPerPage])

    return (
        <div className="modules">
            <div className="pagination" style={paginationStyle}>
                <Pagination classes={{ ul: classes.ul }} count={maxPages} color="primary"
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
