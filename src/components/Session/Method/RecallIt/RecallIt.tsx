import {FC, PropsWithChildren} from 'react'
import {Box} from "@mui/material"
import {styles} from "./RecallIt.style"
import {PropsInterface} from "./RecallIt.constant";
import {useTranslation} from "react-i18next";

const RecallIt: FC = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

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

export default RecallIt;
