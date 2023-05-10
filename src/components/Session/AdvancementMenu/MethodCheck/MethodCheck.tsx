import {FC, PropsWithChildren} from 'react'
import {Box, Typography} from "@mui/material"
import {styles} from "./MethodCheck.style"
import {PropsInterface} from "./MethodCheck.constant";
import {useTranslation} from "react-i18next";
import {Image} from "@mui/icons-material";

const MethodCheck: FC<PropsWithChildren<PropsInterface>> = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const { mainContainer, imageContainer, barContainer, nameContainer, nameStyle, barStyle, imageStyle } = styles
    const { name, check, end } = props
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
        <Box sx={mainContainer}>
            <Box sx={imageContainer}>
                <img src={"/ressources/images/" + (check?"check" : "uncheck") + ".png"} alt="Ishigami-logo.png" style={imageStyle}/>
            </Box>
            <Box sx={nameContainer}>
                <Typography sx={nameStyle}>{name}</Typography>
            </Box>
            {!end && (<Box sx={barContainer}>
                <Box sx={{...barStyle, backgroundColor: check ? '#5DC852' : '#D9D9D9'}}/>
            </Box>)}
        </Box>
    )
}

export default MethodCheck;
