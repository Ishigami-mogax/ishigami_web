import {FC, PropsWithChildren} from "react";
import {PropsInterface} from "../SignUp/SignUp.constant";
import {styles} from "./SignIn.style";
import {useTranslation} from "react-i18next";
import {Box} from "@mui/material";

const SignIn: FC = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
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
        <Box>

        </Box>
    );
}

export default SignIn;