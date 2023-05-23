import React, { type FC, type PropsWithChildren } from "react"
import { CssBaseline, Grid } from "@mui/material"
import type { PropsInterface } from "./Authentication.constant"
import BackgroundImage from "./BackgroundImage/BackgroundImage"
import AuthenticationForm from "./AuthenticationForm/AuthenticationForm"

const Authentication: FC<PropsWithChildren<PropsInterface>> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  // region Default
  const { sign } = props
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
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <BackgroundImage />
      <AuthenticationForm signUp={sign} />
    </Grid>
  )
}

export default Authentication
