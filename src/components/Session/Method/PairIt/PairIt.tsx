import {FC, PropsWithChildren, useEffect, useState} from 'react'
import {Box, Button, Card, CardContent, Fade, Typography} from "@mui/material"
import {styles} from "./PairIt.style"
import {PropsInterface} from "./PairIt.constant";
import {useTranslation} from "react-i18next";
import { useSpring, animated } from 'react-spring';
import axios from "axios";

const PairIt: FC<PropsWithChildren<PropsInterface>> = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const { gridContainer, mainContainer, topCard, bottomCard, itemTypo } = styles
    const { firstPair, secondPair, callback, handleError } = props
    const { t } = useTranslation()

    //endregion

    //region Context
    //endregion

    //region Route
    //endregion

    //region UseState
    const [top, setTop] = useState<any[]>([...firstPair])
    const [bottom, setBottom] = useState<any[]>([...secondPair])

    const [right, setRight] = useState<string>("")
    const [left, setLeft] = useState<string>("")
    //endregion

    //region UseEffect
    useEffect(() => {
        if(right && left) {

            if(right == left) {
                top.find((e) => e.id === right)!!.validate = true
                bottom.find((e) => e.id === left)!!.validate = true

                if(top.every((e) => e.validate)) {
                    callback('Pair It')
                }
            } else {
                handleError(right, 'pairIt')
                handleError(left, 'pairIt')
            }

            setRight("")
            setLeft("")
        }
    }, [right, left])
    //endregion

    //region Handle
    //endregion

    return (
        <Box sx={mainContainer}>
            <Card><CardContent>
                <Box sx={gridContainer}>
                    {top.map((w, index)=> (
                        <Card sx={{...topCard, gridColumn:index+1,
                            ...(w.id == right && {backgroundColor:'#D9D9D9'}),
                            ...(w.validate && {backgroundColor:'#5DC852', opacity:0, })
                        }}
                              key={index}
                              onClick={() => setRight(w.id)}>
                            <CardContent>
                                <Typography sx={itemTypo}>{w.value}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                    {bottom.map((w, index)=> (
                        <Card sx={{...bottomCard, gridColumn:index+1,
                            ...(w.id == left && {backgroundColor:'#D9D9D9'}),
                            ...(w.validate && {backgroundColor:'#5DC852', opacity:0, })
                        }}
                              key={index}
                              onClick={() => setLeft(w.id)}>
                            <CardContent>
                                <Typography sx={itemTypo}>{w.value}</Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </CardContent></Card>
        </Box>
    );
};

export default PairIt;
