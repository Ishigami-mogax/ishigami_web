import {FC, PropsWithChildren} from 'react'
import {Box, Typography} from "@mui/material"
import {styles} from "./MethodCheck.style"
import {PropsInterface} from "./MethodCheck.constant";
import {useTranslation} from "react-i18next";
import {Image} from "@mui/icons-material";

const MethodCheck: FC<PropsWithChildren<PropsInterface>> = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const {} = styles
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
        <Box sx={{display:'grid', gridTemplateColumns:"repeat(2, auto 1fr)", rowGap:1, columnGap:1, width:'fit-content', marginBottom:1}}>
            <Box sx={{gridColumn:1, gridRow: 1, display:'flex', justifyContent:'center'}}>
                <img src={"/ressources/images/" + (check?"check" : "uncheck") + ".png"} alt="Ishigami-logo.png" style={{width: "50px", height:"50px"}}/>
            </Box>
            <Box sx={{gridColumn:2, gridRow: 1, display:'flex', alignItems:'center'}}>
                <Typography sx={{fontSize:18, fontWeight:'700'}}>{name}</Typography>
            </Box>
            {!end && (<Box sx={{gridColumn:1, gridRow: 2, display:'flex', justifyContent:'center'}}>
                <Box sx={{backgroundColor: check ? '#5DC852' : '#D9D9D9', width:2, height:60}}/>
            </Box>)}
        </Box>
    )
}

export default MethodCheck;
