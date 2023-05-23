import {FC, PropsWithChildren, useEffect, useState} from 'react'
import {Box} from "@mui/material"
import {styles} from "./Session.style"
import {PropsInterface} from "./Session.constant"
import Navbar from "../_global/Navbar/Navbar"
import AdvancementMenu from "./AdvancementMenu/AdvancementMenu"
import TypeIt from "./Method/TypeIt/TypeIt"
import axios from "axios";
import PairIt from "./Method/PairIt/PairIt";
import RecallIt from "./Method/RecallIt/RecallIt";
import GuessIt from "./Method/GuessIt/GuessIt";
import Resume from "./Resume/Resume";

const Session: FC = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const {} = styles
    const {} = props
    const [methodList, setMethodeList] = useState<any[]>([
        {
            name:'Pair It',
            check:false
        },
        {
            name:'Guess It',
            check:false
        },
        {
            name:'Recall It',
            check:false
        },
        {
            name:'Type It',
            check:false
        },
    ])
    const [level, setLevel] = useState(0)
    const [wordList, setWordList] = useState<{
        firstPair:any[],
        secondPair:any[],
        guess:any[],
        recall:any[],
        type:any[],
        result:any[]
    }>({
        firstPair:[],
        secondPair:[],
        guess:[],
        recall:[],
        type:[],
        result:[]
    })
    //endregion

    //region Context
    //endregion

    //region Route
    //endregion

    //region UseState
    //endregion

    //region UseEffect
    useEffect(() => {
        setLevel(methodList.reduce((acc, cur) => acc + (cur.check ? 1 : 0), 0))
    }, [methodList])

    useEffect(() => {
        axios.get('http://localhost:4000/sessions')
            .then((res:any) => {
                setWordList(res.data)
            })
    }, [])
    //endregion

    //region Handle
    const handleAdvanceMethod = (method:'Pair It'|'Guess It'|'Recall It'|'Type It') => {
        const tempMethod = methodList.find((e) => e.name == method)
        tempMethod.check = true
        setMethodeList([...methodList])
    }

    const handleWrongWord = (idWord:string, method:string) => {
        const elem = wordList.result.find((e) => e.id == idWord)!!
        elem[method] = false
        setWordList({...wordList})
    }
    //endregion

    return (
        <Navbar>
            <Box sx={{display:'flex'}}>
                <AdvancementMenu methodList={methodList}/>
                {level==0 && <PairIt
                    firstPair={wordList.firstPair}
                    secondPair={wordList.secondPair}
                    callback={handleAdvanceMethod}
                    handleError={handleWrongWord}/>
                }
                {level==1 && <GuessIt
                    guess={wordList.guess}
                    callback={handleAdvanceMethod}
                    handleError={handleWrongWord}/>
                }
                {level==2 && <RecallIt
                    recall={wordList.recall}
                    callback={handleAdvanceMethod}
                    handleError={handleWrongWord}/>
                }
                {level==3 && <TypeIt
                    type={wordList.type}
                    callback={handleAdvanceMethod}
                    handleError={handleWrongWord}/>
                }
                {level==4 && <Resume
                    result={wordList.result}/>
                }
            </Box>
        </Navbar>
    );
};

export default Session;
