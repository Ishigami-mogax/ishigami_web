import {FC, PropsWithChildren, useEffect, useState} from 'react'
import {Box, Card, CardContent, Typography} from "@mui/material"
import {styles} from "./GuessIt.style"
import {PropsInterface} from "./GuessIt.constant";
import {useTranslation} from "react-i18next";
import Button from '../../../_input/Button/Button';

const GuessIt: FC<PropsWithChildren<PropsInterface>> = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const { itemTypo, cardListElement, cardMain, mainTypo, mainContainer } = styles
    const { guess, callback, handleError } = props
    const { t } = useTranslation()

    //endregion

    //region Context
    //endregion
    //region Route
    //endregion

    //region UseState
    const [selected, setSelected] = useState("")
    const [listElement, setListElement] = useState([...guess])
    const [listToFind, setListToFind] = useState([...guess])
    //endregion

    //region UseEffect
    useEffect(() => {

        if(selected==listToFind[0].id){
            setTimeout(() => {
                listToFind.shift()
                setListToFind([...listToFind])
                setSelected("")

                if(listToFind.length == 0) {
                    setListToFind([{
                        id:"",
                        offer:'',
                        toFind:''
                    }])
                    callback('Guess It')
                }
            }, 1000)

        } else if (listToFind[0].id != "") {
            handleError(listToFind[0].id, 'guessIt')
        }
    }, [selected])
    //endregion
    //region Handle
    //endregion

    return (
        <Box sx={mainContainer}>
            <Card sx={{display:'flex'}}>
                <CardContent sx={{width:1, display:'flex', alignItems:'center', flexDirection:'column'}}>
                    <Card sx={cardMain}>
                        <CardContent>
                            <Typography sx={mainTypo}>{listToFind[0].toFind}</Typography>
                        </CardContent>
                    </Card>
                    <Box sx={{marginTop:5, width:1, display:'flex', flexDirection:'column', alignItems:'center'}}>
                        {listElement.map((e) => (
                            <Card sx={{...cardListElement,
                                        ...(selected===e.id && {backgroundColor: selected === listToFind[0].id ? '#5DC852' : '#FF0000'})
                            }}
                            onClick={() => !selected && setSelected(e.id)}>
                                <CardContent>
                                    <Typography sx={itemTypo}>{e.offer}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                    <Box sx={{width:"80%", ...((!selected || selected === listToFind[0].id) && {display:"none"})}}>
                        <Button onClick={() => {
                            const tempElement = listToFind.shift()!!
                            setListToFind([...listToFind, tempElement])
                            setSelected("")
                        }} text={"Valider"} />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default GuessIt;
