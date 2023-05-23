import React, {FC, PropsWithChildren} from 'react'
import {Box, Card, CardContent, CircularProgress, Typography} from "@mui/material"
import {styles} from "./Resume.style"
import {PropsInterface} from "./Resume.constant";
import {useTranslation} from "react-i18next";

const Resume: FC<PropsWithChildren<PropsInterface>> = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const {} = styles
    const { result } = props
    const { t } = useTranslation()
    const average = [
        {
            name:'Pair It',
            percent:result.reduce((acc, cur) => cur.pairIt ? acc+1 : acc, 0)/result.length*100
        },
        {
            name:'Guess It',
            percent:result.reduce((acc, cur) => cur.guessIt ? acc+1 : acc, 0)/result.length*100
        },
        {
            name:'Recall It',
            percent:result.reduce((acc, cur) => cur.recallIt ? acc+1 : acc, 0)/result.length*100
        },
        {
            name:'Type It',
            percent:result.reduce((acc, cur) => cur.typeIt ? acc+1 : acc, 0)/result.length*100
        }
    ]
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
            <Box sx={{display:'flex'}}>
                {average.map((a) => (
                    <Card>
                        <CardContent>
                            <CircularProgress variant="determinate" value={a.percent} />
                            <Typography>{a.name}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
            <Box sx={{display:'flex', flexWrap:'wrap'}}>
                {result.map((r) => (
                    <Card>
                        <CardContent>
                            <Typography>{r.signification}</Typography>
                            <Typography>{r.kanji}</Typography>
                            <Card>
                                <CardContent>
                                    <Typography>{r.kun}</Typography>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Typography>{r.on}</Typography>
                                </CardContent>
                            </Card>
                            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                <img src={"/ressources/images/" + (r.pairIt?"right" : "wrong") + ".png"} alt="Ishigami-logo.png" style={{height:30}}/>
                                <img src={"/ressources/images/" + (r.guessIt?"right" : "wrong") + ".png"} alt="Ishigami-logo.png" style={{height:30}}/>
                                <img src={"/ressources/images/" + (r.recallIt?"right" : "wrong") + ".png"} alt="Ishigami-logo.png" style={{height:30}}/>
                                <img src={"/ressources/images/" + (r.typeIt?"right" : "wrong") + ".png"} alt="Ishigami-logo.png" style={{height:30}}/>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Resume;
