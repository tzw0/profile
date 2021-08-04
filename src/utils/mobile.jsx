import { isMobile } from "react-device-detect";
import { Button } from "@material-ui/core";
import { IsLandscape } from "./window";

export function ifMobile(className) {
    return isMobile && !IsLandscape() ? className + " mobile" : className;
}

export const ResponsiveButton = ((props) => {
    return <Button className={ifMobile("btn")} variant="contained" color={props.color} type={props.type} onClick={props.onClick} >{props.title}</ Button>;
});

export const ResponsiveHeader = ((props) => {
    return isMobile && !IsLandscape() ?
        <h1 className="mobile">{props.title}</h1>
        : <h1>{props.title}</h1>;
});

export const isMobilePotrait = (() => {
    return isMobile && !IsLandscape();
})
