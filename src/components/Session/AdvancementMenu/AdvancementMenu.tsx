import {FC, PropsWithChildren} from 'react'
import {Box} from "@mui/material"
import {styles} from "./AdvancementMenu.style"
import {PropsInterface} from "./AdvancementMenu.constant";
import {useTranslation} from "react-i18next";

const AdvancementMenu: FC = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const {} = styles
    const {} = props
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
        <Box>

        </Box>
    );
};

export default AdvancementMenu;
