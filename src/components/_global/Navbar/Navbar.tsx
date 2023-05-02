import {PropsWithChildren} from 'react'
import {Box} from "@mui/material"
import {styles} from "./Navbar.style"
import {PropsInterface} from "./Navbar.constant";
import {useTranslation} from "react-i18next";

const Navbar = (props: PropsWithChildren<PropsInterface>) => {
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
}
