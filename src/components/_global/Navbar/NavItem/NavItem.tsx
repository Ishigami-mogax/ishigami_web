import {PropsWithChildren} from 'react'
import {Box, Typography} from "@mui/material"
import {styles} from "./NavItem.style"
import {PropsInterface} from "./NavItem.constant";
import {useTranslation} from "react-i18next";

const NavItem = (props: PropsWithChildren<PropsInterface>) => {
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
            <Typography>{}</Typography>
        </Box>
    );
}
