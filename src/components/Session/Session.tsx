import {FC, PropsWithChildren} from 'react'
import {Box} from "@mui/material"
import {styles} from "./Session.style"
import {PropsInterface} from "./Session.constant";
import {useTranslation} from "react-i18next";
import Navbar from "../_global/Navbar/Navbar";
import MethodCheck from "./AdvancementMenu/MethodCheck/MethodCheck";
import AdvancementMenu from "./AdvancementMenu/AdvancementMenu";

const Session: FC = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

    //region Default
    const {} = styles
    const {} = props
    const { t } = useTranslation()
    const methodList : { name:string, check:boolean }[] = [
        {
            name:'Pair It',
            check:true
        },
        {
            name:'Guess It',
            check:true
        },
        {
            name:'Recall It',
            check:false
        },
        {
            name:'Type It',
            check:false
        },
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
        <Navbar>
            <AdvancementMenu methodList={methodList}/>
        </Navbar>
    );
};

export default Session;
