import {FC, PropsWithChildren} from "react";
import {PropsInterface} from "./Button.constant";
import {styles} from "./Button.style";
import {useTranslation} from "react-i18next";
import {Button} from "@mui/material";
import Icon from "@mui/material/Icon";

const Buttons: FC<PropsWithChildren<PropsInterface>> = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const {buttonStyle} = styles
    const {text, icon, onClick} = props
    const { t } = useTranslation()
    //endregion

    //region Context
    //endregion

    //region Route
    //endregion

    //region UseState
    //endregion

    //region UseEffect

    //endregion

    //region Handle
    //endregion

    return (
        <Button variant="contained" sx={buttonStyle} type={"submit"} onClick={onClick}>
            {icon && <Icon>{icon}</Icon>}
            {t(text)}
        </Button>
    );
};

export default Buttons;
