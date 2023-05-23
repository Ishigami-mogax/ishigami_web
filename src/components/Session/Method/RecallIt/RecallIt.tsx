import {FC, PropsWithChildren, useEffect, useState} from 'react'
import {Box, Card, CardContent, LinearProgress, Typography} from "@mui/material"
import {styles} from "./RecallIt.style"
import {PropsInterface} from "./RecallIt.constant";
import {useTranslation} from "react-i18next";
import moment from "moment";
import Button from "../../../_input/Button/Button";
import {useInterval} from "usehooks-ts";

const RecallIt: FC<PropsWithChildren<PropsInterface>> = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const { cardListElement, cardMain, mainContainer, mainTypo, itemTypo} = styles
    const { recall, callback, handleError } = props
    const { t } = useTranslation()
    const [listElement, setListElement] = useState([...recall])

    //endregion

    //region Context
    //endregion

    //region Route
    //endregion

    //region UseState
    const [hide, setHide] = useState<1 | 2 | 3>(1)
    const [startTime, setStartTime] = useState(moment())
    const [loopTime, setLoopTime] = useState(0)
    //endregion

    //region UseEffect

    useInterval(() => {
        if(loopTime>=30000){
            setHide(3)
        } else if(hide != 2) {
            setLoopTime(moment().diff(startTime, "millisecond"))
        }
    }, 1)

    //endregion

    //region Handle

    const handleRecall = (recall: boolean) => {
        setHide(1)
        const tempElement = listElement.shift()!!
        if (recall) {
            setListElement([...listElement])
        } else {
            handleError(listElement[0].id, 'recallIt')
            setListElement([...listElement, tempElement])
        }

        if(listElement.length == 0) {
            callback('Recall It')
            setListElement([{
                id:"1",
                sharp:"Inu",
                blur:"Chien"
            }])
        }

        setStartTime(moment())
        setLoopTime(0)
    }
    //endregion

    return (
        <Box sx={mainContainer}>
            <Card><CardContent sx={cardMain}>
                <Card sx={cardListElement} elevation={8}><CardContent>
                    <Typography sx={mainTypo}>{listElement[0].sharp}</Typography>
                </CardContent></Card>

                <Box sx={{width:"80%"}}>
                    <LinearProgress variant="determinate" value={(loopTime/30000)*100} sx={{
                        backgroundColor:'#D9D9D9',
                        "span":{
                            backgroundColor:'#FF0000',
                        }
                    }}/>
                </Box>

                <Card sx={cardListElement} elevation={8}><CardContent>
                    <Typography sx={{...mainTypo, ...((hide != 2 && hide != 3 ) && {filter: "blur(10px)"}) }}>{listElement[0].blur}</Typography>
                </CardContent></Card>

                <Box sx={{marginTop:3, width:"80%"}}>
                    <Box sx={{display: hide == 1 ? 'flex' : 'none'}}>
                        <Button onClick={() => setHide(2)} text={"Afficher"}/>
                    </Box>

                    <Box sx={{display: hide == 3 ? 'flex' : 'none'}}>
                        <Button onClick={() => handleRecall(false)} text={"Continuer"}/>
                    </Box>

                    <Box sx={{display: hide == 2 ? 'flex' : 'none', flexDirection:'column'}}>
                        <Button onClick={() => handleRecall(true)} text={"Souvenu"}/>
                        <Button onClick={() => handleRecall(false)} text={"Oublier"}/>
                    </Box>
                </Box>

            </CardContent></Card>
        </Box>
    );
};

export default RecallIt;
