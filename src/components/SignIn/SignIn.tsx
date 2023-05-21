import React, { FC, PropsWithChildren } from "react"
import { PropsInterface } from "./SignIn.constant"
import { styles } from "./SignIn.style"
import { useTranslation } from "react-i18next"
import { Box, CssBaseline, Grid } from "@mui/material"
import BackgroundImage from "../SignUp/BackgroundImage/BackgroundImage"
import SignUpForm from "../SignUp/SignUpForm/SignUpForm"
import SignInForm from "./SignInForm/SignInForm"

const SignIn: FC<PropsWithChildren<PropsInterface>> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
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
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <BackgroundImage />
      <SignInForm />
    </Grid>
  )
}

export default SignIn
