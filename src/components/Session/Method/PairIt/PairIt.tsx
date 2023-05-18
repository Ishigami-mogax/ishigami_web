import {FC, PropsWithChildren, useEffect, useState} from 'react'
import {Box, Button, Card, CardContent, Fade, Typography} from "@mui/material"
import {styles} from "./PairIt.style"
import {PropsInterface} from "./PairIt.constant";
import {useTranslation} from "react-i18next";
import { useSpring, animated } from 'react-spring';

const PairIt: FC = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const { gridContainer, mainContainer, topCard, bottomCard, itemTypo } = styles
    const {} = props
    const { t } = useTranslation()

    //endregion

    //region Context
    //endregion

    //region Route
    //endregion

    //region UseState
    const [top, setTop] = useState([
        {
            id:"1",
            value:'Inu',
            validate:false
        },
        {
            id:"2",
            value:'Neko',
            validate:false
        },
        {
            id:"3",
            value:'Uma',
            validate:false
        },
        {
            id:"4",
            value:'Ushi',
            validate:false
        },
        {
            id:"5",
            value:'Dakuda',
            validate:false
        }
    ])
    const [bottom, setBottom] = useState([
        {
            id:"1",
            value:'Cheval',
            validate:false
        },
        {
            id:"2",
            value:'Dromadaire',
            validate:false
        },
        {
            id:"3",
            value:'Chien',
            validate:false
        },
        {
            id:"4",
            value:'Chat',
            validate:false
        },
        {
            id:"5",
            value:'Vache',
            validate:false
        }
    ])

    const [right, setRight] = useState<string>("")
    const [left, setLeft] = useState<string>("")
    //endregion

    //region UseEffect
    useEffect(() => {
        if(right && left) {

            if(right == left) {
                top.find((e) => e.id === right)!!.validate = true
                bottom.find((e) => e.id === left)!!.validate = true
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
