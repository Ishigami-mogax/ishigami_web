import React, {FC, PropsWithChildren} from 'react'
import {Box, Button, CssBaseline, Divider, Grid, Link, Paper, TextField, Typography} from "@mui/material"
// import {ExampleProps, images} from "./SignUpConstant"
// import {SignUpStyle} from "./SignUpStyle"
import {Google} from "@mui/icons-material";
import {PropsInterface} from "../_global/Navbar/Navbar.constant";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;
import {useTranslation} from "react-i18next";
import {styles} from "./SignUp.style";
import { images } from './SignUp.constant';

const SignUp: FC = (props: PropsWithChildren<PropsInterface>): JSX.Element => {

    //region Default
    const {} = styles
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
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${images[Math.floor(Math.random() * images.length)]})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#000000'}}>
                <Box
                    sx={{
                        my: 8,
                        mx: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h4" sx={{color:"#00CCFF"}}>
                        Création de compte
                    </Typography>
                    <Box component="form" noValidate sx={{width:"100%"}}>
                        <TextField
                            // sx={TextFieldMui}
                            margin="normal"
                            required
                            fullWidth
                            id="pseudo"
                            label="Pseudo"
                            name="pseudo"
                            autoComplete="pseudo"
                        />
                        <TextField
                            // sx={TextFieldMui}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Adresse Email"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            // sx={TextFieldMui}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Mot de passe"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            // sx={TextFieldMui}
                            margin="normal"
                            required
                            fullWidth
                            name="password-confirm"
                            label="Confirmation du mot de passe"
                            type="password"
                            id="password-confirm"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Créer un compte
                        </Button>
                        <Divider variant="fullWidth" sx={{borderColor:"#FFFFFF", height: 5, width: "75%", margin:"0 auto"}}/>
                        <Button
                            variant="contained"
                            startIcon={<Google />}
                            sx={{
                                marginTop: 3,
                                padding: 1.5,
                            }}
                            fullWidth
                        >
                            avec Google
                        </Button>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            paddingTop: 2,
                            paddingBottom: 3
                        }}>
                            <Typography component="p">
                                Vous avez déjà un compte ?
                            </Typography>
                            <Link href="/login" variant="body2">
                                Connectez-vous !
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SignUp;
