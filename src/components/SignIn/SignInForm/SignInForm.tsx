import React, { type FC, type PropsWithChildren, useState } from "react"
import { type PropsInterface } from "./SignInForm.constant"
import { styles } from "./SignInForm.style"
import { useTranslation } from "react-i18next"
import { Box, Divider, Grid, Link, Paper, Typography } from "@mui/material"
import FormInput from "../../_input/FormInput/FormInput"
import ButtonGlobal from "../../_input/Button/Button"
import { logInWithEmailAndPassword, signInWithGoogle } from "../../../utils/firebase"

const SignInForm: FC = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  //region Default
  const { boxStyle, dividerStyle, existingAccount, existingAccountLink } = styles
  const {} = props
  const {} = useTranslation()
  //endregion

  //region Context
  //endregion

  //region Route
  //endregion

  //region UseState
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  //endregion

  //region UseEffect
  //endregion

  //region Handle
  const handleGoogleConnection: () => Promise<void> = async (): Promise<void> => {
    await signInWithGoogle()
    document.location = '/'
  }

  const handleConnection: (email: string, password: string) => Promise<void> = async (email: string, password: string): Promise<void> => {
    await logInWithEmailAndPassword(email, password)
    document.location = '/'
  }
  //endregion

  return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#fff' }}>
            <Box sx={boxStyle}>
                <Typography component="h1" variant="h4" sx={{ color: "#000" }}>
                    Connexion
                </Typography>
                <Box component="form" noValidate sx={{ width: "100%" }}>
                    <FormInput id={"email"} type={"email"} label={"Adresse Email"} name={"email"}
                               onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => { setEmail(e.target.value) }}/>
                    <FormInput id={"password"} type={"password"} label={"Mot de passe"} name={"password"}
                               onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => { setPassword(e.target.value) }}/>
                    <ButtonGlobal type={"submit"} onClick={async (): Promise<void> => { await handleConnection(email, password) }}>Se connecter</ButtonGlobal>
                    <Divider variant="fullWidth" sx={dividerStyle}/>
                    <ButtonGlobal image={"ressources/images/google.svg"} onClick={handleGoogleConnection}>
                        avec Google
                    </ButtonGlobal>
                    <Box sx={existingAccount}>
                        <Typography component="p">
                            Vous n’avez pas de compte ?
                        </Typography>
                        <Link href="/sign-up" variant="body2" sx={existingAccountLink}>
                            Créer un compte
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Grid>
  )
}

export default SignInForm
