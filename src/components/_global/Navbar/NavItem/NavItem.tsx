import {FC, PropsWithChildren} from 'react'
import {Box, Typography} from "@mui/material"
import {styles} from "./NavItem.style"
import {PropsInterface} from "./NavItem.constant";
import {useTranslation} from "react-i18next";
import Icon from '@mui/material/Icon';

const NavItem: FC<PropsInterface> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
    //region Default
    const {} = styles
    const {value: {icon, title}} = props
    const {t} = useTranslation()
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
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F3B6B6',
            width: 65,
            height: 65,
            borderRadius: 3,
            margin: 1,
        }}>
            {/*<HomeIcon sx={{width: 30, height: 30, color: '#BC2727'}}/>*/}
            <Icon>{icon}</Icon>
            <Typography sx={{fontSize: 15, fontWeight: 600, color: '#BC2727'}}>{title}</Typography>
        </Box>
    );
}

export default NavItem;
