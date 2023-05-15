import {FC, PropsWithChildren} from "react";
import {PropsInterface} from "../../_example/Example.constant";
import {styles} from "../../_example/Example.style";
import {useTranslation} from "react-i18next";
import {Box} from "@mui/material";

const FormInput: FC = (props:PropsWithChildren<PropsInterface>) : JSX.Element => {

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
        <Box>

        </Box>
    );
};

export default FormInput;
