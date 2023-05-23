import React, {FC, PropsWithChildren, useState} from 'react'
import {Box, Card, CardContent, TextField, Typography} from "@mui/material"
import {styles} from "./TypeIt.style"
import {PropsInterface} from "./TypeIt.constant";
import {useTranslation} from "react-i18next";

const TypeIt: FC<PropsWithChildren<PropsInterface>> = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const { cardListElement, cardMain, mainContainer, mainTypo, titleTypo, itemTypo } = styles
    const { type, callback, handleError } = props
    const [listToFind, setListToFind] = useState([...type])
    //endregion

    //region Context
    //endregion

    //region Route
    //endregion

    //region UseState
    const [value, setValue] = useState<string>("")
    //endregion

    //region UseEffect
    //endregion

    //region Handle
    const handleSubmit = () => {
        setValue('')

        let wrongCheck = true

        let onCheck = true
        let kunCheck = true

        listToFind[0].kun.map((k:any) => {
            if(!k.validate){
                if(k.reading == value){
                    k.validate = true
                    wrongCheck = false
                } else {
                    kunCheck = false
                }
            }
        })

        listToFind[0].on.map((o:any) => {
            if(!o.validate){
                if(o.reading == value){
                    o.validate = true
                    wrongCheck = false
                } else {
                    onCheck = false
                }
            }
        })

        if(wrongCheck) {
            handleError(listToFind[0].id, 'typeIt')
        }

        setListToFind([...listToFind])

        if(onCheck && kunCheck) {
            setTimeout(() => {
                listToFind.shift()
                setListToFind([...listToFind])

                if(listToFind.length == 0) {
                    setListToFind([{
                        id:"1",
                        offer:'Chien',
                        kun:[
                            {
                                value:'Ken',
                                validate:false
                            }
                        ],
                        on:[
                            {
                                value:'Inu',
                                validate:false
                            }
                        ]
                    }])
                    callback('Type It')
                }
            }, 500)
        }

    }
    //endregion

    return (
        <Box sx={mainContainer}>
            <Card>
                <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Card sx={cardMain}>
                        <CardContent>
                            <Typography sx={mainTypo}>{listToFind[0].offer}</Typography>
                        </CardContent>
                    </Card>
                    <Box sx={{display:'flex', width:1, justifyContent:'space-around', marginTop:5}}>
                        <Box>
                            <Typography sx={titleTypo}>Onyumi:</Typography>
                            {listToFind[0].kun.map((k:any) => (
                                <Card sx={cardListElement} key={k.reading}>
                                    <CardContent sx={{display:'flex', alignItems:'center', justifyContent:'center', padding:'0 !important',}}>
                                        <Typography sx={{...itemTypo, opacity:k.validate ? 1 : 0}}>{k.reading}</Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                        <Box>
                            <Typography sx={titleTypo}>Kunyumi:</Typography>
                            {listToFind[0].on.map((o:any) => (
                                <Card sx={cardListElement} key={o.reading}>
                                    <CardContent sx={{display:'flex', alignItems:'center', justifyContent:'center', padding:'0 !important',}}>
                                        <Typography sx={{...itemTypo, opacity:o.validate ? 1 : 0}}>{o.reading}</Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                    <TextField
                        value={value}
                        onChange={(e) => {setValue(e.target.value)}}
                        onKeyDown={(e) => {if(e.code == 'Enter') handleSubmit() }}
                    ></TextField>
                </CardContent>
            </Card>
        </Box>
    )
}

export default TypeIt;

const objectsEqual = (o1:any, o2:any) =>
    Object.keys(o1).length === Object.keys(o2).length
    && Object.keys(o1).every(p => o1[p] === o2[p]);

const arraysEqual = (a1:any, a2:any) =>
    a1.length === a2.length && a1.every((o:any, idx:any) => objectsEqual(o, a2[idx]));
