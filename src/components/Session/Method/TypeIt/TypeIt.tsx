import React, {FC, PropsWithChildren, useState} from 'react'
import {Box, Card, CardContent, TextField, Typography} from "@mui/material"
import {styles} from "./TypeIt.style"
import {PropsInterface} from "./TypeIt.constant";
import {useTranslation} from "react-i18next";

const TypeIt: FC = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const { cardListElement, cardMain, mainContainer, mainTypo, titleTypo, itemTypo } = styles
    const {} = props
    const { t } = useTranslation()
    const [listToFind, setListToFind] = useState([
        {
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
        },
        {
            id:"1",
            offer:'Chat',
            kun:[
                {
                    value:'Nen',
                    validate:false
                }
            ],
            on:[
                {
                    value:'Neko',
                    validate:false
                }
            ]
        },
    ])
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

        let onCheck = true
        let kunCheck = true

        listToFind[0].kun.map((k) => {
            if(!k.validate){
                if(k.value == value){
                    k.validate = true
                } else {
                    kunCheck = false
                }
            }
        })

        listToFind[0].on.map((o) => {
            if(!o.validate){
                if(o.value == value){
                    o.validate = true
                } else {
                    onCheck = false
                }
            }
        })

        setListToFind([...listToFind])

        if(onCheck && kunCheck) {
            setTimeout(() => {
                listToFind.shift()
                setListToFind([...listToFind])
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
                            {listToFind[0].kun.map((k) => (
                                <Card sx={cardListElement} key={k.value}>
                                    <CardContent sx={{display:'flex', alignItems:'center', justifyContent:'center', padding:'0 !important',}}>
                                        <Typography sx={{...itemTypo, opacity:k.validate ? 1 : 0}}>{k.value}</Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                        <Box>
                            <Typography sx={titleTypo}>Kunyumi:</Typography>
                            {listToFind[0].on.map((o) => (
                                <Card sx={cardListElement} key={o.value}>
                                    <CardContent sx={{display:'flex', alignItems:'center', justifyContent:'center', padding:'0 !important',}}>
                                        <Typography sx={{...itemTypo, opacity:o.validate ? 1 : 0}}>{o.value}</Typography>
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
