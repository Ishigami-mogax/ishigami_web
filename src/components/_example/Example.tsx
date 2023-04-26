import {PropsWithChildren} from 'react'
import {Box} from "@mui/material"
import {styles} from "./Example.style"
import {PropsInterface} from "./Example.constant";
import {useTranslation} from "react-i18next";

const Example = (props:PropsWithChildren<PropsInterface>) => {

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

export default Example;
