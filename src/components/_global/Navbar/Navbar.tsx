import {FC, PropsWithChildren} from 'react'
import {Box} from "@mui/material"
import {styles} from "./Navbar.style"
import {IItemMenu, itemMenu, profileItem, PropsInterface} from "./Navbar.constant";
import {useTranslation} from "react-i18next";
import NavItem from "./NavItem/NavItem";
import {Image} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";

const Navbar: FC = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
    //region Default
    const {} = styles
    const {} = props
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
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'space-between', height: '100%', width: "5%", borderRight: '1px solid #ddd'}}>
            <Box sx={{width: 70, margin: 'auto'}}>
                <img src="/ressources/images/ishigami_logo.png" alt="Ishigami-logo.png" style={{width: "inherit"}}/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', marginTop: '12rem'}}>
                {itemMenu.map((item: IItemMenu) => <NavItem value={item}/>)}
            </Box>
            <Box sx={{marginBottom: 1, height: "auto", marginTop: '12rem'}}>
                <NavItem value={profileItem}/>
            </Box>
        </Box>
    );
}

export default Navbar;
