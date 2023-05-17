import {FC, PropsWithChildren, useState} from 'react'
import {Box, Button, Card, CardContent} from "@mui/material"
import {styles} from "./RecallIt.style"
import {PropsInterface} from "./RecallIt.constant";
import {useTranslation} from "react-i18next";
import moment from "moment";

const RecallIt: FC = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const {} = styles
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
    setInterval(() => {
        if (loopTime >= 30000) {
            setHide(3)
        } else if (hide == 1) {
            setLoopTime(moment().diff(startTime, "millisecond"))
        }
    }, 1)
    //endregion

    //region Handle
    const handleRecall = (recall: boolean) => {
        setHide(1)
        const tempElement = findElements.shift()!!
        if (recall) {
            setToFindElements([...findElements])
        } else {
            setToFindElements([...findElements, tempElement])
        }

        setStartTime(moment())
        setLoopTime(0)

    }
    //endregion

    return (
        <Box>
            <Card><CardContent>
                <Card><CardContent>

                </CardContent></Card>
                <Box>

                </Box>
                <Card><CardContent>

                </CardContent></Card>
            </CardContent></Card>
            <Box sx={{display: hide == 1 ? 'flex' : 'none'}}>
                <Button onClick={() => setHide(2)}>Afficher</Button>
            </Box>
            <Box sx={{display: hide == 3 ? 'flex' : 'none'}}>
                <Button onClick={() => handleRecall(false)}>Continuer</Button>
            </Box>
            <Box sx={{display: hide == 2 ? 'flex' : 'none'}}>
                <Button onClick={() => handleRecall(true)}>Souvenu</Button>
                <Button onClick={() => handleRecall(false)}>Oublier</Button>
            </Box>
        </Box>
    );
};

export default RecallIt;
