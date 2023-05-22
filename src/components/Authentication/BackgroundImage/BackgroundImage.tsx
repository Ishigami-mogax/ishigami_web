import type { FC, PropsWithChildren } from "react"
import type { PropsInterface } from "./BackgroundImage.constant"
import { Grid } from "@mui/material"
import { images } from "./BackgroundImage.constant"

const BackgroundImage: FC<PropsWithChildren<PropsInterface>> = (
  props: PropsWithChildren<PropsInterface>
): JSX.Element => {
  // region Default
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
