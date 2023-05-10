import {FC, PropsWithChildren} from 'react'
import {Box, Button, LinearProgress, Typography} from "@mui/material"
import {styles} from "./AdvancementMenu.style"
import {PropsInterface} from "./AdvancementMenu.constant";
import {useTranslation} from "react-i18next";
import MethodCheck from "./MethodCheck/MethodCheck";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const AdvancementMenu: FC<PropsWithChildren<PropsInterface>> = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const { progressBarContainer, progressContainer, progressBar, titleContainer, titleStyle, percentStyle } = styles
    const { methodList } = props
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
        <>
            <Box sx={titleContainer}>
                <ArrowBackRoundedIcon/>
                <Typography sx={titleStyle}>Daily</Typography>
            </Box>
            <Box sx={progressContainer}>
                <Box sx={progressBarContainer}>
                    <LinearProgress variant="determinate"
                                    value={70}
                                    sx={{...progressBar, '> span': { background: `linear-gradient(90deg, #FF1200 ${100 - 30}%, #521E1B 100%)`}}}
                    />
                </Box>
                <Typography sx={percentStyle}>70%</Typography>
            </Box>
            <Box sx={{marginTop:5, marginBottom:5}}>
            {methodList.map((method, index) => (
                <MethodCheck {...method} end={(index+1)===methodList.length}/>
            ))}
            </Box>
            <Button sx={{backgroundColor:'red', color:'white', padding:'10px 20px'}}>Annuler la session</Button>
        </>
    );
};

export default AdvancementMenu;
