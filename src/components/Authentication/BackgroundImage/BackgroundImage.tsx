import type { FC, PropsWithChildren } from "react"
import type { PropsInterface } from "./BackgroundImage.constant"
import { styles } from "./BackgroundImage.style"
import { useTranslation } from "react-i18next"
import { Grid } from "@mui/material"
import { images } from "./BackgroundImage.constant"

const BackgroundImage: FC<PropsWithChildren<PropsInterface>> = (
  props: PropsWithChildren<PropsInterface>
): JSX.Element => {
  //region Default
  const {} = styles
  const {} = props
  const { t } = useTranslation()
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
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: `url(${images[Math.floor(Math.random() * images.length)]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
  )
}

export default BackgroundImage
