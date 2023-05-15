import React, {FC, PropsWithChildren} from "react";
import {PropsInterface} from "./SignInForm.constant";
import {styles} from "./SignInForm.style";
import {useTranslation} from "react-i18next";
import {Box, Divider, Grid, Link, Paper, Typography} from "@mui/material";
import FormInput from "../../_input/FormInput/FormInput";
import ButtonGlobal from "../../_input/Button/Button";

const SignInForm: FC = (props: PropsWithChildren<PropsInterface>): JSX.Element => {

    //region Default
    const {boxStyle, dividerStyle, existingAccount, existingAccountLink} = styles
    const {} = props
    const {t} = useTranslation()
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{backgroundColor: '#fff'}}>
            <Box sx={boxStyle}>
                <Typography component="h1" variant="h4" sx={{color: "#000"}}>
                    Connexion
                </Typography>
                <Box component="form" noValidate sx={{width: "100%"}}>
                    <FormInput id={"pseudo"} label={"Pseudo"} name={"pseudo"}/>
                    <FormInput id={"email"} type={"email"} label={"Adresse Email"} name={"email"}/>
                    <FormInput id={"password"} type={"password"} label={"Mot de passe"} name={"password"}/>
                    <ButtonGlobal onClick={(): void => {
                    }}>Se connecter</ButtonGlobal>
                    <Divider variant="fullWidth" sx={dividerStyle}/>
                    <ButtonGlobal image={"ressources/images/google.svg"} onClick={(): void => {}}>
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
    );
}

export default SignInForm;
