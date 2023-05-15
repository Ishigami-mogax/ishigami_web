import {MouseEventHandler} from "react";

export interface PropsInterface {
    image?: string;
    icon?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
