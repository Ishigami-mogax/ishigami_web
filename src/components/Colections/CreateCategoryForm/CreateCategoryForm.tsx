import { FC, PropsWithChildren, useState } from "react";
import { PropsInterface } from "./CreateCategoryForm.constant";
import { styles } from "./CreateCategoryForm.style";
import { useTranslation } from "react-i18next";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import Buttons from "../../_input/Button/Button";

const CreateCategoryForm: FC<PropsWithChildren<PropsInterface>> = (
  props: PropsWithChildren<PropsInterface>
): JSX.Element => {
  //region Default
  const {} = styles;
  const { isOpen } = props;
  const { t } = useTranslation();
  //endregion

  //region Context
  //endregion

  //region Route
  //endregion

  //region UseState
  const [categoryName, setCategoryName] = useState("");
  //endregion

  //region UseEffect

  //endregion

  //region Handle
  //endregion

  return (
    <Dialog open={isOpen}>
      <DialogTitle>
        <Box>Nouvelle Catégorie</Box>
      </DialogTitle>
      <DialogContent sx={{ margin: 2 }}>
        <TextField
          type={"text"}
          id={"id"}
          label={"Catégorie"}
          name={"name"}
          autoComplete={"name"}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Buttons text={"Créer la catégorie"} onClick={() => {}} />
      </DialogActions>
    </Dialog>
    // <Paper
    //   elevation={6}
    //   square
    //   sx={{
    //     width: "40%",
    //     height: "30%",
    //     position: "absolute",
    //     top: "30%",
    //     left: "30%",
    //     borderRadius: 5,
    //   }}
    // >
    //   <Box
    //     sx={{
    //       padding: 5,
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Typography variant={"h4"}>Nouvelle Catégorie</Typography>
    //     <TextField
    //       type={"type"}
    //       id={"id"}
    //       label={"label"}
    //       name={"name"}
    //       autoComplete={"name"}
    //     />
    //     <Buttons text={"Créer la catégorie"} onClick={} />
    //   </Box>
    // </Paper>
  );
};

export default CreateCategoryForm;
