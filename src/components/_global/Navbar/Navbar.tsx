import { type FC, type PropsWithChildren } from "react"
import { Box } from "@mui/material"
import { styles } from "./Navbar.style"
import { type IItemMenu, itemMenu, profileItem, type PropsInterface } from "./Navbar.constant"
import NavItem from "./NavItem/NavItem"

const Navbar: FC = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  // region Default
  const { navbarStyle, imageStyle, principalItems, profileItemStyle } = styles
  const { children } = props
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
    <>
      <Box sx={navbarStyle}>
        <Box sx={imageStyle}>
          <img src="/ressources/images/ishigami_logo.png" alt="Ishigami-logo.png" style={{ width: "inherit" }} />
        </Box>
        <Box sx={principalItems}>
          {itemMenu.map(
            (item: IItemMenu): JSX.Element => (
              <NavItem value={item} key={item.title} />
            )
          )}
        </Box>
        <Box sx={profileItemStyle}>
          <NavItem value={profileItem} />
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>{children}</Box>
    </>
  )
}

export default Navbar
