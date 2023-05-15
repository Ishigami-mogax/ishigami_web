import {ChangeEventHandler} from "react";

export interface PropsInterface {
    id: string;
    label: string;
    name: string;
    type?: string;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}
