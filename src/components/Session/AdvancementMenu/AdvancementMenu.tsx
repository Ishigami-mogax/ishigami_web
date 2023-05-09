import {FC, PropsWithChildren} from 'react'
import {Box, LinearProgress, Typography} from "@mui/material"
import {styles} from "./AdvancementMenu.style"
import {PropsInterface} from "./AdvancementMenu.constant";
import {useTranslation} from "react-i18next";
import MethodCheck from "./MethodCheck/MethodCheck";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const AdvancementMenu: FC<PropsWithChildren<PropsInterface>> = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const {} = styles
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
        <Box>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <ArrowBackRoundedIcon/>
                <Typography sx={{fontSize:38, fontWeight:'700'}}>Daily</Typography>
            </Box>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Box sx={{ width: '100%'}}>
                    <LinearProgress variant="determinate"
                                    value={70}
                                    sx={{borderRadius:1, backgroundColor: '#D9D9D9', height:8, '> span': { background: `linear-gradient(90deg, #FF1200 ${100 - 30}%, #521E1B 100%)`}}}
                    />
                </Box>
                <Typography sx={{fontSize:18, fontWeight:'700', marginLeft:1}}>70%</Typography>
            </Box>
            {methodList.map((method, index) => (
                <MethodCheck {...method} end={(index+1)===methodList.length}/>
            ))}
        </Box>
    );
};

export default AdvancementMenu;
