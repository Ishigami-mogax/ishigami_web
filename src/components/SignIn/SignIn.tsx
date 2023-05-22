import React, { type FC, type PropsWithChildren } from "react"
import type { PropsInterface } from "./SignIn.constant"
import { styles } from "./SignIn.style"
import { useTranslation } from "react-i18next"
import { CssBaseline, Grid } from "@mui/material"
import BackgroundImage from "../SignUp/BackgroundImage/BackgroundImage"
import SignInForm from "./SignInForm/SignInForm"

const SignIn: FC<PropsWithChildren<PropsInterface>> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  //region Default
  const {} = styles
  const {} = props
  const { } = useTranslation()
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
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <BackgroundImage />
      <SignInForm />
    </Grid>
  )
}

export default SignIn
