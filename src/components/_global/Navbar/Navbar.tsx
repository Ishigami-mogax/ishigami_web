import {FC, PropsWithChildren} from 'react'
import {Box} from "@mui/material"
import {styles} from "./Navbar.style"
import {IItemMenu, itemMenu, profileItem, PropsInterface} from "./Navbar.constant";
import {useTranslation} from "react-i18next";
import NavItem from "./NavItem/NavItem";
import {Image} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";

const Navbar: FC<PropsWithChildren<PropsInterface>> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
    //region Default
    const {navbarStyle, imageStyle, principalItems, profileItemStyle} = styles
    const {children} = props
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
        <>
            <Box sx={navbarStyle}>
                <Box sx={imageStyle}>
                    <img src="/ressources/images/ishigami_logo.png" alt="Ishigami-logo.png" style={{width: "inherit"}}/>
                </Box>
                <Box sx={principalItems}>
                    {itemMenu.map((item: IItemMenu): JSX.Element => <NavItem value={item} key={item.title}/>)}
                </Box>
                <Box sx={profileItemStyle}>
                    <NavItem value={profileItem}/>
                </Box>
            </Box>
            <Box>
                {children}
            </Box>
        </>
    );
}

export default Navbar;
