import React, { type FC, type PropsWithChildren, useState } from "react"
import type { PropsInterface } from "./AuthenticationForm.constant"
import { styles } from "./AuthenticationForm.style"
import { Box, Divider, Grid, Link, Paper, Typography } from "@mui/material"
import FormInput from "../../_input/FormInput/FormInput"
import ButtonGlobal from "../../_input/Button/Button"
import { logInWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle } from "../../../utils/firebase"

const AuthenticationForm: FC<PropsWithChildren<PropsInterface>> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  // region Default
  const { boxStyle, dividerStyle, existingAccount, existingAccountLink } = styles
  const { signUp } = props
  // endregion

  // region Context
  // endregion

  // region Route
  // endregion

  // region UseState
  const [isSignup, setIsSignUp] = useState<boolean>(signUp)
  // const [pseudo, setPseudo] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)
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

  const handleConnection: (email: string, password: string) => Promise<void> = async (email: string, password: string): Promise<void> => {
    await logInWithEmailAndPassword(email, password)
    document.location = '/'
  }
  // endregion

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: "#fff" }}>
      <Box sx={boxStyle}>
        {isSignup
          ? <Typography component="h1" variant="h4" sx={{ color: "#000" }}>
          Création de compte
        </Typography>
          : <Typography component="h1" variant="h4" sx={{ color: "#000" }}>
          Inscription
        </Typography>
        }
        <Box component="form" noValidate sx={{ width: "100%" }}>
          {isSignup && <FormInput
            id={"pseudo"}
            label={"Pseudo"}
            name={"pseudo"}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
              // setPseudo(e.target.value)
            }}
          />
          }
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
            type={showPassword ? "text" : "password"}
            label={"Mot de passe"}
            name={"password"}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
              setPassword(e.target.value)
            }}
            handleShowPassword={handleShowPassword}
          />
          {isSignup && <FormInput
            id={"password-confirm"}
            type={"password"}
            label={"Confirmation du mot de passe"}
            name={"password-confirm"}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
              setConfirmPassword(e.target.value)
            }}
          />}
          <ButtonGlobal
            onClick={async (): Promise<void> => {
              isSignup ? (await handleRegister(email, password, confirmPassword)) : (await handleConnection(email, password))
            }}
          >
            {isSignup ? "Créer un compte" : "S'inscrire"}
          </ButtonGlobal>
          <Divider variant="fullWidth" sx={dividerStyle} />
          <ButtonGlobal image={"ressources/images/google.svg"} onClick={handleGoogleRegister}>
            avec Google
          </ButtonGlobal>
          <Box sx={existingAccount}>
            <Typography component="p">{isSignup ? "Vous avez déjà un compte ?" : "Vous n’avez pas de compte ?"}</Typography>
            <Link variant="body2" sx={existingAccountLink} onClick={handleSwitchConnection}>
              {isSignup ? "Connectez-vous !" : "Créer un compte"}
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default AuthenticationForm
