import { type FC, type PropsWithChildren } from "react"
import { Box, Typography } from "@mui/material"
import { styles } from "./NavItem.style"
import { type ISelectedItemStyle, type PropsInterface } from "./NavItem.constant"
import { useTranslation } from "react-i18next"
import Icon from "@mui/material/Icon"
import { NavLink } from "react-router-dom"
import { type IIsActive } from "../Navbar.constant"

const NavItem: FC<PropsInterface> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  // region Default
  const { selectedItem, defaultStyle, boxStyle } = styles
  const {
    value: { icon, title, navigation }
  } = props
  const { t } = useTranslation()
  // endregion

  // region Context
  // endregion

  // region Route
  // endregion

  // region UseState
  // endregion

  // region UseEffect

  // endregion

  // region Handle
  // endregion

  return (
    <NavLink
      to={navigation}
      style={({ isActive }: IIsActive): ISelectedItemStyle => (isActive ? { ...selectedItem } : { ...defaultStyle })}
    >
      <Box sx={{ ...boxStyle }}>
        <Icon>{icon}</Icon>
        <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#BC2727" }}>{title}</Typography>
      </Box>
    </NavLink>
  )
}

export default NavItem
