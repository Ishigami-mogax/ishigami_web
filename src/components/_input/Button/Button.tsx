import { type FC, type PropsWithChildren } from "react"
import { type PropsInterface } from "./Button.constant"
import { styles } from "./Button.style"
import { Box, Button } from "@mui/material"
import Icon from "@mui/material/Icon"

const ButtonGlobal: FC<PropsWithChildren<PropsInterface>> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  // region Default
  const { buttonStyle, imageStyle } = styles
  const { children, type, image, icon, onClick } = props
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
        <Button variant="contained" fullWidth sx={buttonStyle} type={type} onClick={onClick}>
            {image !== "" && <Box sx={{ width: '30px' }}>
                <img src={image} alt={image} style={imageStyle}/>
            </Box>}
            {icon !== "" && <Icon>{icon}</Icon>}
            {children}
        </Button>
  )
}

export default ButtonGlobal
