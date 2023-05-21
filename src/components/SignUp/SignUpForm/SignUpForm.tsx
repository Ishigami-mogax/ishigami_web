import React, { type FC, type PropsWithChildren, useState } from "react"
import type { PropsInterface } from "./SignUpForm.constant"
import { styles } from "./SignUpForm.style"
import { useTranslation } from "react-i18next"
import { Box, Divider, Grid, Link, Paper, Typography } from "@mui/material"
import FormInput from "../../_input/FormInput/FormInput"
import ButtonGlobal from "../../_input/Button/Button"
import { registerWithEmailAndPassword, signInWithGoogle } from "../../../utils/firebase"

const SignUpForm: FC<PropsWithChildren<PropsInterface>> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  // region Default
  const { boxStyle, dividerStyle, existingAccount, existingAccountLink } = styles
  const { signUp } = props
  const { t } = useTranslation()
  // endregion

  // region Context
  // endregion

  // region Route
  // endregion

  // region UseState
  const [isSignup, setIsSignUp] = useState(signUp)
  const [pseudo, setPseudo] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState(false)
  // endregion

  // region UseEffect
  // useEffect(() => {
  //   logout();
  // }, []);
  // endregion

  // region Handle
  const handleShowPassword = (): void => {
    setShowPassword((visibility: boolean) => !visibility)
  }

  const handleSwitchConnection = (): void => {
    setIsSignUp((signup: boolean) => !signup)
  }

  const handleGoogleRegister: () => Promise<void> = async (): Promise<void> => {
    await signInWithGoogle()
    document.location = "/"
  }

  const handleRegister: (email: string, password: string, confirmPassword: string) => Promise<void> = async (
    email: string,
    password: string
  ): Promise<void> => {
    if (email === "" || password === "") throw new Error("All fields must be filled in")
    if (confirmPassword !== password) throw new Error("The password need to be the same")
    await registerWithEmailAndPassword(email, password)
    document.location = "/"
  }
  // endregion

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: "#fff" }}>
      <Box sx={boxStyle}>
        <Typography component="h1" variant="h4" sx={{ color: "#000" }}>
          Création de compte
        </Typography>
        <Box component="form" noValidate sx={{ width: "100%" }}>
          <FormInput
            id={"pseudo"}
            label={"Pseudo"}
            name={"pseudo"}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
              setPseudo(e.target.value)
            }}
          />
          <FormInput
            id={"email"}
            type={"email"}
            label={"Adresse Email"}
            name={"email"}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
              setEmail(e.target.value)
            }}
          />
          <FormInput
            id={"password"}
            type={"password"}
            label={"Mot de passe"}
            name={"password"}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
              setPassword(e.target.value)
            }}
            handleShowPassword={handleShowPassword}
          />
          <FormInput
            id={"password-confirm"}
            type={"password"}
            label={"Confirmation du mot de passe"}
            name={"password-confirm"}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
              setConfirmPassword(e.target.value)
            }}
          />
          <ButtonGlobal
            onClick={async (): Promise<void> => {
              await handleRegister(email, password, confirmPassword)
            }}
          >
            Créer un compte
          </ButtonGlobal>
          <Divider variant="fullWidth" sx={dividerStyle} />
          <ButtonGlobal image={"ressources/images/google.svg"} onClick={handleGoogleRegister}>
            avec Google
          </ButtonGlobal>
          <Box sx={existingAccount}>
            <Typography component="p">Vous avez déjà un compte ?</Typography>
            <Link href="/sign-in" variant="body2" sx={existingAccountLink} onClick={handleSwitchConnection}>
              Connectez-vous !
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default SignUpForm
