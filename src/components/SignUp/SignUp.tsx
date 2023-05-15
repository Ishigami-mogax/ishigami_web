import React, {FC, PropsWithChildren} from 'react'
import {Box, CssBaseline, Divider, Grid, Link, Paper, Typography} from "@mui/material"
import {PropsInterface} from "../_global/Navbar/Navbar.constant";
import {jsx} from "@emotion/react";
import {useTranslation} from "react-i18next";
import {styles} from "./SignUp.style";
import {images} from './SignUp.constant';
import ButtonGlobal from "../_input/Button/Button";
import JSX = jsx.JSX;
import FormInput from "../_input/FormInput/FormInput";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import SignUpForm from "./SignUpForm/SignUpForm";

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
        <Grid container component="main" sx={{height: '100vh'}}>
            <CssBaseline/>
            <BackgroundImage/>
            <SignUpForm/>
        </Grid>
    );
};

export default SignUp;
