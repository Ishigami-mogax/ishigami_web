import {FC, PropsWithChildren, useEffect, useState} from 'react'
import {Box, Card, CardContent, Typography} from "@mui/material"
import {styles} from "./RecallIt.style"
import {PropsInterface} from "./RecallIt.constant";
import {useTranslation} from "react-i18next";
import moment from "moment";
import Button from "../../../_input/Button/Button";
import {useInterval} from "usehooks-ts";

const RecallIt: FC = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const { cardListElement, cardMain, mainContainer, mainTypo, itemTypo} = styles
    const {} = props
    const { t } = useTranslation()
    const [listElement, setListElement] = useState([
        {
            id:"1",
            sharp:"Inu",
            blur:"Chien"
        },
        {
            id:"2",
            sharp:"Neko",
            blur:"Chat"
        },
        {
            id:"3",
            sharp:"Dakuda",
            blur:"Dromadaire"
        },
        {
            id:"4",
            sharp:"Ushi",
            blur:"Vache"
        },
        {
            id:"5",
            sharp:"Uma",
            blur:"Cheval"
        }
    ])

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
    useEffect(() => {
        const interval = setInterval(() => {handleSetTime()}, 1000);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        // console.log(loopTime)
    }, [loopTime])

    useInterval(() => {
        console.log(loopTime)
        if(loopTime>=10000){
            setLoopTime(0)
            setStartTime(moment())
        } else {
            setLoopTime(moment().diff(startTime, "millisecond"))
        }
    }, 1)

    //endregion

    //region Handle

    const handleSetTime = () => {}

    const handleRecall = (recall: boolean) => {
        setHide(1)
        const tempElement = listElement.shift()!!
        if (recall) {
            setListElement([...listElement])
        } else {
            setListElement([...listElement, tempElement])
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

                <Box>

                </Box>

                <Card sx={cardListElement} elevation={8}><CardContent>
                    <Typography sx={mainTypo}>{listElement[0].blur}</Typography>
                </CardContent></Card>

                <Box sx={{marginTop:3, width:"80%"}}>
                    <Box sx={{display: hide == 1 ? 'flex' : 'none'}}>
                        <Button onClick={() => setHide(2)} text={"Afficher"}/>
                    </Box>

                    <Box sx={{display: hide == 3 ? 'flex' : 'none'}}>
                        <Button onClick={() => handleRecall(false)} text={"Continuer"}/>
                    </Box>

                    <Box sx={{display: hide == 2 ? 'flex' : 'none'}}>
                        <Button onClick={() => handleRecall(true)} text={"Souvenu"}/>
                        <Button onClick={() => handleRecall(false)} text={"Oublier"}/>
                    </Box>
                </Box>


            </CardContent></Card>
        </Box>
    );
};

export default RecallIt;
