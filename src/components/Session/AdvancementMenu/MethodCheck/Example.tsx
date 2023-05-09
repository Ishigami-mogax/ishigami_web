import {FC, PropsWithChildren} from 'react'
import {Box} from "@mui/material"
import {styles} from "./Example.style"
import {PropsInterface} from "./MethodCheck.constant";
import {useTranslation} from "react-i18next";

const Example: FC = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

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
