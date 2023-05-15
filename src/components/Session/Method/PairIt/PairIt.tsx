import {FC, PropsWithChildren, useEffect, useState} from 'react'
import {Box, Button, Card, CardContent, Typography} from "@mui/material"
import {styles} from "./PairIt.style"
import {PropsInterface} from "./PairIt.constant";
import {useTranslation} from "react-i18next";

const PairIt: FC = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const {} = styles
    const {} = props
    const { t } = useTranslation()
    let listTop = [
        {
            id:"R-1",
            value:'Inu',
            validate:false
        },
        {
            id:"R-2",
            value:'Neko',
            validate:false
        },
        {
            id:"R-3",
            value:'Uma',
            validate:false
        },
        {
            id:"R-4",
            value:'Ushi',
            validate:false
        },
        {
            id:"R-5",
            value:'Dakuda',
            validate:false
        }
    ]
    let listBottom = [
        {
            id:"L-1",
            value:'Cheval',
            validate:false
        },
        {
            id:"L-2",
            value:'Dromadaire',
            validate:false
        },
        {
            id:"L-3",
            value:'Chien',
            validate:false
        },
        {
            id:"L-4",
            value:'Chat',
            validate:false
        },
        {
            id:"L-5",
            value:'Vache',
            validate:false
        }
    ]

    //endregion

    //region Context
    //endregion

    //region Route
    //endregion

    //region UseState
    const [right, setRight] = useState<any>(null)
    const [left, setLeft] = useState<any>(null)
    //endregion

    //region UseEffect
    useEffect(() => {
        console.log(right)
        console.log(left)

        if(right && left) {
            if(right.id.slice(2) == left.id.slice(2)) {
                console.log("pass")
                listTop = listTop.map((e) => e.id === right.id ? { ...e, validate: true } : e)
                listBottom = listBottom.map((e) => e.id === right.id ? { ...e, validate: true } : e)
            }
            setRight(null)
            setLeft(null)
        }


    }, [right, left])
    //endregion

    //region Handle
    //endregion

    return (
        <Box sx={{margin:"auto", width:'75%'}}>
            <Card><CardContent>
                <Box sx={{display:'grid'}}>
                    {listTop.map((w, index)=> (
                        <Card sx={{margin:1, gridRow:1, gridColumn:index+1, display:'flex', justifyContent:'center', alignItems:'center', height:140, width:"80%"}}
                              onClick={() => setRight(w)}><CardContent>
                            <Typography sx={{fontWeight:'700', fontSize:24, wordBreak:'break-word', textAlign:'center'}}>{w.value}</Typography>
                        </CardContent></Card>
                    ))}
                    {listBottom.map((w, index)=> (
                        <Card sx={{margin:1, gridRow:2, gridColumn:index+1, display:'flex', justifyContent:'center', alignItems:'center', height:140, width:"80%"}}
                              onClick={() => setLeft(w)}><CardContent>
                            <Typography sx={{fontWeight:'700', fontSize:24, wordBreak:'break-word', textAlign:'center'}}>{w.value}</Typography>
                        </CardContent></Card>
                    ))}
                </Box>
                <Button onClick={() => console.log(listTop)}>Test</Button>
            </CardContent></Card>
        </Box>
    );
};

export default PairIt;
