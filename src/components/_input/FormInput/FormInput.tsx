import React, {FC, PropsWithChildren} from "react";
import {PropsInterface} from "./FormInput.constant";
import {styles} from "../../_example/Example.style";
import {useTranslation} from "react-i18next";
import {Box, TextField} from "@mui/material";

const FormInput: FC<PropsWithChildren<PropsInterface>> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {

    //region Default
    const {} = styles
    const {id, label, name, type} = props
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
            <TextField
                // sx={TextFieldMui}
                margin="normal"
                required
                fullWidth
                type={type}
                id={id}
                label={label}
                name={name}
                autoComplete={name}
            />
        </Box>
    );
};

export default FormInput;
