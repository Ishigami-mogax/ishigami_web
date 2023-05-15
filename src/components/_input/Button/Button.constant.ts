import {MouseEventHandler} from "react";

export interface PropsInterface {
    type?: "button" | "submit" | "reset";
    image?: string;
    icon?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
