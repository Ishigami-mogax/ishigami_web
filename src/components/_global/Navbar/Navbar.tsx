import {FC, PropsWithChildren} from 'react'
import {Box} from "@mui/material"
import {styles} from "./Navbar.style"
import {itemMenu, PropsInterface} from "./Navbar.constant";
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
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'space-between', height: 1}}>
            <Box sx={{width: 70}}>
                <img src="/ressources/images/ishigami_logo.png" alt="Ishigami-logo.png" style={{width: "inherit"}}/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {itemMenu.map((item) => <NavItem value={item}/>)}
            </Box>
            <Box sx={{marginBottom: 1, height: "auto"}}>
                {/*<NavItem value={"Profile"}/>*/}
            </Box>
        </Box>
    );
}

export default Navbar;
