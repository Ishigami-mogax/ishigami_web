import React, { type FC, type PropsWithChildren, useState } from "react"
import { CssBaseline, Grid } from "@mui/material"
import type { PropsInterface } from "./Authentication.constant"
import { useTranslation } from "react-i18next"
import { styles } from "./Authentication.style"
import BackgroundImage from "./BackgroundImage/BackgroundImage"
import SignUpForm from "./AuthenticationForm/AuthenticationForm"

const Authentication: FC<PropsWithChildren<PropsInterface>> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  //region Default
  const {} = styles
  const { sign } = props
  const { t } = useTranslation()
  //endregion

  //region Context
  //endregion

  //region Route
  //endregion

  //region UseState
  const [isSignup, setIsSignUp] = useState(sign)
  //endregion

  //region UseEffect

  //endregion

  //region Handle
  //endregion

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <BackgroundImage />
      <SignUpForm signUp={sign} />
    </Grid>
  )
}

export default Authentication
