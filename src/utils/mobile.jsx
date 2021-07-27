import { isMobile } from "react-device-detect";
import { Button } from "@material-ui/core";

export function ifMobile(className) {
    return isMobile ? className + " mobile" : className;
}

export const ResponsiveButton = ((props) => {
    return <Button className={ifMobile("btn")} variant="contained" color={props.color} type={props.type}>{props.title}</Button>;
});

export const ResponsiveHeader = ((props) => {
    return isMobile ?
        <h1 className="mobile">{props.title}</h1>
        : <h1>{props.title}</h1>;
});